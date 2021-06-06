import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css"

function Sidebar() {

  const user = useSelector(selectUser);

    const recentItem = (topic)=>(
        <div className="sidebar_recentitem">
            <span className="hashtag">
                #
            </span>
            <p>{topic}</p>
        </div>
            
            );


    return (

        
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.hdqwalls.com/download/iron-man-vr-4k-f0-1366x768.jpg" alt="" />
                <Avatar src={user.photoUrl} className="sidebar_avatar">{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statnumber">
                        1256
                    </p>

                </div>
                <div className="sidebar_stat">
                <p>Views on post</p>
                    <p className="sidebar_statnumber">
                        2589
                    </p>
                </div>
            </div>
            
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("softwaredeveloper")}
                {recentItem("programing")}
                {recentItem("desigm")}
                {recentItem("android")}
            </div>


        </div>

    )
}

export default Sidebar
