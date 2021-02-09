import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhbJo1TA84pPpOzi_cj45fM2zLKKqzVuY1g&usqp=CAU"
                message="Wow"
                timestamp="This is a timestamp"
                username="mm"
                image="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
            />
            <Post 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhbJo1TA84pPpOzi_cj45fM2zLKKqzVuY1g&usqp=CAU"
                message="Wow"
                timestamp="This is a timestamp"
                username="mm"
            />
        </div>
    )
}

export default Feed;