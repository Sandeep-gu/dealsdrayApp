import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="h-full">
			<div className="px-6 bg-emerald-700 text-white py-2">Login Page</div>
			<div className=" flex h-full justify-center items-center">
				<form
					action=""
					className="border-2 shadow-md h-[300px] gap-4 flex flex-col p-10 w-[500px]"
				>
					<div className="flex flex-col w-full">
						<label htmlFor="usrname" className="text-xl">
							Username
						</label>
						<input
							type="text"
							id="username"
							className="w-full border border-gray-600 px-1 rounded py-1"
							placeholder="Username"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="usrname" className="text-xl">
							Password
						</label>
						<input
							type="password"
							id="password"
							className="w-full border border-gray-600 px-1 rounded py-1"
							placeholder="Password"
						/>
					</div>
					<button className="bg-emerald-700 text-xl text-white py-1 rounded">
						Login{" "}
					</button>
					<div>
						Don&apos;t Have account?{" "}
						<Link to="/register" className="text-blue-600">
							Register
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
