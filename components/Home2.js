// Home2.js 로그인 되었을 때 홈 (게시글 추가, 수정, )
import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


import HomeHead from "./HomeHead";
import Btn from './Btn';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <HomeHead />
                <HomeCard>
                    <PostHead>
                    <h4>아이디</h4>
                    <div class="empty"></div>
                    <h4>17시간 전</h4>
                    <button>수정</button>
                    </PostHead>
                    <PostBox>
                        <p>텍스트</p>
                        <p>사진</p>
                       <button onClick={()=> {
                           navigate('/post')
                       }}>게시글 추가</button>
                    </PostBox>
                   
                </HomeCard>
        </>

    )
};

const HomeCard = styled.div`
width: 750px;
height: 568px;

background: white;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.09);

margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 50px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`;

const PostHead = styled.div`
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
    width: 5vw;
    height: 30px;
    margin: 8px;
    margin-top: 20px;
    border-color: 1px solid black;
    cursor: pointer;
    
}
`;

const PostBox = styled.div``;

export default Home;
