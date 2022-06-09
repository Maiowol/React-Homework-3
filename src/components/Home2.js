// Home2.js 로그인 되었을 때 홈 (게시글 추가, 수정, )
import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch, useEffect } from "react-redux";

import HomeHead from "./HomeHead";
import { loadMzFB  } from "../redux/modules/magazine";



function Home() {
    const navigate = useNavigate();
    const post_card = useSelector((state) => state.magazine.list);
    const dispatch = useDispatch();

//     React.useEffect( () => {
//         dispatch(loadMzFB(
//         ))
// },[])

        

    return (
        <>
            <HomeHead />
            <button className='postbtn'onClick={() => {
                navigate('/post')
            }}>게시글 추가</button>

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
                            <button>수정</button>
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
width: 750px;
height: 568px;

background: white;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.09);

margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 50px;
margin-bottom: 32px;
display: flex;
flex-direction: column;

button {
    width: 80px;
    height: 30px;
}
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

const PostBox = styled.div`
display: flex;
justify-content: center;
p {
    margin: 0;
    
}
`;

export default Home;
