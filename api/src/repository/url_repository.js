const mysql = require('../config/mysql');

const getByDomain = async function(domain) {
  let connection = null;
  try {
    connection = await mysql.getConnection();
    const [ rows ] = await connection.execute(
      'SELECT city, domain, url FROM city WHERE domain = ?',
      [domain]
    );

    if (!rows.length) {
      return null;
    }
    return rows[0];
  } catch (error) {
    console.error('Error on getByDomain', error)
  } finally {
    if (connection) {
      await connection.release();
    }
  }
}

const addCatalogEntry = function(entry) {
  const dataToWrite = {
    ...entry,
  }
  const csvString = stringify([
    dataToWrite
  ], {
    columns: csvColumns.map(mapToColumnKeys),
    delimiter: ';',
  });
  fs.appendFileSync(`${appDir}/../data/data.csv`, csvString + '\n');
}

module.exports = {
  getByDomain,
  addCatalogEntry,
}