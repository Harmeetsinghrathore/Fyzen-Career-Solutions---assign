const Employee = require("../Models/EmployeeModel");

// -------- Add Employee ----------------

const addEmployee = async (req, res) => {
  try {
    
    console.log(req.body, '0000000');
      const file_name = "http://localhost:8000/images/" + req.file.originalname;

    const employee = new Employee({
      f_name: req.body.first_name,
      l_name: req.body.last_name,
      email: req.body.email,
      employee_id: req.body.employee_id,
      contact: req.body.contact,
      image: file_name,
    });

    const newEmployee = await employee.save();

    return res.status(201).json({
      Status: "Success",
      Message: "New employee added",
      Employee: newEmployee,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      Status: "Error",
      Message: "Internal Server Error",
      Error: error,
    });
  }
};

// -------- Delete Employee -----------

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({
        Status: "Error",
        Message: "No employee found",
      });
    }

    await employee.remove();

    return res.status(200).json({
      Status: "Success",
      Message: "Employee removed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      Status: "Error",
      Message: "Internal Server Error",
      Error: error,
    });
  }
};

// -------- Get an employee ----------

const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        Status: "Error",
        Message: "No employee found",
      });
    }

    return res.status(200).json({
      Status: "Success",
      Message: "Employee found",
      Employee: employee,
    });
  } catch (error) {
    return res.status(500).json({
      Status: "Error",
      Message: "Internal Server Error",
      Error: error,
    });
  }
};

//---------- Get all employees --------

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    if (!employees) {
      return res.status(404).json({
        Status: "E",
        Message: "No employee found",
      });
    }

    return res.status(200).json({
      Status: "Success",
      Message: "Employees found successfully",
      Employees: employees,
    });
  } catch (error) {
    return res.status(500).json({
      Status: "Error",
      Message: "Internal Server Error",
      Error: error,
    });
  }
};

// ------------ Update an employee details ---------

const updateEmployee = async(req, res) => {
  try {
    let employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        Status: "Error",
        Message: "Employee not found",
      });
    }

    console.log(req.body, 'requesttt');
    console.log(req.params, 'requesttt');

    employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new : true});
    const updatedEmployee = await employee.save();
    
    
    return res.status(200).json({
        Status : "Success", 
        Message : "Employee details updated successfully",
        Employee : updatedEmployee
    })

  } catch (error) {
    console.log(error, 'error');
    return res.status(500).json({
      Status: "Error",
      Message: "Internal Server Error",
      Error: error,
    });
  }
};

module.exports = {
  addEmployee,
  deleteEmployee,
  updateEmployee,
  getAllEmployees,
  getEmployee,
};
