import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import List from "./components/Lists";
import Banner from "./components/Banner";
import Checkout from "./components/Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./components/Stateprovider";
function App() {
	const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// user is logged in
				dispatch({
					type: "Set User",
					user: authUser,
				});
			} else {
				// user is logged out
				dispatch({
					type: "Set User",
					user: null,
				});
			}
		});
		//  cleanup function below which runs when the component unmounts/re-render
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<div>
							<Header />
							<List />
							<Banner />
						</div>
					}
				/>
				<Route path="login" element={<Login />} />
				<Route
					path="checkout"
					element={
						<div>
							<Header />
							<Checkout />
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
