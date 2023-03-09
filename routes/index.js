const express = require('express');
const signupRouter = require("./signup");
const loginRouter = require("./login");
const postRouter = require("./posts");
const commentRouter = require("./comments");
const likeRouter = require("./likes");

const router = express.Router();


router.use("/signup", signupRouter);
router.use("./login", loginRouter);
router.use("./posts", [postRouter, likeRouter]);
router.use("./comments", commentRouter);
// router.use("./like", likeRouter);





// Exam 1

module.exports = router;
