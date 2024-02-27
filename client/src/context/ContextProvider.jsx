import React, { createContext, useState } from "react";
export const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [loggedIn, setLoggedIn] = useState(true);
	return (
		<GlobalContext.Provider
			value={{
				loading,
				setLoading,
				loggedIn,
				setLoggedIn,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
