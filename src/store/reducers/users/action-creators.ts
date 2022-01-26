import {
    SetErrorAction,
    SetIsLoadingAction,
    SetUsersAction,
    SortByCompanyAction,
    SortByCityAction,
    UsersActionEnum
  } from "./types";
  import { IUser } from "../../../models/IUser";
  import { AppDispatch } from "../../index";
  import UserService from "../../../api/UserService";


  
export const UsersActionCreators = {
    setUsers: (users: IUser[]): SetUsersAction => ({
      type: UsersActionEnum.SET_USERS,
      payload: users
    }),   
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
      type: UsersActionEnum.SET_IS_LOADING,
      payload
    }),
    setError: (payload: string): SetErrorAction => ({
      type: UsersActionEnum.SET_ERROR,
      payload
    }),
    sortByCompanyName: ():SortByCompanyAction =>({
        type:UsersActionEnum.SORT_BY_COMPANY
    }),
    sortByCity: ():SortByCityAction =>({
        type:UsersActionEnum.SORT_BY_CITY
    }),
    fetchUsers: () => async (
      dispatch: AppDispatch
    ) => {
      try {
        dispatch(UsersActionCreators.setIsLoading(true));
        setTimeout(async () => {
          const response = await UserService.getUsers();         
          dispatch(UsersActionCreators.setUsers(response.data));          
          dispatch(UsersActionCreators.setIsLoading(false));
        }, 1000);
      } catch (e) {
        dispatch(
          UsersActionCreators.setError("При попытке соединения с сервером возникла ошибка ")
        );
      }
    },
    
  };
  