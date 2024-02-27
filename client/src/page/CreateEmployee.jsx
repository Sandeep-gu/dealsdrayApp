import React from "react";

const CreateEmployee = () => {
	return (
		<div className="h-full">
			<div className="px-6 bg-emerald-700 text-white py-2">
				Create Employee Page
			</div>
			<div className=" flex h-full ml-10 mt-10 justify-center">
				<form
					action=""
					className="border-2 shadow-md min-h-[600px] h-[600px] gap-4 flex flex-col p-10 w-[500px]"
				>
					<div className="flex flex-col w-full">
						<label htmlFor="name" className="font-semibold">
							Name
						</label>
						<input
							type="text"
							id="name"
							className="w-full border border-gray-600 px-1 rounded py-1"
							placeholder="Name"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="email" className="font-semibold">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="w-full border border-gray-600 px-1 rounded py-1"
							placeholder="Email"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="mobile" className="font-semibold">
							Mobile No.
						</label>
						<input
							type="text"
							id="mobile"
							className="w-full border border-gray-600 px-1 rounded py-1"
							placeholder="Mobile"
						/>
					</div>
					<div className="flex flex-col w-full ">
						<label htmlFor="designation" className=" font-semibold">
							Choose your designation:
						</label>
						<select
							name=""
							id="designation"
							defaultValue="designation"
							className="w-full border border-gray-600 px-1 rounded py-1"
						>
							<option value="hr">HR </option>
							<option value="manager">Manager </option>
							<option value="sales">Sales </option>
						</select>
					</div>
					<div className="flex  gap-8 w-full">
						<div className="font-semibold">Gender</div>
						<div className="flex items-center gap-4 ">
							<div className="flex items-center gap-2">
								<label htmlFor="male">Male</label>
								<input type="radio" name="gender" id="male" />
							</div>
							<div className="flex items-center gap-2">
								<label htmlFor="female">Female</label>
								<input type="radio" name="gender" id="female" />
							</div>
						</div>
					</div>
					<div className="flex  gap-8 w-full">
						<fieldset className="flex justify-between gap-10">
							<legend className="font-semibold">Course</legend>
							<div>
								<div className="flex gap-4">
									<input type="checkbox" id="bca" name="course" value="bca" />
									<label htmlFor="coding">BCA</label>
								</div>
								<div className="flex gap-4">
									<input type="checkbox" id="mca" name="course" value="mca" />
									<label htmlFor="music">MCA</label>
								</div>
							</div>
							<div>
								<div className="flex gap-4">
									<input type="checkbox" id="BSC" name="course" value="bsc" />
									<label htmlFor="music">BSC</label>
								</div>
								<div className="flex gap-4">
									<input type="checkbox" id="cse" name="course" value="cse" />
									<label htmlFor="music">CSE</label>
								</div>
							</div>
						</fieldset>
					</div>
					<div className="flex items-center justify-between gap-4 ">
						<label htmlFor="image" className="font-semibold">
							Image Upload
						</label>
						<input type="file" className="text-sm" />
					</div>

					<button className="bg-emerald-700  text-white py-1 rounded">
						Create Employee{" "}
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateEmployee;
