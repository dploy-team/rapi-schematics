import { Action, createReducer, on } from "@ngrx/store";
import { W3MetaPagination } from "@dploy-team/rapi-w3";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import {
  loadUsers,
  loadUsersSuccess,
  createUserSuccess,
  updateUserSuccess,
  deleteUserSuccess,
  UserFailure,
} from "./user.actions";

import { UserModel } from "./user.model"

export interface UserState extends EntityState<UserModel> {
  currentUser: UserModel;
  loading: boolean;
  search: any;
  pagination: W3MetaPagination;
}

export const UserAdapter: EntityAdapter<UserModel> = createEntityAdapter<
UserModel
>({
  sortComparer: false
});

export const initialState: UserState = UserAdapter.getInitialState({
  currentUser: null,
  loading: false,
  search: null,
  pagination: null
});

const UserReducer = createReducer(
  initialState,

  on(loadUsers, (state, action) => {
    return {
      ...state,
      loading: true,
      search: action.params
    };
  }),
  on(loadUsersSuccess, (state, action) => {
    return {
      ...state,
      entities: action.data,
      pagination: action.pagination,
      loading: false
    };
  }),
  on(createUserSuccess, (state, action) => {
    return {
      ...UserAdapter.addOne(action.User, state),
      loading: false
    };
  }),
  on(updateUserSuccess, (state, action) => {
    return {
      ...UserAdapter.updateOne(action.User, state)
    };
  }),
  on(deleteUserSuccess, (state, action) => {
    return {
      ...UserAdapter.removeOne(action.id, state),
      loading: false
    };
  }),
  on(UserFailure, (state, action) => {
    return {
      ...state
    };
  })
);

export function reducer(state: UserState | undefined, action: Action) {
  return UserReducer(state, action);
}
