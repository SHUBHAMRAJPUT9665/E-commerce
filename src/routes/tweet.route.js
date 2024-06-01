import { Router } from "express";
import { createTweet } from "../controllers/tweet.controller.js";
import { toggleLike } from "../controllers/like.controller.js";

import { createComment } from "../controllers/comment-controller.js";
const router = Router();

// route for creating tweet
router.route("/create-tweet").post(createTweet);

// like

router.post('/likes/toggle',toggleLike);

router.route('/comments').post(createComment)

export default router;
