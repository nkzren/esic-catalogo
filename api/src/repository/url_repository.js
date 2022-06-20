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

const addCatalogEntry = async function(entry) {
  let connectin = null;
  try {
    connection = await mysql.getConnection(); 
    await connection.execute(
      'INSERT INTO city (city, domain, url) VALUES (:city, :domain, :url)',
      entry
    )
  } catch (error) {
    console.error('Error on addCatalogEntry', error)
  } finally {
    if (connection) {
      await connection.release();
    }
  }
}

const updateEsicUrl = async function(domain, esicUrl) {
  let connection = null;
  try {
    connection = await mysql.getConnection();
    await connection.execute(
      'UPDATE city SET (:url) WHERE domain = :domain ',
      { domain, url: esicUrl }
    );
  } catch (error) {
    console.error('Error on updateEsicUrl', error)
  } finally {
    if (connection) {
      await connection.release();
    }
  }
}

module.exports = {
  getByDomain,
  addCatalogEntry,
  updateEsicUrl,
}