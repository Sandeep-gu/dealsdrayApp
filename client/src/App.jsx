import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Layout from "./components/Layout";
import EmployeeEdit from "./page/EmployeeEdit";
import EmployeeList from "./page/EmployeeList";
import Dashboard from "./page/Dashboard";
import { useContext } from "react";
import { GlobalContext } from "./context/ContextProvider";
import CreateEmployee from "./page/CreateEmployee";

function App() {
	const { loggedIn } = useContext(GlobalContext);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route
							path=""
							element={
								loggedIn ? <Navigate to="/dashboard"></Navigate> : <Login />
							}
						/>
						<Route path="register" element={<Register />} />
						<Route path="employeelist" element={<EmployeeList />} />
						<Route path="employeeedit/:id" element={<EmployeeEdit />} />
						<Route path="createemployee" element={<CreateEmployee />} />
						<Route
							path="dashboard"
							element={
								loggedIn ? <Dashboard /> : <Navigate to="/" replace></Navigate>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
