import { createSelector, createFeatureSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";
import { EntitiesArrWithPaginationType } from "@dploy-rapi/piece";
import { UserModel } from "./user.model";

export const getUserState = createFeatureSelector<UserState>("User");

export const getModules/users = createSelector(
  getUserState,
  (state: UserState) => state.entities
);

export const getModules/usersArr = createSelector(
  getUser,
  entities => Object.keys(entities).map(id => entities[id])
);

export const getParamsSearchUser = createSelector(
  getUserState,
  (state: UserState) => state.search
);

export const getIsLoadingUser = createSelector(
  getUserState,
  (state: UserState) => state.loading
);

export const getModules/usersArrWithPagination = createSelector(
  getUserState,
  getModules/usersArr,
  (state, entities) => {
    return {
      pagination: state.pagination,
      entities,
      search: state.search,
      loading: state.loading
    } as EntitiesArrWithPaginationType<UserModel>;
  }
);
