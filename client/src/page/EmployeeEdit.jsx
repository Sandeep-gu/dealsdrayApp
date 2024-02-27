import React from "react";
import { useParams } from "react-router-dom";

const EmployeeEdit = () => {
	const { id } = useParams();
	return <div>EmployeeEdit : {id}</div>;
};

export default EmployeeEdit;
