const express = require("express");

const router = express.Router();

const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

router.get("/tasks", tasksController.getAll);
router.post(
  "/tasks",
  tasksMiddleware.validateFieldTitle,
  tasksController.create
);
router.delete("/tasks/:id", tasksController.remove);
router.put(
  "/tasks/:id",
  tasksMiddleware.validateFieldTitle,
  tasksMiddleware.validateFieldStatus,
  tasksController.update
);

module.exports = router;
