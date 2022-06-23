-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2022 at 04:28 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ngilmu`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `type` enum('akademik','non-akademik') NOT NULL,
  `difficulty` enum('beginner','intermediate','advanced') NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `modified_at` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subscribes`
--

CREATE TABLE `subscribes` (
  `id` int(11) NOT NULL,
  `courses_id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `desc` text NOT NULL,
  `from_suscribe` date NOT NULL,
  `to_suscribe` date NOT NULL,
  `total_price` double NOT NULL,
  `created_at` date NOT NULL,
  `modified_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `full_name` varchar(25) NOT NULL,
  `address` varchar(25) NOT NULL,
  `education` varchar(20) NOT NULL,
  `age` int(2) NOT NULL,
  `gender` enum('laki-laki','perempuan') NOT NULL,
  `price` float NOT NULL,
  `courses` varchar(25) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `modified_at` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `roles` enum('master','admin','customer') NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `modified_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribes`
--
ALTER TABLE `subscribes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subscribes`
--
ALTER TABLE `subscribes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
