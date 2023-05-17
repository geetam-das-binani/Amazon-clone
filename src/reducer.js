export const initialState = {
	user: null,
	basket: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "Set User":
			return {
				...state,
				user: action.user,
			};
		case "Add to basket":
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case "Remove from basket":
			// const newBasket = state.basket.filter((x) => {
			// 	console.log(x.id);
			// 	return x.id !== action.id;
			// });

			let newBasket = state.basket;
			//   getting index number from basket array by matching id of the product which the user has clicked with the product id inside of our basket array
			const index = state.basket.findIndex(
				(basketitems) => basketitems.id === action.id
			);

			if (index >= 0) {
				// item exist in the basket remove it...
				newBasket.splice(index, 1);
			} else {
				console.log("item not found");
			}

			return { ...state, basket: newBasket };

		default:
			return state;
	}
};
