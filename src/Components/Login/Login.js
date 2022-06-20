import React, { useState } from "react";
import "./Login.css";
import { NormalInputs } from "../ModularComponents/Inputs/Inputs";

export default function Login() {
	const [loginCred, setLoginCred] = useState({});
	const onBlur = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);
		setLoginCred((prev) => {
			const newData = { ...prev };
			newData[name.toLowerCase()] = value;
			return newData;
		});
	};
	return (
		<div className='login'>
			<div className='login-form'>
				<div className='login-form-head'>
					<h3>LOGIN</h3>
					<p>Please login to proceed</p>
				</div>
				<div className='login-form-body'>
					<NormalInputs
						type='text'
						label={"Email"}
						placeholder='example@gmail.com'
						onBlur={onBlur}
					/>
					<NormalInputs
						type='password'
						label={"Password"}
						placeholder='example : 2131'
						onBlur={onBlur}
					/>
					<div className='d-flex justify-content-center my-2'>
						<button className='btn btn-success w-100 py-2'>
							Login
						</button>
					</div>
					<p
						className='text-info d-flex justify-content-center'
						style={{ cursor: "pointer" }}>
						Forget password? click here
					</p>
				</div>
			</div>
		</div>
	);
}
