import React, { useRef } from "react";
import "../header.css";
import { Link } from "react-router-dom";
import array from "../dropdown";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./Stateprovider";
import { auth } from "../firebase";

export default function Header() {
	const reference = useRef();
	const header_nav_ref = useRef();
	const address_ref = useRef();
	const [{ basket, user }] = useStateValue();

	const toggle_hide = () => {
		reference.current.classList.toggle("header__height");
		address_ref.current.classList.toggle("display");
		header_nav_ref.current.classList.toggle("display");
	};
	const handleChange = (e) => {
		console.log(e.target.value);
		if (e.target.value === 0) {
			document.getElementById("select").style.width = "4vw";
		} else {
			document.getElementById("select").style.width = "10vw";
		}
	};
	const login = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<nav id="header" className="header" ref={reference}>
			<Link className="Header__link" to="/">
				<div className="header__logo">
					<img
						className="header__logo"
						src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
						alt="amazon__logo"
					/>
					<span className="logo_part">.in</span>
				</div>
			</Link>
			<Link to="/" className="Header__link">
				<div ref={address_ref} className="header__address display" id="address">
					<PlaceIcon className="location" />

					<div className="address">
						<span className="hello">Hello</span>
						<span className="span_address">Select your address</span>
					</div>
				</div>
			</Link>
			<div className="header__search">
				<select className="header__select" id="select" onChange={handleChange}>
					{array.map((categories, index) => (
						<option value={index} key={categories}>
							{categories}
						</option>
					))}
				</select>
				<input
					type="text"
					className="header__searchInput"
					placeholder="Search Amazon.in"
				/>
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="hamburger" onClick={toggle_hide}>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>

			<div ref={header_nav_ref} className="header__nav display" id="header_nav">
				<Link to={!user && "/login"} className="Header__link ">
					<div onClick={login} className="header__option " id="option1">
						<span className="option1">Hello,{user?.email}</span>
						<span className="option2">Accounts & Lists</span>
						<span className="option2">{user ? "Sign Out" : "Sign In"}</span>
					</div>
				</Link>
				<Link to="/" className="Header__link ">
					<div className="header__option" id="option2">
						<span className="option1">Returns</span>
						<span className="option2"> & Orders</span>
					</div>
				</Link>
				<Link to="/checkout" className="Header__link ">
					<div className="cart " id="option3">
						<ShoppingCartIcon className="basketIcon" />
						<span className="cart__quantity">{basket?.length}</span>
						<span className="cart">Cart</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}
