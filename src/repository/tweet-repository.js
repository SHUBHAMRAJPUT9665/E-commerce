import { Tweet } from "../models/tweet.model.js";


class TweetRepository {
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet
            
        } catch (error) {
            console.log(error)
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet
            
        } catch (error) {
            console.log(error)
        }
    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'}.lean)();
            return tweet
            
        } catch (error) {
            console.log(error)
        }
    }


    async destory(id){
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet
            
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(offset , limit){
        try {
            const tweet = await Tweet.find().skeip(offset).limit(limit);
            return tweet
            
        } catch (error) {
            console.log(error)
        }
    }
}



module.export = TweetRepository