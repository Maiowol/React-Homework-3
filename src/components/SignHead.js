//HomeHead.js 로그아웃 되어 있을 때 헤더
import React from "react";
import styled from 'styled-components';

import { useNavigate } from "react-router-dom";

// react-icons
import { AiFillHome } from "react-icons/ai";
import { FiLogIn,FiUserPlus} from "react-icons/fi";


function SignHead() {
    const navigate = useNavigate();

    return(
        <SignHeadBlock>
            
        <button class="logo" onClick={()=>{navigate('/')}}>
        <AiFillHome/></button>
            
        
         <div class="empty"></div>

         <button class="signin" onClick={()=>{navigate('/signin')}}><FiLogIn/></button>
          <button class="signup" onClick={()=>{navigate('/signup')}}><FiUserPlus/></button>
        
        </SignHeadBlock>
    )
};

const SignHeadBlock = styled.div`
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
    border: none;
    cursor: pointer;
    
`;


export default SignHead;

