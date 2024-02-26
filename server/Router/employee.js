const express = require("express");
const {
  authUserMiddleware,
  validationMiddleware,
} = require("../middleware/authUser.js");
const {
  employeeDetailsController,
  employeeController,
  employeeUpdateController,
} = require("../controllers/employee.js");

const router = express.Router();

router.post(
  "/employee-details",
  validationMiddleware,
  authUserMiddleware,
  employeeDetailsController
);
router.get("/employee", authUserMiddleware, employeeController);
router.put(
  "/update-employee/:id",
  authUserMiddleware,
  employeeUpdateController
);
module.exports = router;
