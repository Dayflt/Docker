// eslint-disable-next-line
import './css/Gallery.css';
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import api from '../api.jsx';
import './css/Home2.css';

const Gallery = () => {
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  const [user3, setUser3] = useState(null);
  const [user4, setUser4] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        // setUsers(null);
        setLoading(true);
        for(var i=1; i<=4; i++){
          const response = await api.get('/api/model/gallery/'+i);
          if(response.data.success){
            if(i==1) setUser1(response.data.data);
            else if(i==2) setUser2(response.data.data);
            else if(i==3) setUser3(response.data.data);
            else setUser4(response.data.data);
          }else{
            console.log(response.data.message);
          }
        }
      }catch(e){
        console.error(e);
      }
      setLoading(false);
    };
    fetchUsers();
  },[]);

  if (loading) 
    return (
      <div className="loading_box">
        <div className="loading">갤러리 로딩중..</div>
      </div>)
  if (!user1 || !user2 || !user3 || !user4) return null;
  else return (
    <div className="masthead">
      <header className="container">
        <div class="masthead-heading text-uppercase">Gallery</div>
        <br></br>
        <div className="gallery_total">
          <div className="gallery_category" >
            <div className="imoge">#Hooray</div>
            <hr></hr>
            {user1.map((user , user_id) => (
              <div className="gallery_no" key={user_id}>
                <ReactPlayer 
                  url={user.model_result}
                  className="gallery_video"
                  loop="true"
                  playing="true"
                  muted="true"
                  width="90%"
                  height="90%" />
                <h6>{user.model_name}</h6>
              </div>
            ))}
          </div>
          <div className="gallery_category" >
          <div className="imoge">#OMG</div>
            <hr></hr>
            {user2.map((user , user_id) => (
              <div className="gallery_no" key={user_id}>
                <ReactPlayer 
                  url={user.model_result}
                  className="gallery_video"
                  loop="true"
                  playing="true"
                  muted="true"
                  width="90%"
                  height="90%" />
                <h6>{user.model_name}</h6>
              </div>
            ))}
          </div>
          <div className="gallery_category" >
          <div className="imoge">#DAMN</div><hr></hr>
            {user3.map((user , user_id) => (
              <div className="gallery_no" key={user_id}>
                <ReactPlayer 
                  url={user.model_result}
                  className="gallery_video"
                  loop="true"
                  playing="true"
                  muted="true"
                  width="90%"
                  height="90%" />
                <h6>{user.model_name}</h6>
              </div>
            ))}
          </div>
          <div className="gallery_category" >
          <div className="imoge">#Holy_Moly</div><hr></hr>
            {user4.map((user , user_id) => (
              <div className="gallery_no" key={user_id}>
                <ReactPlayer 
                  url={user.model_result}
                  className="gallery_video"
                  loop="true"
                  playing="true"
                  muted="true"
                  width="90%"
                  height="90%" />
                <h6>{user.model_name}</h6>
              </div>
            ))}
          </div>
        </div>
        <div className="button_box">
          <Link to ="../">  
            <button className="RetryButton"> 
              TRY AGAIN
            </button>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Gallery;