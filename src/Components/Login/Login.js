import React, { useState } from "react";
import "./Login.css";
import { NormalInputs } from "../ModularComponents/Inputs/Inputs";

export default function Login() {
	const [loginCred, setLoginCred] = useState({});
	const onBlur = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setLoginCred((prev) => {
			return (prev.name = value);
		});
	};
	return (
		<div className='login'>
			<div className='login-form'>
				<div className='login-form-head'>
					<h3>LOGIN</h3>
					<p>Please login to proceed</p>
				</div>
				<div>
					<NormalInputs
						label={"Email"}
						placeholder='example@gmail.com'
						onBlur={onBlur}
					/>
				</div>
			</div>
		</div>
	);
}
