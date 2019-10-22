-- MySQL dump 10.16  Distrib 10.1.38-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: stay-clear
-- ------------------------------------------------------
-- Server version	10.1.38-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `telephone` varchar(45) NOT NULL,
  `photo` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'caio','caiozinhogameplay@gmail.com','qwert123456','Developer','SLC','16-99987-4564','google/png/slc','2019-10-21 12:01:14','2019-10-21 12:01:14'),(2,'caio','caiozinho@gmail.com','qwert123456','Developer','SLC','16-99987-4564','google/png/slc','2019-10-21 12:12:16','2019-10-21 12:12:16'),(3,'caio','caiozi11111nho@gmail.com','qwer','Developer','SLC','16-99987-4564','google/png/slc','2019-10-21 12:22:31','2019-10-21 12:22:31'),(4,'caio','caiozi112nho@gmail.com','qwer','Developer','SLC','16-99987-4564','google/png/slc','2019-10-21 12:22:51','2019-10-21 12:22:51'),(5,'caio','caio8u8u8zi112nho@gmail.com','12','Developer','SLC','16-99987-4564','google/png/slc','2019-10-21 12:24:26','2019-10-21 12:24:26'),(6,'caio','8zi44112nho@gmail.com','1255555','Developer','SLC','16-99987-4564','google/png/slc','2019-10-21 12:42:49','2019-10-21 12:42:49'),(7,'caio','84444@gmail.com','1255557','Developer','SLC','16-99987-4564','google/png/slc','2019-10-21 12:42:58','2019-10-21 12:42:58'),(8,'caio','84444´´@gmail.com','1255557','Developer','SLC','16-99987-4564','google/png/slc','2019-10-21 12:43:04','2019-10-21 12:43:04'),(9,'caio','84444´iiiiiii@gmail.com','1255557','Developer','SLC','16-99987-4564','google/png/slc','2019-10-21 12:43:08','2019-10-21 12:43:08'),(10,'','caiozinhogameplay@gmail.com','qwert123456','','','','','2019-10-21 13:53:27','2019-10-21 13:53:27');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-22 11:32:08
