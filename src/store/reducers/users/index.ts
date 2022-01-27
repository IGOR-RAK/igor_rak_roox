import { UsersActions, UsersActionEnum, UsersState } from "./types";
import { IUser } from "../../../models/IUser";

function compareByCompanyName (a:IUser,b:IUser) {
    if (a?.company?.name < b?.company?.name){
        return -1
    }
    if (a?.company?.name > b?.company?.name){
        return 1
    }
    return 0
}

function compareByCity(a:IUser,b:IUser) {
    if (a?.address?.city < b?.address?.city  ){
        return -1
    }
    if (a?.address?.city > b?.address?.city){
        return 1
    }
    return 0
}

// Функции для сортировки 

const initialState: UsersState = { 
  error: "",
  isLoading: false,
  users: [] 
};

export default function usersReducer(
  state = initialState,
  action: UsersActions
): UsersState {
  switch (action.type) {
   
    case UsersActionEnum.SET_USERS:
      return { ...state, users: action.payload };
    case UsersActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case UsersActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case UsersActionEnum.SORT_BY_COMPANY:
        return { ...state, users: [...state.users.sort(compareByCompanyName)] };
    case UsersActionEnum.SORT_BY_CITY:
        return { ...state, users: [...state.users.sort(compareByCity)] };
    
    default:
      return state;
  }
}