import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

// Components
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import WritePost from './components/WritePost';


import { auth, db } from './shared/firebase';
import { 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import HomeHead from './components/HomeHead';


function App() {

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

  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home1 />} />

        {/* 로그인 되었을 때, 로그아웃 버튼 + 게시물 수정 + 하트 누르기 홈 페이지 보여주기 */}
        {signIn ? (
         <Route path ="/signin" element={<Home2 />} />
        ) : (<Route exact path="/signin" element={<SignIn />} />)}

        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/post" element={<WritePost />} />
        <Route path='*' element={<div>Not Found</div>}></Route>
      </Routes>

    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default App;
