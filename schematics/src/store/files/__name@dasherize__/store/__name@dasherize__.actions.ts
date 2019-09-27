import { createAction, props } from "@ngrx/store";
import { W3MetaPagination } from "@dploy-team/rapi-w3";

export const load<%= classify(pluralName) %> = createAction(
    "[<%= classify(name) %>] Load <%= classify(pluralName) %>",
    props<{ params: any }>()
);

export const load<%= classify(pluralName) %>Success = createAction(
    "[<%= classify(name) %>] Load <%= classify(pluralName) %> Success",
    props<{ data: any; pagination: W3MetaPagination }>()
);

export const find<%= classify(name) %> = createAction(
    "[<%= classify(name) %>] Find <%= classify(name) %>",
    props<{ id: number, params: any }>()
);

export const find<%= classify(name) %>Success = createAction(
    "[<%= classify(name) %>] Find <%= classify(name) %> Success",
    props<{ <%= classify(name) %>: any }>()
);

export const create<%= classify(name) %> = createAction(
    "[<%= classify(name) %>] Create <%= classify(name) %>",
    props<{ <%= classify(name) %>: any }>()
);

export const create<%= classify(name) %>Success = createAction(
    "[<%= classify(name) %>] Create <%= classify(name) %> Success",
    props<{ <%= classify(name) %>: any }>()
);

export const update<%= classify(name) %> = createAction(
    "[<%= classify(name) %>] Update <%= classify(name) %>",
    props<{id: number, <%= classify(name) %>: any }>()
);

export const update<%= classify(name) %>Success = createAction(
    "[<%= classify(name) %>] Update <%= classify(name) %> Success",
    props<{ <%= classify(name) %>: any }>()
);

export const delete<%= classify(name) %> = createAction(
    "[<%= classify(name) %>] Delete <%= classify(name) %> ",
    props<{ id: any }>()
);

export const delete<%= classify(name) %>Success = createAction(
    "[<%= classify(name) %>] Delete <%= classify(name) %> Success",
    props<{ id: number }>()
);

export const <%= classify(name) %>Failure = createAction(
    "[<%= classify(name) %>] <%= classify(name) %> Failure",
    props<{ error: any }>()
);
