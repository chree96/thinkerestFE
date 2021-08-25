import {Action as ReduxAction} from 'redux';
import {ActionsObservable, StateObservable} from 'redux-observable';
import {Observable} from 'rxjs';

export interface ActionWithoutPayload<T extends string = string>
  extends ReduxAction<T> {}

export interface ActionWithPayload<P, T extends string = string>
  extends ReduxAction<T> {
  payload: P;
}

export type Action<T extends string = string> =
  | ActionWithoutPayload<T>
  | ActionWithPayload<any, T>;

export type ActionWithoutPayloadCreator<T extends string = string> =
  () => Action<T>;

export type ActionWithFixedPayloadCreator<
  P,
  T extends string = string,
> = () => ActionWithPayload<P, T>;

export type ActionWithPayloadCreator<P, T extends string = string> = (
  payload: P,
) => ActionWithPayload<P, T>;

export type ActionCreator<T extends string = string> =
  | ActionWithoutPayloadCreator<T>
  | ActionWithPayloadCreator<any, T>;

export type ActionHandlersDictionary<S, T extends string = string> = {
  [type in T]?: (state: S, payload?: any) => S;
};

export interface Epic<
  T extends string = string,
  T1 extends T = T,
  T2 extends T = T,
  Input extends Action<T1> = Action<T1>,
  Output extends Action<T2> = Action<T2>,
  State = any,
  Dependencies = any,
> {
  (
    action$: ActionsObservable<Input>,
    state$: StateObservable<State>,
    dependencies: Dependencies,
  ): Observable<Output>;
}

export type EpicWithPayload<
  P extends any = any,
  T extends string = string,
  T1 extends T = T,
  T2 extends T = T,
  Input extends ActionWithPayload<P, T1> = ActionWithPayload<P, T1>,
  Output extends Action<T2> = Action<T2>,
  State = any,
  Dependencies = any,
> = Epic<T, T1, T2, Input, Output, State, Dependencies>;
