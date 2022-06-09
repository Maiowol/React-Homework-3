// magazine.js
import { db } from "../../shared/firebase";
// import { getState } from 'react';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
} from "firebase/firestore";


// Actions
const LOAD = 'magazine/LOAD';
const CREATE = 'magazine/CREATE';
const UPDATE = 'magazine/UPDATE';
const REMOVE = 'magazine/REMOVE';

// Action Creators
export function loadMz(mz_list) {
    return { type: LOAD, mz_list };
}

const initialState = {
    list: [
    { name: 'abc', time: '10:00', text: '아', url: ''},
    { name: 'def', time: '11:00', text: '에', url: '../image/hey.png'},
    { name: 'ghi', time: '12:00', text: '이', url: '' },
    { name: 'jkl', time: '13:00', text: '오', url: '' },
    { name: 'jkl', time: '13:00', text: '우', url: ''}
    ] 
};

// Action Creators
export function createMz(magazine) {
    return { type: CREATE, magazine };
}

// export function updateMz(magazine) {
//     return { type: UPDATE, magazine};
// }

// export function removeMz(magazine) {
//     return { type: REMOVE, magazine};
// }

// middlewares
export const loadMzFB = () => {
    return async function (dispatch) {
        // 데이터를 가져와요!
        const dic_data = await getDocs(collection(db, "image"));
        console.log(dic_data)

        let mz_list = [];

        dic_data.forEach((doc) => {
            console.log(doc.data());
            // dic_list = [...dic_list, {...doc.data}]; or
            mz_list.push({ id: doc.id, ...doc.data() });
        });

        //   console.log(dic_list)

        dispatch(loadMz(mz_list));
    };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
       case LOAD: {
           return { list: action.mz_list};
       }


        default: return state;
    }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }