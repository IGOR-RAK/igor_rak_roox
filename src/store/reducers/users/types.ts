import { IUser } from "../../../models/IUser";

export interface UsersState {  
  users: IUser[];
  isLoading: boolean;
  error: string;
}

export enum UsersActionEnum {
  SET_ERROR = "SET_ERROR",
  SET_USERS = "SET_USERS",
  SET_IS_LOADING = "SET_IS_LOADING",
  SORT_BY_COMPANY = "SORT_BY_COMPANY",
  SORT_BY_CITY = "SORT_BY_CITY"
}


export interface SetErrorAction {
  type: UsersActionEnum.SET_ERROR;
  payload: string;
}
export interface SetUsersAction {
  type: UsersActionEnum.SET_USERS;
  payload: IUser[];
}
export interface SetIsLoadingAction {
  type: UsersActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SortByCompanyAction {
    type: UsersActionEnum.SORT_BY_COMPANY;
  
  }

export interface SortByCityAction {
    type: UsersActionEnum.SORT_BY_CITY;
}



export type UsersActions =  
  | SetUsersAction
  | SetErrorAction
  | SetIsLoadingAction
  | SortByCompanyAction
  | SortByCityAction