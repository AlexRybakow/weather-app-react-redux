interface StorageProps {
  cities: any[];
}

export const saveToLocalStorage = ({ cities }: StorageProps) => {
  const citiesList = cities.map((city) => ({ city: city.city }));
  localStorage.setItem('state', JSON.stringify({ cities: citiesList }));
};

export const getLocalState = () => {
  const state = JSON.parse(localStorage.getItem('state')!);
  if (state === null) return null;
  const citiesArray = state.cities.map((city: { city: React.ReactElement }) => city.city);
  return { citiesArray };
};
