import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


import React from 'react'
import HeaderOption from './HeaderOption';
import {useDispatch} from "react-redux"
import { logout } from './features/userSlice';
import { auth } from "./firebase"


function Header() {

    

  
    
    const dispatch = useDispatch({});

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();


    }

    return (
        <div className="header">

            <div className="header_left">
                <img src="https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1621678217~hmac=e86f7ca5b52e12ec1e3b79bed12bbf8e" alt="" />

                <div className="header_search">
                    <SearchIcon/>
                    <input placeholder="Search" type="text" />
                    
                </div>
            
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Job" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} title={"Tony Stark"}  onClick={logoutOfApp} />

                
               
 
            
            </div>
            
        </div>
    )
}

export default Header
