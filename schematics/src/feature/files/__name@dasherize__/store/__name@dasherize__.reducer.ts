import { Action, createReducer, on } from "@ngrx/store";
import { W3MetaPagination } from "@dploy-rapi/w3";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import {
  load<%= classify(pluralName) %>,
  load<%= classify(pluralName) %>Success,
  create<%= classify(name) %>Success,
  update<%= classify(name) %>Success,
  delete<%= classify(name) %>Success,
  <%= classify(name) %>Failure,
} from "./<%= dasherize(name) %>.actions";

import { <%= classify(name) %>Model } from "./<%= dasherize(name) %>.model"

export interface <%= classify(name) %>State extends EntityState<<%= classify(name) %>Model> {
  current<%= classify(name) %>: <%= classify(name) %>Model;
  loading: boolean;
  search: any;
  pagination: W3MetaPagination;
}

export const <%= classify(name) %>Adapter: EntityAdapter<<%= classify(name) %>Model> = createEntityAdapter<
<%= classify(name) %>Model
>({
  sortComparer: false
});

export const initialState: <%= classify(name) %>State = <%= classify(name) %>Adapter.getInitialState({
  current<%= classify(name) %>: null,
  loading: false,
  search: null,
  pagination: null
});

const <%= classify(name) %>Reducer = createReducer(
  initialState,

  on(load<%= classify(pluralName) %>, (state, action) => {
    return {
      ...state,
      loading: true,
      search: action.params
    };
  }),
  on(load<%= classify(pluralName) %>Success, (state, action) => {
    return {
      ...state,
      entities: action.data,
      pagination: action.pagination,
      loading: false
    };
  }),
  on(create<%= classify(name) %>Success, (state, action) => {
    return {
      ...<%= classify(name) %>Adapter.addOne(action.<%= classify(name) %>, state),
      loading: false
    };
  }),
  on(update<%= classify(name) %>Success, (state, action) => {
    return {
      ...<%= classify(name) %>Adapter.updateOne(action.<%= classify(name) %>, state)
    };
  }),
  on(delete<%= classify(name) %>Success, (state, action) => {
    return {
      ...<%= classify(name) %>Adapter.removeOne(action.id, state),
      loading: false
    };
  }),
  on(<%= classify(name) %>Failure, (state, action) => {
    return {
      ...state
    };
  })
);

export function reducer(state: <%= classify(name) %>State | undefined, action: Action) {
  return <%= classify(name) %>Reducer(state, action);
}
