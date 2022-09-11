const express = require('express');
const Router = express.Router();
const multer = require('multer');


// -------- Multer configuration for file upload ( for employee's image )

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, callback) => {
      const abs_path = __dirname + "public\\images";
      const abs_path_ = abs_path.replace("Routes", "");
      console.log(abs_path_);
      callback(null, abs_path_);
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  });
  const upload = multer({ storage: fileStorageEngine });



// ---------- Import controller ------------------
const controller = require('../Controllers/EmployeeController');

// ------------- APIs ----------------------------

Router.route('/api/add-employee').post(upload.single('image'), controller.addEmployee);
Router.route('/api/delete-employee/:id').delete(controller.deleteEmployee);
Router.route('/api/update-employee/:id').patch(controller.updateEmployee);
Router.route('/api/get-all-employees').get(controller.getAllEmployees);
Router.route('/api/get-employee/:id').get(controller.getEmployee);



module.exports = Router;