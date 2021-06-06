import React, {useState , useEffect}from 'react'
import "./Feed.css"
import CreateIcon from '@material-ui/icons/Create';
import Inputoptions from './Inputoptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import firebase from "firebase"
import FlipMove from "react-flip-move"
function Feed() {

    const [input,setInput] = useState("");
    const [posts,setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
       db.collection("posts").orderBy("timestamp" , "desc").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc)=>({
            id: doc.id,
            data: doc.data(),
        })))
       )  
    }, []);




    const sentPost = (e) =>{
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed_inputcontainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form >
                        <input  value = {input} onChange={e=>setInput(e.target.value)} type="text"/>
                        <button onClick={sentPost}  type="submit">Sent</button>
                    </form>
                </div>
                <div className="feed_inputoptions">
                    <Inputoptions Icon={ImageIcon} title="Photo" color="70B5F9"  />
                    <Inputoptions Icon={SubscriptionsIcon} title="Video" color="E7A33E"  />
                    <Inputoptions Icon={EventNoteIcon} title="Event" color="C0CABD"  />
                    <Inputoptions Icon={CalendarViewDayIcon} title="Write article" color="7FC15E"  />
                </div>

            </div>

            <FlipMove>
            {posts.map(({id, data:{name , description, message , photoUrl}}) => (
                <Post
                key = {id}
                name = {name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
            )) }

            </FlipMove>


            
  
        </div>
    )
}

export default Feed
