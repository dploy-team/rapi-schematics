import { createAction, props } from "@ngrx/store";
import { W3MetaPagination } from "@dploy-team/rapi-w3";

export const loadUsers = createAction(
    "[User] Load Users",
    props<{ params: any }>()
);

export const loadUsersSuccess = createAction(
    "[User] Load Users Success",
    props<{ data: any; pagination: W3MetaPagination }>()
);

export const createUser = createAction(
    "[User] Create User",
    props<{ User: any }>()
);

export const createUserSuccess = createAction(
    "[User] Create User Success",
    props<{ User: any }>()
);

export const updateUser = createAction(
    "[User] Update User",
    props<{id: number, User: any }>()
);

export const updateUserSuccess = createAction(
    "[User] Update User Success",
    props<{ User: any }>()
);

export const deleteUser = createAction(
    "[User] Delete User ",
    props<{ id: any }>()
);

export const deleteUserSuccess = createAction(
    "[User] Delete User Success",
    props<{ }>()
);

export const UserFailure = createAction(
    "[User] User Failure",
    props<{ error: any }>()
);
