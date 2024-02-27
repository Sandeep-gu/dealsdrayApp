import { Link } from "react-router-dom";
import profileImage from "../assets/profie.jpg";

const employeeData = [
	{
		id: 1,
		image: "im",
		name: "Ram",
		email: "ram123@gmail.com",
		mobile: "+91-8703747384",
		designation: "HR",
		gender: "Male",
		course: "BSC",
		createData: "2-27-2024",
	},
	{
		id: 2,
		image: "im",
		name: "Ram",
		email: "ram123@gmail.com",
		mobile: "+91-8703747384",
		designation: "HR",
		gender: "Male",
		course: "BSC",
		createData: "2-27-2024",
	},
	{
		id: 3,
		image: "im",
		name: "Ram",
		email: "ram123@gmail.com",
		mobile: "+91-8703747384",
		designation: "HR",
		gender: "Male",
		course: "BSC",
		createData: "2-27-2024",
	},
	{
		id: 4,
		image: "im",
		name: "Ram",
		email: "ram123@gmail.com",
		mobile: "+91-8703747384",
		designation: "HR",
		gender: "Male",
		course: "BSC",
		createData: "2-27-2024",
	},
	{
		id: 5,
		image: "im",
		name: "Ram",
		email: "ram123@gmail.com",
		mobile: "+91-8703747384",
		designation: "HR",
		gender: "Male",
		course: "BSC",
		createData: "2-27-2024",
	},
	{
		id: 6,
		image: "im",
		name: "Ram",
		email: "ram123@gmail.com",
		mobile: "+91-8703747384",
		designation: "HR",
		gender: "Male",
		course: "BSC",
		createData: "2-27-2024",
	},
];

const EmployeeList = () => {
	return (
		<div className="h-full">
			<div className="px-6 bg-emerald-700 text-white py-2">
				Create Employee Page
			</div>
			<div className="flex justify-center items-center mt-10 text-white">
				<table className="table-auto border w-[95%] py-5">
					<thead className="bg-teal-800 py-4 h-12 ">
						<tr className="divide-x-2 py-4">
							<th>ID</th>
							<th>Image</th>
							<th>Name</th>
							<th>Email</th>
							<th>Mobile Number</th>
							<th>Designation</th>
							<th>Gender</th>
							<th>Course</th>
							<th>Created Date</th>
							<th className="w-44">Action</th>
						</tr>
					</thead>
					<tbody>
						{employeeData.map((emp) => {
							return (
								<tr
									key={emp.id}
									className="border h-12 even:bg-slate-600 odd:text-black text-center"
								>
									<td className="border">{emp.id}</td>
									<td className=" flex justify-center items-center">
										<img
											src={profileImage}
											alt="profile-image"
											className="w-5 h-5 mt-3 rounded-full ring-2"
										/>
									</td>
									<td className="border">{emp.name}</td>
									<td className="border">{emp.email}</td>
									<td className="border">{emp.mobile}</td>
									<td className="border">{emp.designation}</td>
									<td className="border">{emp.gender}</td>
									<td className="border">{emp.course}</td>
									<td className="border">{emp.createData}</td>
									<td className=" space-x-4 text-white">
										<Link
											to={`/employeeedit/${emp.id}`}
											className="bg-blue-600 hover:bg-blue-700 transition-all px-4 py-1 text-xs rounded"
										>
											Edit
										</Link>
										<button className="bg-red-600 hover:bg-red-700 transition-all px-4 py-1 rounded text-xs">
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default EmployeeList;
