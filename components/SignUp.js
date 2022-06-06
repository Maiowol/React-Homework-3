// SignUp.js 회원가입 페이지
import React, {useRef} from "react";
import styled from 'styled-components';

// Components
import SignHead from "./SignHead";

import { auth, db } from '../shared/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

// 회원가입
function SignUp() {
    const id_ref = useRef(null);
    const name_ref = useRef(null);
    const pw_ref = useRef(null);
    const pw_check = useRef(null);

    const signupFB = async () => {

        const user = await createUserWithEmailAndPassword(
            auth, 
            id_ref.current.value, 
            pw_ref.current.value
            );
        console.log(user);
        const user_doc = await addDoc(collection(db, "users"), {
            user_id: user.user.email, 
            name: name_ref.current.value
        });
    }

    return (
        <>
            <SignHead />
            <SignBox>
            <SignUpBlock>
                <h1>회원가입</h1>

                <p>아이디</p>
                <input ref={id_ref} type="text" className="id" placeholder="아이디를 입력하세요" />
                
                <p>닉네임</p>
                <input ref={name_ref} type="text" className="id" placeholder="닉네임을 입력하세요" />
                
                <p>비밀번호</p>
                <input ref={pw_ref} type="password" className="pw" placeholder="비밀번호를 입력하세요" />
                
                <p>비밀번호 확인</p>
                <input ref={pw_check} type="password" className="id" placeholder="비밀번호를 다시 입력하세요" />
                
                <button onClick={signupFB}>회원가입</button>
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

`;


export default SignUp;