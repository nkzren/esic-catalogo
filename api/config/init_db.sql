CREATE DATABASE `esic-catalogo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `esic-catalogo`.`city` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(100) DEFAULT NULL,
  `domain` varchar(100) DEFAULT NULL,
  `url` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
