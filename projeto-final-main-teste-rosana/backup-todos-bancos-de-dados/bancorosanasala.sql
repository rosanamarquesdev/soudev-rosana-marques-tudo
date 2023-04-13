-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: db_digital_store
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_banner`
--

DROP TABLE IF EXISTS `tb_banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(30) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `imagem` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_banner`
--

LOCK TABLES `tb_banner` WRITE;
/*!40000 ALTER TABLE `tb_banner` DISABLE KEYS */;
INSERT INTO `tb_banner` VALUES (1,'Titulo a imagem modificado','Descricao da imagem','https://sapatinhodeluxo.vteximg.com.br/arquivos/ids/177446-620-620/8020.01_1-Tenis-Lona-Preto-Vulcanizado-Flat-0.jpg?v=637756853198930000'),(3,'Titulo a imagem modify','Descricao da imagem2','https://static.lojadointer.com.br/produtos/tenis-adidas-coreracer-feminino/93/NQQ-4636-793/NQQ-4636-793_zoom1.jpg?ts=1665494106&ims=544x'),(4,'Titulo de outra imagem nova','Descricao da imagem outra','https://static.lojadointer.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom1.jpg?ts=1665494053'),(5,'Titulo de outra img','Descricao da imagem outra','https://static.lojadointer.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom1.jpg?ts=1665494053'),(6,'Titulo de outra','Descricao da imagem outra','https://static.lojadointer.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom1.jpg?ts=1665494053');
/*!40000 ALTER TABLE `tb_banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cartao`
--

DROP TABLE IF EXISTS `tb_cartao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cartao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero_cartao` varchar(20) NOT NULL,
  `validade` varchar(10) NOT NULL,
  `cvv` int NOT NULL,
  `titular` varchar(45) NOT NULL,
  `cliente_id` int DEFAULT NULL,
  `tipo_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cartao`
--

LOCK TABLES `tb_cartao` WRITE;
/*!40000 ALTER TABLE `tb_cartao` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_cartao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_tipos_pagamento`
--

DROP TABLE IF EXISTS `tb_tipos_pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_tipos_pagamento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_tipos_pagamento`
--

LOCK TABLES `tb_tipos_pagamento` WRITE;
/*!40000 ALTER TABLE `tb_tipos_pagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_tipos_pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_digital_store'
--

--
-- Dumping routines for database 'db_digital_store'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-03 12:01:59
