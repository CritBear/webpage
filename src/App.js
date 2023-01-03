/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [post, setPost] = useState(['temp data from server', 'second text', '3rd', '4th']);
  let [likeCount, setLikeCount] = useState(new Array(post.length).fill(0));
  let [modalActive, setModalActive] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React page</h4>
      </div>
 
      {
        post.map(function(text, idx) {
          return (
            <div className="list" key={ idx }>
              <h4 onClick={()=>{setModalActive(true); setTitle(idx);}}>
                text
                <span onClick={(e)=>{ 
                  e.stopPropagation(); 
                  AddLikeCount(idx, likeCount, setLikeCount); 
                }}>👍</span>
                { likeCount[idx] }
              </h4>
              <p>Data: Feb 17</p>
              <p>{ text }</p>
              <p>{ idx }</p>
              <button onClick={()=>{
                let tempPost = [...post];
                tempPost.splice(idx, 1);
                setPost(tempPost);

                let tempLikeCount = [...likeCount];
                tempLikeCount.splice(idx, 1);
                setLikeCount(tempLikeCount);
              }}>Delete</button>
            </div>
          )
        })
      }

      <input type="text" onChange={(e)=>{
        setInputValue(e.target.value);
      }} />
      <button onClick={()=>{
        let tempPost = [...post];
        tempPost.unshift(inputValue);
        setPost(tempPost);

        let tempLikeCount = [...likeCount];
        tempLikeCount.unshift(0);
        setLikeCount(tempLikeCount);
      }}>Submit</button>

      {
        modalActive ? <Modal setPost={ setPost } title={ title } post={ post } /> : null
      }
    </div>
  );
}

function AddLikeCount(idx, likeCount, setLikeCount) {
  let tempLikeCount = [...likeCount]
  tempLikeCount[idx] = tempLikeCount[idx] + 1
  setLikeCount(tempLikeCount)
}


function Modal(props) {
  return (
    <div className="modal">
      <h4>{ props.post[props.title] }</h4>
      <p>data</p>
      <p>contents</p>
      <button>Modify</button>
    </div>
  );
}


export default App;
