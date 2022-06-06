// WritePost.js 게시물 작성
import React, { useRef } from "react";
import styled from 'styled-components';
import { useDispatch } from "react-redux";

//Components
import HomeHead from "./HomeHead";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from '../shared/firebase';
import { addDoc, collection } from "firebase/firestore";


function CreatePost(props) {
    
    const file_ref = useRef(null);
    const text_ref = useRef(null);
    // const id_ref = collection(db, "users");

    // const id_ = query(id_ref, where("user_id", "==", user.user.email));

    

    const uploadFB = async (e) => {
        // console.log(e.target.files);
        const uploded_file = await uploadBytes(
            ref( storage, 
            `images/${e.target.files[0].name}`),
            e.target.files[0]
            );

            console.log(uploded_file);

        const file_url = await getDownloadURL(uploded_file.ref);
        file_ref.current = { url: file_url };

        const user_doc = await addDoc(collection(db, "users"), {
            image_url: file_ref.current?.url
            
        })
    };
    return (
        <>
        <HomeHead />
           <WriteBox>
            <PostBlock>
            <h1>게시글 작성</h1>
            <p>이미지 선택</p>
            <input type='file' onChange={uploadFB}></input>
            <h3>미리보기</h3>
            <div>
               <p> 게시물 작성</p> 
                <textarea ref={text_ref} className="write" placeholder="게시글을 입력하세요"></textarea>
                </div>
                <button>완료하기</button>
           </PostBlock>
       </WriteBox>
       </>
       
    )
};

const WriteBox = styled.div`
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

const PostBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export default CreatePost;