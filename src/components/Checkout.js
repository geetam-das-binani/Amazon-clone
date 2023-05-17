import React from "react";
import "../checkout.css";
import checkout from "../checkout.jpg";
import { useStateValue } from "./Stateprovider";
import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";
export default function Checkout() {
	const [{ basket }] = useStateValue();

	return (
		<div className="checkout">
			<div
				className={`checkout__left ${basket.length !== 0 && "addMarginTop"}`}
			>
				<img src={checkout} alt="" className="checkout_Banner_image" />

				{basket.length !== 0 ? (
					<div className="checkout_items">
						<h2 className="checkout__title">Your Shopping Basket</h2>
						{basket.map((item, index) => {
							let { id, title, price, rating, image } = item;

							return (
								<CheckoutProduct
									key={index}
									id={id}
									title={title}
									price={price}
									rating={rating}
									image={image}
								/>
							);
						})}
					</div>
				) : (
					<div className="checkout__messageBox">
						<h2 className="checkout__title">Your Shopping Basket is empty</h2>
						<p>
							You have no items in your basket.To buy one or more items click
							'Add to basket' next to the item.
						</p>
					</div>
				)}
			</div>
			{basket.length !== 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	);
}
