import React from "react";
import { useStateValue } from "../components/Stateprovider";
import "../checkout.css";
import { useNavigate } from "react-router-dom";

export default function CheckoutProduct(props) {
	const [{ user }, dispatch] = useStateValue();
	const navigate = useNavigate();
	let { id, title, price, rating, image } = props;

	const RemoveFromBasket = () => {
		if (!user) {
			navigate("/login");
		} else {
			dispatch({
				type: "Remove from basket",
				id: id,
			});
		}
	};

	return (
		<div className="checkoutProduct">
			<img src={image} alt="" className="checkoutProduct__image" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<div className="checkoutProduct__price">
					<small>&#8377;</small>
					<strong>{price}</strong>
				</div>
				<div className="CheckoutProduct__rating">
					{Array(rating)
						.fill()

						.map((x, index) => (
							<p key={index}>⭐</p>
						))}
				</div>
				<button onClick={RemoveFromBasket}>Remove From Basket</button>
			</div>
		</div>
	);
}
