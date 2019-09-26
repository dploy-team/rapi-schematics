import { createSelector, createFeatureSelector } from "@ngrx/store";
import { <%= classify(name) %>State } from "./<%= dasherize(name) %>.reducer";
import { EntitiesArrWithPaginationType } from "@dploy-rapi/piece";
import { <%= classify(name) %>Model } from "./<%= dasherize(name) %>.model";

export const get<%= classify(name) %>State = createFeatureSelector<<%= classify(name) %>State>("<%= classify(name) %>");

export const get<%= classify(pluralName) %> = createSelector(
  get<%= classify(name) %>State,
  (state: <%= classify(name) %>State) => state.entities
);

export const get<%= classify(pluralName) %>Arr = createSelector(
  get<%= classify(name) %>,
  entities => Object.keys(entities).map(id => entities[id])
);

export const getParamsSearch<%= classify(name) %> = createSelector(
  get<%= classify(name) %>State,
  (state: <%= classify(name) %>State) => state.search
);

export const getIsLoading<%= classify(name) %> = createSelector(
  get<%= classify(name) %>State,
  (state: <%= classify(name) %>State) => state.loading
);

export const get<%= classify(pluralName) %>ArrWithPagination = createSelector(
  get<%= classify(name) %>State,
  get<%= classify(pluralName) %>Arr,
  (state, entities) => {
    return {
      pagination: state.pagination,
      entities,
      search: state.search,
      loading: state.loading
    } as EntitiesArrWithPaginationType<<%= classify(name) %>Model>;
  }
);
