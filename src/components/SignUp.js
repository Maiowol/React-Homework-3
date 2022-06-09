// SignUp.js 회원가입 페이지
import React, {useRef, useState} from "react";
import styled from 'styled-components';

// Components
import SignHead from "./SignHead";

import { auth, db } from '../shared/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import { useSelector } from "react-redux";

function SignUp() {
    const id_ref = useRef(null);
    const name_ref = useRef(null);
    const pw_ref = useRef(null);
    const pw_check = useRef(null);

    //5. Firebase에 저장
    const signupFB = async() => {
        const user = await createUserWithEmailAndPassword(
            auth, 
            id_ref.current.value, 
            pw_ref.current.value
            );
        console.log(user);
        const user_doc = await addDoc(collection(db, "users"), {
            user_id: user.user.email, 
            name: name_ref.current.value
        })
        alert('축하합니다! 회원가입에 성공하셨습니다.')
    };


    //2. id 이메일 형식 체크하기
    const checkID = () => {
        const id_value = Array.from(id_ref.current.value)
        if(id_value == "") {
            alert('아이디를 입력해주세요!')
            document.getElementById('id').focus()
        } else if (!id_value.includes('@')){
            alert('이메일 형식에 맞게 작성해주세요!')
            document.getElementById('id').focus()
        } else {
            checkName()
        }
    };
    
    
    //3. name 형식 체크
    const checkName = () => {
        if(name_ref.current.value.length < 4) {
            alert('4글자 이상의 닉네임을 작성해주세요!')
            document.getElementById('name').focus()
        } else {
            checkPW()
        }
    };

    //4. pw 형식 체크
    const checkPW = () => {
        if (pw_ref.current.value == "") {
            alert('비밀번호를 입력해주세요.')
        } else if (pw_ref.current.value.length < 8){
            alert('8자리 이상의 비밀번호를 적어주세요!')
            document.getElementById('pw').focus()
        } else if(pw_check.current.value == ""){
            alert('비밀번호를 한 번 더 체크해주세요.')
            document.getElementById('pw_check').focus()
        } else if(pw_ref.current.value !== pw_check.current.value) {
            alert('비밀번호가 맞지 않습니다.')
            document.getElementById('pw_check').focus()
        } else { 
            signupFB()
        }
    };


    return (
        <>
            <SignHead />
            <SignBox>
            <SignUpBlock>
                <h1>회원가입</h1>

                <p>아이디</p>
                <input ref={id_ref} type="text" id="id" placeholder="이메일 형식을 입력하세요" />
                
                <p>닉네임</p>
                <input ref={name_ref} type="text" id="name" placeholder="닉네임을 입력하세요" />
                
                <p>비밀번호</p>
                <input ref={pw_ref} type="password" id="pw" placeholder="비밀번호를 입력하세요" />
                
                <p>비밀번호 확인</p>
                <input ref={pw_check} type="password" id="pw_check" placeholder="비밀번호를 다시 입력하세요" />
                
                {/* 1. 시작점 */}
                <button onClick={checkID}>회원가입</button>
            </SignUpBlock>

            </SignBox>
           
        </>


    )
}

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

const SignUpBlock = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet"); 
*{
    font-family: 'Gowun Dodum', sans-serif;
}  
display: flex;
flex-direction: column;
align-items: center;

h1 {
    margin-top: 40px;
    margin-bottom: 40px;
}

p {
    margin: 5px;
    padding-right: 200px;
}

input {
    width: 250px;
    height: 30px;
    margin-bottom: 5px;
}

button {
    width: 100px;
    margin-top: 30px;
   
}

`;


export default SignUp;