-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: bike_and_go
-- ------------------------------------------------------
-- Server version	5.7.26

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
-- Table structure for table `Rent`
--

DROP TABLE IF EXISTS `Rent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Rent` (
  `id` int(11) NOT NULL,
  `Type` varchar(45) DEFAULT 'BIKE',
  `Description` varchar(500) NOT NULL,
  `Prix` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  CONSTRAINT `idRenter` FOREIGN KEY (`id`) REFERENCES `Renter` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Rent`
--

LOCK TABLES `Rent` WRITE;
/*!40000 ALTER TABLE `Rent` DISABLE KEYS */;
/*!40000 ALTER TABLE `Rent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Renter`
--

DROP TABLE IF EXISTS `Renter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Renter` (
  `id` int(11) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Adress` varchar(150) NOT NULL,
  `Postcode` int(11) NOT NULL,
  `City` varchar(45) NOT NULL,
  `Rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `idSkiRessort` FOREIGN KEY (`id`) REFERENCES `SkiRessort` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Renter`
--

LOCK TABLES `Renter` WRITE;
/*!40000 ALTER TABLE `Renter` DISABLE KEYS */;
/*!40000 ALTER TABLE `Renter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SkiRessort`
--

DROP TABLE IF EXISTS `SkiRessort`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SkiRessort` (
  `id` int(11) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `City` varchar(45) NOT NULL,
  `Postcode` int(11) NOT NULL,
  `Rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SkiRessort`
--

LOCK TABLES `SkiRessort` WRITE;
/*!40000 ALTER TABLE `SkiRessort` DISABLE KEYS */;
/*!40000 ALTER TABLE `SkiRessort` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-01 18:03:30
