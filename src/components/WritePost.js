// WritePost.js 게시물 작성
import React, { useRef, useState } from "react";
import styled from 'styled-components';

//Components
import HomeHead from "./HomeHead";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from '../shared/firebase';
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { createMz } from '../redux/modules/magazine';

//react-icons
import { AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

function CreatePost(props) {

    const [imgUrl, setImg] = React.useState("");

    const file_ref = useRef(null);
    const text_ref = useRef(null);
    
    const file = useRef('');
    const text = useRef('');

    const dispatch = useDispatch();

    //이미지 바이트로 스토리지에 업로드
    const uploadFB = async (e) => {
        const uploded_file = await uploadBytes(
            ref(storage,
                `images/${file_ref.current.files[0].name}`),
            file_ref.files[0]
        );

        //file_ref.current에 url에 값을 넣어준다.
        const file_url = await getDownloadURL(uploded_file.ref);
        file_ref.current = {url: file_url};
        
        // 23번으로 다시 리렌더링 (값이 변경되면 리렌더링이 된다)
        setImg(file_ref.current?.url); 

        //firebase image로 저장
        const user_doc = await addDoc(collection(db, "image"), {
            image_url: file_ref.current?.url,
            text: text_ref.current.value
        })

    };

    // 게시글 디스패치로 추가하기
    const addPOST = () => {
        console.log('카드에 붙어라 제발!')
        console.log(file,text)


        dispatch(createMz({
            file: file_ref.current.url,
            text: text_ref.current.value
        }
        ));

        console.dir(text_ref.current.value);
    }

    return (
        <>
            <HomeHead />
            <WriteBox>
                <PostBlock>
                    <h1>게시글 작성</h1>
                    <h4>이미지 선택</h4>
                    <input type='file' ref={file_ref} onChange={uploadFB}></input>
                    <img src={imgUrl}/>

                    <textarea ref={text_ref}></textarea>
                    <button onChange={addPOST}>완료하기</button>
                </PostBlock>
            </WriteBox>
        </>

    )
};

const WriteBox = styled.div`
width: 450px;
height: 600px;

background: white;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.09);

margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 50px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`;

const PostBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;

textarea {
    width:80px;
    
}

img {
    width: 300px;
    margin-top: 20px;
    
}

.picture {
   width: 300px;
   height: 200px;
}
`;


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

const Layout = styled.div`
display: flex;
flex-direction: column;

.layout3 {
    
}
`;




export default CreatePost;