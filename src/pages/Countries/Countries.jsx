import { Link, useParams } from 'react-router-dom';
import { useCountries } from 'graphql/hooks/useCountries';

import Spinner from 'layout/Spinner/Spinner';
import Error from 'layout/Error/Error';
import Main from 'layout/Main/Main';
import PageTitle from 'layout/PageTitle/PageTitle';
import CountriesList from 'components/CountriesList/CountriesList';

const Countries = () => {
  const { code } = useParams();
  const { continents ,countries, loading, error } = useCountries(code);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Main variant='error'>
        <Error text='An error occured, try to reload the page...' />
      </Main>
    );
  }

  return (
    <Main variant='antarctica'>
      <PageTitle text={`Countries in ${continents.name}`} />
      <Link to='/continents' className='w-full block text-center text-xl text-black font-bold uppercase tracking-widest underline underline-offset-4 mb-10'>Go back</Link>
      <CountriesList countries={countries} />
    </Main>
  );
};

export default Countries;
