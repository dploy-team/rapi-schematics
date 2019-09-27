import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map } from "rxjs/operators";
import * as <%= classify(name) %>Actions from "./<%= dasherize(name) %>.actions";
import { <%= classify(name) %>ApiService } from "./<%= dasherize(name) %>-api.service";

@Injectable()
export class <%= classify(name) %>Effects {
  constructor(private actions$: Actions, private api: <%= classify(name) %>ApiService) {}

  load<%= classify(pluralName) %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= classify(name) %>Actions.load<%= classify(pluralName) %>),
      concatMap(action =>
        this.api.search(action.params).pipe(
          map(data => {
            return <%= classify(name) %>Actions.load<%= classify(pluralName) %>Success({
              data: data,
              pagination: this.api.paginationData
            });
          }),
          catchError(error => of(<%= classify(name) %>Actions.<%= classify(name) %>Failure({ error })))
        )
      )
    )
  );

  find<%= classify(name) %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= classify(name) %>Actions.find<%= classify(name) %>),
      concatMap(action =>
        this.api.find(action.id, action.params).pipe(
          map(data => {
            return <%= classify(name) %>Actions.find<%= classify(name) %>Success({
                <%= classify(name) %>: data,
            });
          }),
          catchError(error => of(<%= classify(name) %>Actions.<%= classify(name) %>Failure({ error })))
        )
      )
    )
  );

  create<%= classify(name) %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= classify(name) %>Actions.create<%= classify(name) %>),
      concatMap(action =>
        this.api.save(action.<%= classify(name) %>).pipe(
          map(data => {
            return <%= classify(name) %>Actions.create<%= classify(name) %>Success({
                <%= classify(name) %>: data,
            });
          }),
          catchError(error => of(<%= classify(name) %>Actions.<%= classify(name) %>Failure({ error })))
        )
      )
    )
  );

  update<%= classify(name) %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= classify(name) %>Actions.update<%= classify(name) %>),
      concatMap(action =>
        this.api.update(action.id, action.<%= classify(name) %>).pipe(
          map(data => {
            return <%= classify(name) %>Actions.update<%= classify(name) %>Success({
                <%= classify(name) %>: data,
            });
          }),
          catchError(error => of(<%= classify(name) %>Actions.<%= classify(name) %>Failure({ error })))
        )
      )
    )
  );

  delete<%= classify(name) %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= classify(name) %>Actions.delete<%= classify(name) %>),
      concatMap(action =>
        this.api.remove(action.id).pipe(
          map(data => {
            return <%= classify(name) %>Actions.delete<%= classify(name) %>Success({id: action.id});
          }),
          catchError(error => of(<%= classify(name) %>Actions.<%= classify(name) %>Failure({ error })))
        )
      )
    )
  );

}
