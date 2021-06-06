import { Avatar } from '@material-ui/core'
import React ,{forwardRef} from 'react'
import Inputoptions from './Inputoptions'
import "./Post.css"
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(( {name,description,message,photoUrl}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
            <Inputoptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"  />
            <Inputoptions Icon={ChatBubbleOutlineOutlinedIcon} title="Comment" color="gray"  />
            <Inputoptions Icon={ShareOutlinedIcon} title="Share" color="gray"  />
            <Inputoptions Icon={SendOutlinedIcon} title="Sent" color="gray"  />
            </div>
            
        </div>
    )
})

export default Post
