export const SET_CITY = 'SET_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

export interface SetCityAction {
  type: typeof SET_CITY;
  payload: string;
}

export interface RemoveCityAction {
  type: typeof REMOVE_CITY;
  payload: number;
}

export type CityAction = SetCityAction | RemoveCityAction;
