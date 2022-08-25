-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-08-2022 a las 05:29:26
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pai`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pai_balance`
--

CREATE TABLE `pai_balance` (
  `P_id` int(11) NOT NULL,
  `P_moneda` int(2) NOT NULL,
  `P_monto` float UNSIGNED NOT NULL,
  `P_user` int(11) NOT NULL,
  `P_conversion` char(6) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pai_balance`
--

INSERT INTO `pai_balance` (`P_id`, `P_moneda`, `P_monto`, `P_user`, `P_conversion`) VALUES
(3, 2, 10000, 12, '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pai_nft`
--

CREATE TABLE `pai_nft` (
  `id` int(11) NOT NULL,
  `P_nombre` char(153) NOT NULL,
  `P_ruta_imagen` char(250) NOT NULL,
  `P_valor` char(21) NOT NULL,
  `P_ROI` char(21) NOT NULL,
  `P_fecha_pub` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pai_nft`
--

INSERT INTO `pai_nft` (`id`, `P_nombre`, `P_ruta_imagen`, `P_valor`, `P_ROI`, `P_fecha_pub`) VALUES
(1, 'SKYSCRAPPER', 'wewewfwa4twesdfw35ywr6u45wrw4ewerg64758786erfdsasdf4', '20000', '1', '2022-08-16 11:52:12'),
(2, 'KOKOBONGA', 'eee333wqwq3', '10000', '1.5', '2022-08-16 12:17:56'),
(4, 'MONORIEL', '23r2wdmfqwierg02givenfvi234g0254gnwifjv235', '35000', '1', '2022-08-16 12:16:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pai_nft_inversiones`
--

CREATE TABLE `pai_nft_inversiones` (
  `P_id` int(11) NOT NULL,
  `P_moneda` char(8) NOT NULL,
  `P_fecha_inicio` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `P_fecha_final` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `P_inversion` char(15) NOT NULL,
  `P_ganancia` char(10) NOT NULL,
  `P_ganancia_pai` char(10) NOT NULL,
  `P_tipo` char(1) NOT NULL,
  `P_id_inversion` int(11) NOT NULL,
  `P_user` int(11) NOT NULL,
  `P_estado` char(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pai_registro_ventas`
--

CREATE TABLE `pai_registro_ventas` (
  `P_id` int(11) NOT NULL,
  `P_fecha_venta` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `P_user` int(11) NOT NULL,
  `P_monto` float NOT NULL,
  `P_tasa` float NOT NULL,
  `P_estatus` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pai_registro_ventas`
--

INSERT INTO `pai_registro_ventas` (`P_id`, `P_fecha_venta`, `P_user`, `P_monto`, `P_tasa`, `P_estatus`) VALUES
(15, '2022-08-23 23:41:33', 12, 5000, 55, 1),
(16, '2022-08-24 03:14:42', 12, 50000, 55, 1),
(17, '2022-08-24 03:15:16', 12, 5000, 55, 1),
(18, '2022-08-24 03:18:24', 12, 5000, 55, 1),
(19, '2022-08-24 03:19:02', 12, 7000, 55, 1),
(20, '2022-08-24 03:19:31', 12, 6999, 55, 1),
(21, '2022-08-24 03:19:43', 12, 6999, 55, 1),
(22, '2022-08-24 03:20:17', 12, 5999, 55, 1),
(23, '2022-08-24 03:20:40', 12, 5000, 55, 1),
(24, '2022-08-24 03:25:45', 12, 50000, 55, 1),
(25, '2022-08-24 03:26:20', 12, 5000, 55, 1),
(26, '2022-08-24 03:26:49', 12, 5000, 55, 1),
(27, '2022-08-24 03:26:58', 12, 40000, 55, 1),
(28, '2022-08-24 03:27:38', 12, 40000, 55, 1),
(29, '2022-08-24 03:28:19', 12, 5000, 55, 1),
(30, '2022-08-24 03:29:06', 12, 40000, 55, 1),
(31, '2022-08-24 03:29:14', 12, 5000, 55, 1),
(32, '2022-08-24 03:31:56', 12, 5000, 55, 1),
(33, '2022-08-24 03:32:12', 12, 44000, 55, 1),
(34, '2022-08-24 03:32:32', 12, 5000, 55, 1),
(35, '2022-08-24 03:34:16', 12, 6000, 55, 1),
(36, '2022-08-24 03:36:04', 12, 45000, 55, 1),
(37, '2022-08-24 03:36:32', 12, 50000, 55, 1),
(38, '2022-08-24 03:37:15', 12, 5000, 55, 1),
(39, '2022-08-24 03:38:13', 12, 5000, 55, 1),
(40, '2022-08-24 03:38:15', 12, 5000, 55, 1),
(41, '2022-08-24 03:38:15', 12, 5000, 55, 1),
(42, '2022-08-24 03:38:16', 12, 5000, 55, 1),
(43, '2022-08-24 03:38:16', 12, 5000, 55, 1),
(44, '2022-08-24 03:38:16', 12, 5000, 55, 1),
(45, '2022-08-24 03:38:17', 12, 5000, 55, 1),
(46, '2022-08-24 03:38:17', 12, 5000, 55, 1),
(47, '2022-08-24 03:38:17', 12, 5000, 55, 1),
(48, '2022-08-24 03:38:18', 12, 5000, 55, 1),
(49, '2022-08-24 03:38:20', 12, 5000, 55, 1),
(50, '2022-08-24 03:38:20', 12, 5000, 55, 1),
(51, '2022-08-24 03:38:21', 12, 5000, 55, 1),
(52, '2022-08-24 03:38:21', 12, 5000, 55, 1),
(53, '2022-08-24 03:38:21', 12, 5000, 55, 1),
(54, '2022-08-24 03:38:21', 12, 5000, 55, 1),
(55, '2022-08-24 03:38:22', 12, 5000, 55, 1),
(56, '2022-08-24 03:38:22', 12, 5000, 55, 1),
(57, '2022-08-24 03:38:22', 12, 5000, 55, 1),
(58, '2022-08-24 03:38:22', 12, 5000, 55, 1),
(59, '2022-08-24 03:38:22', 12, 5000, 55, 1),
(60, '2022-08-24 03:38:23', 12, 5000, 55, 1),
(61, '2022-08-24 03:38:23', 12, 5000, 55, 1),
(62, '2022-08-24 03:38:23', 12, 5000, 55, 1),
(63, '2022-08-24 03:38:23', 12, 5000, 55, 1),
(64, '2022-08-24 03:38:24', 12, 5000, 55, 1),
(65, '2022-08-24 03:38:24', 12, 5000, 55, 1),
(66, '2022-08-24 03:38:24', 12, 5000, 55, 1),
(67, '2022-08-24 03:38:24', 12, 5000, 55, 1),
(68, '2022-08-24 03:38:25', 12, 5000, 55, 1),
(69, '2022-08-24 03:38:25', 12, 5000, 55, 1),
(70, '2022-08-24 03:38:25', 12, 5000, 55, 1),
(71, '2022-08-24 03:38:25', 12, 5000, 55, 1),
(72, '2022-08-24 03:38:25', 12, 5000, 55, 1),
(73, '2022-08-24 03:38:25', 12, 5000, 55, 1),
(74, '2022-08-24 03:38:26', 12, 5000, 55, 1),
(75, '2022-08-24 03:38:26', 12, 5000, 55, 1),
(76, '2022-08-24 03:38:26', 12, 5000, 55, 1),
(77, '2022-08-24 03:38:26', 12, 5000, 55, 1),
(78, '2022-08-24 03:38:26', 12, 5000, 55, 1),
(79, '2022-08-24 03:38:27', 12, 5000, 55, 1),
(80, '2022-08-24 03:38:27', 12, 5000, 55, 1),
(81, '2022-08-24 03:38:27', 12, 5000, 55, 1),
(82, '2022-08-24 13:47:18', 12, 7000, 55, 1),
(83, '2022-08-24 14:04:14', 12, 7055, 55, 1),
(84, '2022-08-24 14:04:17', 12, 7055, 55, 1),
(85, '2022-08-24 14:04:19', 12, 7055, 55, 1),
(86, '2022-08-24 14:04:20', 12, 7055, 55, 1),
(87, '2022-08-24 14:04:21', 12, 7055, 55, 1),
(88, '2022-08-24 14:04:22', 12, 7055, 55, 1),
(89, '2022-08-24 14:04:23', 12, 7055, 55, 1),
(90, '2022-08-24 14:39:04', 12, 5500, 55, 1),
(91, '2022-08-24 14:45:51', 12, 5000, 55, 1),
(92, '2022-08-24 14:46:01', 12, 33444, 55, 1),
(93, '2022-08-24 14:46:11', 12, 232333, 55, 1),
(94, '2022-08-24 15:07:02', 12, 7000, 55, 1),
(95, '2022-08-24 15:14:51', 12, 5555, 55, 1),
(96, '2022-08-24 15:57:02', 12, 10000, 55, 1),
(97, '2022-08-24 15:58:41', 12, 100088, 55, 1),
(98, '2022-08-24 15:58:47', 12, 100088, 55, 1),
(99, '2022-08-24 15:58:47', 12, 100088, 55, 1),
(100, '2022-08-24 15:58:47', 12, 100088, 55, 1),
(101, '2022-08-24 15:58:47', 12, 100088, 55, 1),
(102, '2022-08-24 15:58:47', 12, 100088, 55, 1),
(103, '2022-08-24 15:58:47', 12, 100088, 55, 1),
(104, '2022-08-24 15:58:49', 12, 100088, 55, 1),
(105, '2022-08-24 16:01:22', 12, 45000, 55, 1),
(106, '2022-08-25 00:35:40', 0, 0, 0, 1),
(107, '2022-08-25 00:36:12', 0, 0, 0, 1),
(108, '2022-08-25 00:36:12', 0, 0, 0, 1),
(109, '2022-08-25 00:36:12', 0, 0, 0, 1),
(110, '2022-08-25 00:36:13', 0, 0, 0, 1),
(111, '2022-08-25 00:36:13', 0, 0, 0, 1),
(112, '2022-08-25 00:36:13', 0, 0, 0, 1),
(113, '2022-08-25 00:41:04', 12, 5000, 55, 1),
(114, '2022-08-25 00:41:13', 12, 7000, 55, 1),
(115, '2022-08-25 00:41:21', 12, 400000, 55, 1),
(116, '2022-08-25 01:25:58', 12, 5000, 55, 1),
(117, '2022-08-25 01:26:08', 12, 70000, 55, 1),
(118, '2022-08-25 01:31:56', 12, 5000, 55, 1),
(119, '2022-08-25 01:43:45', 12, 8000, 55, 1),
(120, '2022-08-25 01:44:06', 12, 420000, 55, 1),
(121, '2022-08-25 01:45:11', 12, 50000000, 55, 1),
(122, '2022-08-25 01:45:51', 12, 5000, 55, 1),
(123, '2022-08-25 01:46:05', 12, 500600, 55, 1),
(124, '2022-08-25 02:25:41', 12, 500000, 55, 1),
(125, '2022-08-25 02:26:21', 12, 1000000000, 55, 1),
(126, '2022-08-25 02:45:03', 12, 333444, 55, 1),
(127, '2022-08-25 02:45:08', 12, 3334440, 55, 1),
(128, '2022-08-25 03:19:58', 12, 8, 55, 1),
(129, '2022-08-25 03:20:09', 12, 60000000, 55, 1),
(130, '2022-08-25 03:20:40', 12, 500, 55, 1),
(131, '2022-08-25 03:20:45', 12, 500000, 55, 1),
(132, '2022-08-25 03:22:44', 12, 33, 55, 1),
(133, '2022-08-25 03:23:31', 12, 500, 55, 1),
(134, '2022-08-25 03:23:33', 12, 500, 55, 1),
(135, '2022-08-25 03:23:33', 12, 500, 55, 1),
(136, '2022-08-25 03:23:33', 12, 500, 55, 1),
(137, '2022-08-25 03:23:34', 12, 500, 55, 1),
(138, '2022-08-25 03:23:34', 12, 500, 55, 1),
(139, '2022-08-25 03:23:34', 12, 500, 55, 1),
(140, '2022-08-25 03:23:50', 12, 4000, 55, 1),
(141, '2022-08-25 03:24:33', 12, 4000, 55, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pai_ventas`
--

CREATE TABLE `pai_ventas` (
  `P_id` int(11) UNSIGNED NOT NULL,
  `P_venta` int(21) NOT NULL,
  `P_moneda` char(8) NOT NULL,
  `P_tasa_venta` float NOT NULL,
  `P_fecha_actualizacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `P_fecha_inicio` timestamp NOT NULL DEFAULT current_timestamp(),
  `P_venta_minima` float NOT NULL,
  `P_venta_maxima` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pai_ventas`
--

INSERT INTO `pai_ventas` (`P_id`, `P_venta`, `P_moneda`, `P_tasa_venta`, `P_fecha_actualizacion`, `P_fecha_inicio`, `P_venta_minima`, `P_venta_maxima`) VALUES
(1, 4988467, 'USDT', 55, '2022-08-25 03:24:33', '2022-08-23 12:53:29', 5000, 10000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pai_balance`
--
ALTER TABLE `pai_balance`
  ADD PRIMARY KEY (`P_id`);

--
-- Indices de la tabla `pai_nft`
--
ALTER TABLE `pai_nft`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pai_nft_inversiones`
--
ALTER TABLE `pai_nft_inversiones`
  ADD PRIMARY KEY (`P_id`);

--
-- Indices de la tabla `pai_registro_ventas`
--
ALTER TABLE `pai_registro_ventas`
  ADD PRIMARY KEY (`P_id`);

--
-- Indices de la tabla `pai_ventas`
--
ALTER TABLE `pai_ventas`
  ADD PRIMARY KEY (`P_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pai_balance`
--
ALTER TABLE `pai_balance`
  MODIFY `P_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pai_nft`
--
ALTER TABLE `pai_nft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pai_nft_inversiones`
--
ALTER TABLE `pai_nft_inversiones`
  MODIFY `P_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pai_registro_ventas`
--
ALTER TABLE `pai_registro_ventas`
  MODIFY `P_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;

--
-- AUTO_INCREMENT de la tabla `pai_ventas`
--
ALTER TABLE `pai_ventas`
  MODIFY `P_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
