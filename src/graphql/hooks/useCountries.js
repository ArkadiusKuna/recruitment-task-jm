import { useQuery } from '@apollo/client';
import { COUNTRIES_QUERY } from 'graphql/queries/countries';
import { toast } from 'react-toastify';

export const useCountries = (continentCode) => {
  const { data, loading, error } = useQuery(COUNTRIES_QUERY, {
    variables: { continentCode },
  });

  if (error) {
    toast.error(error.message, { toastId: 'error' });
  }

  return {
    continents: data?.continent,
    countries: data?.continent.countries,
    loading,
    error,
  };
};
