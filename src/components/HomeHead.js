//HomeHead.js 로그인 되어 있을 때 헤더
import React, { useState, useEffect}from "react";
import styled from 'styled-components';

import { auth, db } from '../shared/firebase';

import { 
    onAuthStateChanged,
    signOut
  } from "firebase/auth";

  //react-icons
  import { AiFillHome, AiOutlineBell } from "react-icons/ai";
  import { FiLogOut } from "react-icons/fi";

  import { useNavigate } from "react-router-dom";


function HomeHead() {
    const navigate = useNavigate();

    const [signIn, setSignIn] = useState(false);

  const signInCheck = async (user) => {
    if (user) {
      setSignIn(true);
    } else {
      setSignIn(false);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, signInCheck);
  }, [])


    return(
        <HomeHeadBlock>
            <button className="logo" onClick={()=>{navigate('/signin')}}><AiFillHome/></button>      
            <div class="empty"></div>
          {/* <button className="notice"><AiOutlineBell/></button> */}
           <button onClick={()=> {
                 signOut(auth);
              }}><FiLogOut/></button>
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
    width: 60px;
    height: 30px;
    margin: 8px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
}


 
`;



export default HomeHead;

