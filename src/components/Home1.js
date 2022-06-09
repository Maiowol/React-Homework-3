// Home1.js 로그아웃 되었을 때 홈 (수정 x, )
import React, { useState } from "react";
import styled from "styled-components";
import SignHead from "./SignHead";
import { useSelector } from "react-redux";

import foto from "../image/hey.png";

function Home() {
    
    const post_card = useSelector((state) => state.magazine.list);

    console.log(post_card);

    return (
        <>
            <SignHead />
            {/* Home 카드 뷰 */}
            { post_card && post_card.map((a, i) => {
                    return (
                        <HomeCard key={i}>
                            <PostHead>
                                <div class='nickname'>
                                    <div class='image'></div>
                                    <h4>{a.name}</h4>
                                </div>
                                <div class="empty"></div>
                                <h4>{a.time}</h4>
                            </PostHead>
                            <PostBox>
                                <p>{a.text}</p>
                                <img src={a.image_url}></img>
                            </PostBox>
                        </HomeCard>
                    )
                })
            }


        </>

    )
};

const HomeCard = styled.div`
width: 650px;
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

.nickname {
    display: flex;
    text-position: left;
}

.image {

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

const PostBox = styled.div`

display: flex;
justify-content: center;

p {
    margin: 0;
    
}

.foto {
    background-image: url('./image/hey.png');
}

`;

export default Home;
