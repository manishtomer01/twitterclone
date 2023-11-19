import express from "express";
import { connect } from "./config/database.js";
import {
  UserRepository,
  TweetRepository,
  LikeRepository,
} from "./repository/index.js";
import apiRoutes from "./routes/index.js";
import { LikeService } from "./services/index.js";

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
app.listen(3000, async () => {
  await connect();
  console.log("mongodb connected");

  const userRepo = new UserRepository();
  const tweetRepo = new TweetRepository();
  const tweets = await tweetRepo.getAll(0, 10);
  const users = await userRepo.getAll();
  const likeService = new LikeService();
  await likeService.toggleLike(tweets[0].id, "Tweet", users[0].id);
});


