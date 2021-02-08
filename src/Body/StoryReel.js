import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://i.pinimg.com/originals/2f/9d/95/2f9d9562eb2252ae132b4bf8258aa18a.jpg"
                profileSrc="https://images.unsplash.com/photo-1517369529118-91c367592714?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aGliaXNjdXMlMjBmbG93ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                title="Mauli Makadiya"
            />
            <Story
                image="https://images.pexels.com/photos/6371/red-love-heart-valentines.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://i.pinimg.com/originals/8d/6a/e4/8d6ae4c2b8e847a6ecd17dbf3be1b6d2.jpg"
                title="Parth Makadiya"
            />
            <Story
                image="https://www.untumble.com/blog/wp-content/uploads/2017/04/Krishna.jpg"
                profileSrc="https://i.ytimg.com/vi/nbPyOVfwRhI/maxresdefault.jpg"
                title="Parv Bhalani"
            />
            <Story
                image="https://wallpapercave.com/wp/wp3563260.jpg"
                profileSrc="https://images-na.ssl-images-amazon.com/images/I/61ewR1JDGQL.jpg"
                title="Kiaan Tilva"
            />
            <Story
                image="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                profileSrc="https://www.youngisthan.in/wp-content/uploads/2017/02/tom-jerry.jpg"
                title="Param Bhalani"
            />
        </div>
    )
}

export default StoryReel;