import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map } from "rxjs/operators";
import * as UserActions from "./user.actions";
import { UserApiService } from "./user-api.service";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private api: UserApiService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(action =>
        this.api.search(action.params).pipe(
          map(data => {
            return UserActions.loadUsersSuccess({
              data: data,
              pagination: this.api.paginationData
            });
          }),
          catchError(error => of(UserActions.UserFailure({ error })))
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUser),
      concatMap(action =>
        this.api.create(action.User).pipe(
          map(data => {
            return UserActions.createUserSuccess({
                User: data,
            });
          }),
          catchError(error => of(UserActions.UserFailure({ error })))
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      concatMap(action =>
        this.api.update(action.id, action.User).pipe(
          map(data => {
            return UserActions.updateUserSuccess({
                User: data,
            });
          }),
          catchError(error => of(UserActions.UserFailure({ error })))
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      concatMap(action =>
        this.api.delete(action.id).pipe(
          map(data => {
            return UserActions.deleteUserSuccess({});
          }),
          catchError(error => of(UserActions.UserFailure({ error })))
        )
      )
    )
  );

}
