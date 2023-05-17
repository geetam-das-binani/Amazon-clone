import React from "react";
import banner from "../banner.jpg";
import "../banner.css";
import Product from "../components/Product";
export default function Banner() {
	return (
		<div className="banner">
			<img className="banner_image" src={banner} alt="banner_image" />
			<div className="home__row">
				<Product
					id={0}
					title="Consumed By Obsession: Two Strangers, Two Journeys, One Destiny"
					price={650}
					rating={5}
					image="https://m.media-amazon.com/images/I/41DaOmr5WtL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
				/>
				<Product
					id={1}
					title="Noise ColorFit Pulse Smartwatch Full Touch HD Display, SpO2, Heart Rate"
					price={1699}
					rating={4}
					image="https://m.media-amazon.com/images/I/61epn29QG0L._AC_UL400_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id={2}
					title="Samsung 7 Kg 5 Star Semi Automatic Top Load Washing Machine "
					price={7999}
					rating={3}
					image="https://m.media-amazon.com/images/I/71StafL7njL._AC_UY218_.jpg"
				/>
				<Product
					id={3}
					title="POCO X5 Pro 5G (Astral Black, 256 GB) (8 GB RAM)  Snapdragon 778G"
					price={26798}
					rating={5}
					image="https://m.media-amazon.com/images/I/61ZKK4UTtaL._AC_UY218_.jpg"
				/>
				<Product
					id={4}
					title="Redmi 108 cm (43 inches) 4K Ultra HD Android Smart LED TV X43 (Black)"
					price={26999}
					rating={5}
					image="https://m.media-amazon.com/images/I/7132bixhytL._AC_UY218_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id={5}
					title="pTron Bassbuds Duo in Ear Earbuds with 32Hrs Total Playtime "
					price={799}
					rating={3}
					image="https://m.media-amazon.com/images/I/51ZT3aMrJIL._AC_UL400_.jpg"
				/>
				<Product
					id={6}
					title="Baybee Kids Battery Operated Jeep for Kids, Ride on Toy Kids Car  "
					price={16822}
					rating={4}
					image="https://m.media-amazon.com/images/I/517cO1GQgkL._AC_SR400,600_.jpg"
				/>
				<Product
					id={7}
					title="HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm)  "
					price={38496}
					rating={5}
					image="https://m.media-amazon.com/images/I/81WTprMJDRL._AC_UL320_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id={8}
					title="HUL Pureit Eco Water Saver Mineral RO+UV+MF AS wall mounted "
					price={13999}
					rating={4}
					image="https://m.media-amazon.com/images/I/415Eqs0EXYL._AC_SR400,600_.jpg"
				/>
				<Product
					id={9}
					title="Wipro Automatic Electric Deluxe Dry Iron- 1000W.Scratch resistant sole plate  "
					price={699}
					rating={4}
					image="https://m.media-amazon.com/images/I/61v05g7GJlL._SX466_.jpg"
				/>
				<Product
					id={10}
					title="Safari Pentagon Trolley Bags for Travel, 55 cm Cabin Suitcase  "
					price={1999}
					rating={4}
					image="https://m.media-amazon.com/images/I/31cQxf0GUeL._AC_SR400,600_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id={11}
					title="JBL Flip 5 Wireless Portable Bluetooth Speaker, Signature Sound with Powerful Bass Radiator, Vibrant Colors with Rugged Fabric Design, Party Boost, IPX7 Waterproof & Type C (Without Mic, Blue)"
					price={1299}
					rating={4}
					image="https://m.media-amazon.com/images/I/71CC5cSzqoL._AC_UY218_.jpg"
				/>
			</div>
		</div>
	);
}
