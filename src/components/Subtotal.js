import React from "react";
import { useStateValue } from "../components/Stateprovider";
import "../subtotal.css";

export default function Subtotal() {
	const [{ basket }] = useStateValue();
	const getTotal = () => basket.reduce((total, item) => total + item.price, 0);

	return (
		<div className="subtotal">
			<div className="amount_gift">
				<p>
					Subtotal
					{basket.length === 1 ? (
						<span>
							{" "}
							{basket.length} item : <strong>&#8377;{getTotal()}</strong>
						</span>
					) : (
						<span>
							{" "}
							{basket.length} items : <strong>&#8377;{getTotal()}</strong>
						</span>
					)}
				</p>
				<small>
					<input type="checkbox" />
					<strong>This order contains a gift</strong>
				</small>
			</div>

			<button className="checkout__button">Proceed to Checkout</button>
		</div>
	);
}
