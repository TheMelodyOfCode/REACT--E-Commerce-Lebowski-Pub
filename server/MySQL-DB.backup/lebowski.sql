-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 13, 2022 at 11:21 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lebowski`
--

-- --------------------------------------------------------

--
-- Table structure for table `directoryitems`
--

CREATE TABLE `directoryitems` (
  `id` int(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `imgSm` varchar(255) NOT NULL,
  `route` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `directoryitems`
--

INSERT INTO `directoryitems` (`id`, `title`, `img`, `imgSm`, `route`) VALUES
(1, 'Burger', 'burger.jpg', 'burger-sm.jpg', '/burger'),
(2, 'Cocktails', 'cocktails.jpg', 'cocktails-sm.jpg', '/cocktails'),
(3, 'Whiskey', 'whiskey.jpg', 'whiskey-sm.jpg', '/whiskey'),
(4, 'Bowling Balls', 'bowlingballs.jpg', 'bowlingballs-sm.jpg', '/bowlingballs'),
(5, 'Rugs', 'rugs.jpg', 'rugs-sm.jpg', '/rugs');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `directoryitems`
--
ALTER TABLE `directoryitems`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `directoryitems`
--
ALTER TABLE `directoryitems`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
