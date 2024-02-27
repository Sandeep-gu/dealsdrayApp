import React, { useContext } from "react";
import { GlobalContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";

const Header = () => {
	const { loggedIn } = useContext(GlobalContext);
	return (
		<div className=" ">
			<div className="bg-gray-800 text-white py-2 px-4">EMS</div>
			{loggedIn && (
				<div className="px-8 flex justify-between bg-gray-200 py-2">
					<NavLink
						to="/"
						className="hover:bg-gray-400 px-4 py-1 rounded hover:text-black"
					>
						Home
					</NavLink>
					<NavLink
						to="/employeelist"
						className="hover:bg-gray-400 px-4 py-1 rounded hover:text-black"
					>
						Employee List
					</NavLink>
					<NavLink
						className="hover:bg-gray-400 px-4 py-1 rounded hover:text-black"
						to="/createemployee"
					>
						Create Employee
					</NavLink>
					<NavLink className="hover:bg-gray-400 px-4 py-1 rounded hover:text-black">
						Hakum Gupta
					</NavLink>
					<NavLink className="hover:bg-gray-400 px-4 py-1 rounded hover:text-black">
						Logout
					</NavLink>
				</div>
			)}
		</div>
	);
};

export default Header;
