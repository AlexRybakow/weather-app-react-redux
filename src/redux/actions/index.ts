const updateLoadingStatus = (loading: string) => ({
  type: 'UPDATE_LOADING_STATUS',
  loading,
});

const cityDelete = (index: number) => ({
  type: 'DELETE_CITY',
  index,
});

const cityRequest = () => ({
  type: 'FETCH_CITY_REQUEST',
});

const cityLoaded = (city: string) => ({
  type: 'FETCH_CITY_SUCCESS',
  city,
});

const cityError = (city = '') => ({
  type: 'FETCH_CITY_ERROR',
  city,
});

const addCityToStorage = (city: string) => ({
  type: 'ADD_CITY_TO_QUEUE',
  city,
});

const deleteCityFromQueue = () => ({
  type: 'DELETE_CITY_FROM_QUEUE',
});

const addErrorMessage = (message: string) => ({
  type: 'ADD_ERROR_MESSAGE',
  message,
});

const clearErrorMessage = () => ({
  type: 'CLEAR_ERROR_MESSAGE',
});

export {
  cityRequest,
  cityLoaded,
  cityDelete,
  updateLoadingStatus,
  cityError,
  addCityToStorage,
  deleteCityFromQueue,
  addErrorMessage,
  clearErrorMessage,
};
