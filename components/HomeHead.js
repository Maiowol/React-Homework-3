//HomeHead.js 로그인 되어 있을 때 헤더
import React, { useState, useEffect}from "react";
import styled from 'styled-components';

import { auth, db } from '../shared/firebase';

import { 
    onAuthStateChanged,
    signOut
  } from "firebase/auth";

function HomeHead() {
    return(
        <HomeHeadBlock>
         <button className="logo" >Home</button>
          <div class="empty"></div>
          <button className="notice">알림</button>
           <button onClick={()=> {
                 signOut(auth);
              }}>로그아웃</button>
        </HomeHeadBlock>
    )
};

const HomeHeadBlock = styled.div`
display: flex;
justify-content: center;


.empty {
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    width: 10vw;
    height: 30px;
    margin: 8px;
    margin-top: 20px;
    border-color: 1px solid black;
    cursor: pointer;
    
}


 
`;



export default HomeHead;

