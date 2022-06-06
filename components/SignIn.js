// SignIn.js 로그인 페이지
import React, { useRef } from "react";
import styled from 'styled-components';
import SignHead from "./SignHead";

import { auth, db } from '../shared/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, where, query, collection } from "firebase/firestore";

import { Link } from "react-router-dom";

function SignIn() {

    const id_ref = useRef(null);
    const pw_ref = useRef(null);


    const signinFB = async() => {
        const user = await signInWithEmailAndPassword(
            auth,
            id_ref.current.value,
            pw_ref.current.value
            );
            console.log(user);

            const user_docs = await getDocs(query(
                collection(db, "users"), where("user_id", "==", user.user.email)
            ));

            user_docs.forEach(u => {
                console.log(u.data());
            });
    }

    return (
        <>  
        <SignHead />
        <SignBox>
            <SignInBlock>
            <h1>로그인</h1>
            <p>아이디</p>
            <input ref={id_ref} type="text" className="id" placeholder="아이디를 입력하세요"/>
            <p>비밀번호</p>
            <input ref={pw_ref} type="password" className="pw" placeholder="비밀번호를 입력하세요" />
            <button onClick={signinFB}>로그인</button>
        </SignInBlock>    
        </SignBox>
           
        </>
    )
};

const SignBox = styled.div`
width: 450px;
height: 568px;

background: white;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.09);

margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 50px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`;

const SignInBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1 {
    margin-top: 40px;
    margin-bottom: 40px;
}

p {
    margin: 2px;
    padding-right: 200px;
}

input {
    width: 250px;
    height: 30px;
    outline: none;
}

button {
    width: 100px;
    margin-top: 30px;
   
}

.id {
    margin-bottom: 30px;
}

`;





export default SignIn;