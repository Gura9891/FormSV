import { ADD_USER, UPDATE_USER } from "../types/user"

const DEFAULT_STATE = {
    userList : [
        {
            id: 1,
            maSV: 'G1',
            fullname: 'Nguyen Tuong Giang',
            phoneNumber: '0941983961',
            email: 'giang1@gmail.com',         
        },
        {
            id: 2,
            maSV: 'G2',
            fullname: 'Nguyen Van Hai',
            phoneNumber: '0908020103',
            email: 'giang2@gmail.com',         
        },  
    ],
    selectedUser : null,
}

export const userReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case ADD_USER : {
            const data = [...state.userList];

            data.push({...payload, id: Date.now()});

            state.userList = data;

            return{...state};
        }
        case 'SET_SELECTED_USER' : {
            return {...state, selectedUser: payload}
        }
        case UPDATE_USER : {
            state.userList = state.userList.map(ele => ele.id === payload.id ? payload: ele)
            state.selectedUser = null;
            return {...state}
        }
        case 'DELETE_USER': {
            state.userList = state.userList.filter(ele => ele.id !== payload);

            return {...state}
        }
        default:
        return state
    }
}