import { Avatar } from "@material-ui/core";
import React from "react";
import "./MessageSender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar/>
                <form>
                    <input
                        className="messageSender_input"
                        placeholder={`What's on your mind`}
                    />
                    <input placeholder="image URL (optionl)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;