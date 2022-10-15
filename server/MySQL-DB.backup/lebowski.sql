-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 15, 2022 at 01:35 PM
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
-- Table structure for table `bowlingballs`
--

CREATE TABLE `bowlingballs` (
  `id` int(50) NOT NULL,
  `title` varchar(120) NOT NULL,
  `img` varchar(120) NOT NULL,
  `img-sm` varchar(120) NOT NULL,
  `price` varchar(120) NOT NULL,
  `route` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bowlingballs`
--

INSERT INTO `bowlingballs` (`id`, `title`, `img`, `img-sm`, `price`, `route`) VALUES
(1, 'The Antidote', 'ball1.jpg', '', '25 ', '/bowlingballs'),
(2, 'Path Rising', 'ball2.jpg', '', '20 ', '/bowlingballs'),
(3, 'Idol Helios', 'ball3.jpg', '', '35 ', '/bowlingballs'),
(4, 'Nova', 'ball4.jpg', '', '40', '/bowlingballs'),
(5, 'RST 3 X', 'ball5.jpg', '', '60', '/bowlingballs'),
(6, 'ZONE', 'ball6.jpg', '', '58', '/bowlingballs'),
(7, 'ICE', 'ball7.jpg', '', '57', '/bowlingballs');

-- --------------------------------------------------------

--
-- Table structure for table `burger`
--

CREATE TABLE `burger` (
  `id` int(50) NOT NULL,
  `title` varchar(120) NOT NULL,
  `img` varchar(150) NOT NULL,
  `imgSm` varchar(150) NOT NULL,
  `price` varchar(100) NOT NULL,
  `route` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `burger`
--

INSERT INTO `burger` (`id`, `title`, `img`, `imgSm`, `price`, `route`) VALUES
(1, 'Ultimate Burger', 'burger1.jpg', 'burger1-sm.jpg', '12 ', '/burger'),
(2, 'Maniac Burger', 'burger2.jpg', 'burger2-sm.jpg', '16', '/burger'),
(3, 'Madness Burger', 'burger3.jpg', 'burger3-sm.jpg', '8', '/burger'),
(4, 'Crazy Burger', 'burger4.jpg', 'burger4-sm.jpg', '10', '/burger'),
(5, 'Smokey Burger', 'burger5.jpg', 'burger5-sm.jpg', '11', '/burger'),
(6, 'Saddam Burger', 'burger6.jpg', 'burger6-sm.jpg', '7.50', '/burger'),
(7, 'Bunny Burger', 'burger7.jpg', 'burger7-sm.jpg', '17', '/burger');

-- --------------------------------------------------------

--
-- Table structure for table `cocktails`
--

CREATE TABLE `cocktails` (
  `id` int(50) NOT NULL,
  `title` varchar(120) NOT NULL,
  `img` varchar(120) NOT NULL,
  `img-sm` varchar(120) NOT NULL,
  `price` varchar(120) NOT NULL,
  `route` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cocktails`
--

INSERT INTO `cocktails` (`id`, `title`, `img`, `img-sm`, `price`, `route`) VALUES
(1, 'The Original', 'cocktail1.jpg', 'cocktail1-sm.jpg', '10', '/cocktails'),
(2, 'The Walter', 'cocktail2.jpg', 'cocktail2-sm.jpg', '8 ', '/cocktails'),
(3, 'The Donney', 'cocktail3.jpg', 'cocktail3-sm.jpg', '7', '/cocktails'),
(4, 'The Jesus', 'cocktail4.jpg', 'cocktail4-sm.jpg', '15', '/cocktails'),
(5, 'The Gutter Ball', 'cocktail5.jpg', 'cocktail5-sm.jpg', '17', '/cocktails'),
(6, 'The Police Chief', 'cocktail6.jpg', 'cocktail6-sm.jpg', '9', '/cocktails'),
(7, 'The DUDE', 'cocktail7.jpg', 'cocktail7-sm.jpg', '21', '/cocktails');

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

-- --------------------------------------------------------

--
-- Table structure for table `rugs`
--

CREATE TABLE `rugs` (
  `id` int(50) NOT NULL,
  `title` varchar(120) NOT NULL,
  `img` varchar(120) NOT NULL,
  `img-sm` varchar(120) NOT NULL,
  `price` varchar(120) NOT NULL,
  `route` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rugs`
--

INSERT INTO `rugs` (`id`, `title`, `img`, `img-sm`, `price`, `route`) VALUES
(1, 'Classic Rug', 'rug1.jpg', 'rug1-sm.jpg', '25', '/rugs'),
(2, 'Vintage Rug', 'rug2.jpg', 'rug2-sm.jpg', '55', '/rugs'),
(3, 'Retro Rug', 'rug3.jpg', 'rug3-sm.jpg', '45', '/rugs'),
(4, 'Fart Rug', 'rug4.jpg', 'rug4-sm.jpg', '33', '/rugs'),
(5, 'Stranger Rug', 'rug5.jpg', 'rug5-sm.jpg', '37', '/rugs'),
(6, 'Nihilist Rug', 'rug6.jpg', 'rug6-sm.jpg', '7', '/rugs'),
(7, 'The Da Fino Rug', 'rug7.jpg', 'rug7-sm.jpg', '19', '/rugs');

-- --------------------------------------------------------

--
-- Table structure for table `whiskey`
--

CREATE TABLE `whiskey` (
  `id` int(50) NOT NULL,
  `title` varchar(120) NOT NULL,
  `img` varchar(120) NOT NULL,
  `imgSm` varchar(120) NOT NULL,
  `price` varchar(120) NOT NULL,
  `route` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `whiskey`
--

INSERT INTO `whiskey` (`id`, `title`, `img`, `imgSm`, `price`, `route`) VALUES
(1, 'Super Whiskey', 'whiskey1.jpg', 'whiskey1-sm.jpg', '18', '/whiskey'),
(2, 'Awesome Whiskey', 'whiskey2.jpg', 'whiskey2-sm.jpg', '12 ', '/whiskey'),
(3, 'Ultimate Whiskey', 'whiskey3.jpg', 'whiskey3-sm.jpg', '10', '/whiskey'),
(4, 'Deluxe Whiskey', 'whiskey4.jpg', 'whiskey4-sm.jpg', '23', '/whiskey'),
(5, 'The Woo Whiskey', 'whiskey5.jpg', 'whiskey5-sm.jpg', '25', '/whiskey'),
(6, 'The Jeffrey Whiskey', 'whiskey6.jpg', 'whiskey6-sm.jpg', '14', '/whiskey'),
(7, 'The Cab Driver Whiskey', 'whiskey7.jpg', 'whiskey7-sm.jpg', '9', '/whiskey');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bowlingballs`
--
ALTER TABLE `bowlingballs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `burger`
--
ALTER TABLE `burger`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cocktails`
--
ALTER TABLE `cocktails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `directoryitems`
--
ALTER TABLE `directoryitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rugs`
--
ALTER TABLE `rugs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `whiskey`
--
ALTER TABLE `whiskey`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bowlingballs`
--
ALTER TABLE `bowlingballs`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `burger`
--
ALTER TABLE `burger`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `cocktails`
--
ALTER TABLE `cocktails`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `directoryitems`
--
ALTER TABLE `directoryitems`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rugs`
--
ALTER TABLE `rugs`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `whiskey`
--
ALTER TABLE `whiskey`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
