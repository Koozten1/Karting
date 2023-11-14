-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 13, 2023 at 11:36 PM
-- Server version: 8.0.35-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `karting`
--

-- --------------------------------------------------------

--
-- Table structure for table `time_list`
--

CREATE TABLE `time_list` (
  `id` int NOT NULL,
  `id_user` int DEFAULT NULL,
  `data` date DEFAULT NULL,
  `time` varchar(5) DEFAULT NULL,
  `count` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `time_list`
--

INSERT INTO `time_list` (`id`, `id_user`, `data`, `time`, `count`) VALUES
(1, 3, '2023-10-08', '19:30', 1),
(2, 4, '2023-10-08', '14:00', 1),
(3, 4, '2023-10-08', '14:00', 1),
(4, 6, '2023-10-15', '11:00', 4),
(5, 6, '2023-10-07', '11:00', 4),
(6, 7, '2023-10-06', '19:00', 1),
(7, 8, '2023-10-07', '14:30', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `FIO` varchar(256) DEFAULT NULL,
  `phone` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `FIO`, `phone`) VALUES
(1, 'Анатолий', '+729-6742321'),
(2, 'Генадий', '89983-2734-123'),
(3, 'Егор', '274-234'),
(4, 'Сергей', '3648-2840'),
(5, 'ВЛад', '48-586'),
(6, 'Илья', '23-566'),
(7, 'Михаил', '9000-23-2344'),
(8, 'Евгения', '32222-233');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `time_list`
--
ALTER TABLE `time_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `time_list`
--
ALTER TABLE `time_list`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `time_list`
--
ALTER TABLE `time_list`
  ADD CONSTRAINT `time_list_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `Users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
