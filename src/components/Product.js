import React from "react";
import "../product.css";
import { useStateValue } from "./Stateprovider";

export default function Product(props) {
	let { id, title, price, rating, image } = props;
	const [{ basket }, dispatch] = useStateValue();
	const addToBasket = () => {
		// Invoking the dispatch function to send the type of action and initialState to the reducer function
		dispatch({
			type: "Add to basket",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<div className="product__price">
					<small>&#8377;</small>
					<strong>{price}</strong>
				</div>
				<div className="product__rating">
					{/* create an array with 5 empty values fill it with undefined or any number/string  and map through it */}
					{Array(rating)
						.fill()
						// if nothing is mentioned inside of fill() it will fill 5 empty values as undefined it's undefined
						// or
						// .fill(5)
						// or
						// .fill('rating')
						.map((x, index) => (
							<p key={index}>⭐</p>
						))}
				</div>
			</div>

			<img src={image} alt="book_image" />
			<button onClick={addToBasket}>Add To Basket</button>
		</div>
	);
}
