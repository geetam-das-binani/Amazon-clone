import React, { useState } from "react";
import "../login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
export default function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	const login = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			// Asynchronously signs in using an email and password.
			.then((auth) => {
				// email and password is verified redirect to homepage...
				navigate("/");
			})
			// Fails with an error if the email address and password do not match.
			.catch((e) => alert(e.message));
	};
	const register = (e) => {
		e.preventDefault();
		auth
			// Creates a new user account associated with the specified email address and password.
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				navigate("/");
			})
			.catch((e) => alert(e.message));
	};
	return (
		<div className="Login">
			<Link to="/">
				<div className="image__text">
					<img
						className="login__logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
						alt="amazon__logo"
					/>
					<span className="logo__part">.in</span>
				</div>
			</Link>
			<div className="login__container">
				<h1>Sign In</h1>
				<form>
					<h5>Email</h5>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						autoComplete="off"
					/>

					<h5>Password</h5>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						autoComplete="off"
					/>

					<button onClick={login} type="submit">
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to Amazon's Conditions of Use & Sale.Please
					see our Privacy Notice,Our Cookies Notice and our interest-Based Ads
					Notice.
				</p>
				<button onClick={register}>Create Your Amazon Account</button>
			</div>
		</div>
	);
}
