import initialState from '../store/initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CITY_TO_QUEUE': {
      const citiesArray = [...state.citiesArray];
      citiesArray.push(action.city);
      return {
        ...state,
        citiesArray,
      };
    }
    case 'DELETE_CITY_FROM_QUEUE': {
      const citiesArray = [...state.citiesArray];
      citiesArray.shift();
      return {
        ...state,
        citiesArray,
      };
    }
    case 'UPDATE_LOADING_STATUS':
      return {
        ...state,
        loading: action.loading,
      };
    case 'DELETE_CITY': {
      const cities = [...state.cities];
      cities.splice(action.index, 1);
      return {
        ...state,
        cities,
        inputField: null,
      };
    }
    case 'FETCH_CITY_REQUEST': {
      const cities = [...state.cities];
      cities.push({});
      return {
        ...state,
        cities,
      };
    }
    case 'FETCH_CITY_ERROR': {
      const cities = [...state.cities];
      const i = cities.filter((item) => JSON.stringify(item) !== JSON.stringify({})).length;
      cities.splice(i, 1);
      return {
        ...state,
        cities,
      };
    }
    case 'FETCH_CITY_SUCCESS': {
      const cities = [...state.cities];
      const i = cities.filter((item) => JSON.stringify(item) !== JSON.stringify({})).length;
      cities[i] = action.city;
      return {
        ...state,
        cities,
      };
    }

    case 'ADD_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.message,
      };
    case 'CLEAR_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default reducer;
