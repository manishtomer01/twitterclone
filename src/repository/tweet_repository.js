// const Tweet = require("../models/tweet");
import Tweet from "../models/tweet.js";

class TweetRepository {
  // async getAllTweets() {
  //   try {
  //     const tweet = await Tweet.find({});
  //     return tweet;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({ path: "comments" })
        .lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  // async update(id, data) {
  //   try {
  //     const tweet = await Tweet.findByIdAndUpdate(id, data, { new: true });
  //     return tweet;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async destroy(id) {
    try {
      const tweet = await Tweet.findByIdAndRemove(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find({}).skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

// module.exports = TweetRepository;
export default TweetRepository;