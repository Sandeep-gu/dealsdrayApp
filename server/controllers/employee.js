const Employee = require("../models/employee.js");
const employeeDetailsController = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      designation,
      gender,
      course,
      image = "",
    } = req.body;
    if (!name || !email || !mobile || !designation || !gender) {
      return res.status(400).send({ message: "Please fill all Details" });
    }
    const exist = await Employee.findOne({ email: email });
    if (exist) {
      return res.status(409).send({ message: "EmailId already Exists" });
    }
    const userData = await Employee.create({
      name: name,
      email: email,
      mobile: mobile,
      designation: designation,
      gender: gender,
      course: course,
      image: image,
      userId: req.user.id,
    });
    res.status(201).send({ message: "successfully inserted", userData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const employeeController = async (req, res) => {
  try {
    const employee = await Employee.find({ userId: req.user.id });
    res.status(200).send({ message: "successfully found", employee });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const employeeUpdateController = async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      email,
      mobile,
      designation,
      gender,
      course,
      image = "",
    } = req.body;
    if (!name || !email || !mobile || !designation || !gender || !course) {
      return res.status(400).json({
        success: false,
        message: "Please Provide all Details",
      });
    }
    const employeeData = await Employee.findById(req.params.id);
    if (!employeeData) {
      return res.status(404).send({ message: "User not found" });
    }
    employeeData.name = name;
    employeeData.email = email;
    employeeData.mobile = mobile;
    employeeData.course = course;
    employeeData.designation = designation;
    employeeData.gender = gender;
    employeeData.image = image;

    await employeeData.save();

    res.status(200).json({
      success: true,
      message: "User details updated successfully",
      employeeData,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
module.exports = {
  employeeDetailsController,
  employeeController,
  employeeUpdateController,
};
