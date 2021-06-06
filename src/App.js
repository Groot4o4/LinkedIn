import React ,{useEffect}from 'react'; 
import {useSelector } from "react-redux"
import './App.css';
import {login, logout,selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { auth } from "./firebase"
import {useDispatch} from "react-redux"
import Widgets from './Widgets';

function App() { 

  const dispatch = useDispatch({});

  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login(
          {
            email:userAuth.email,
              uid:userAuth.uid,
              displayName:userAuth.displayName,
              photoUrl:userAuth.photoURL,
          }
        ));

      }else{ dispatch(logout());

      }
    })
  
  }, [])
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Header/>

      {!user ? ( <Login /> ): ( 
      <div className="app_body">
        <Sidebar/>
        <Feed />
        <Widgets/>
        
      </div>) }
     
    </div>
  );
}

export default App;
