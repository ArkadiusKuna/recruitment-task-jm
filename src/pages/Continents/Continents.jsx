import { useContinents } from 'graphql/hooks/useContinents';

import Spinner from 'layout/Spinner/Spinner';
import Main from 'layout/Main/Main';
import Error from 'layout/Error/Error';
import Pagetitle from 'layout/PageTitle/PageTitle';
import ContinentsList from 'components/ContinentsList/ContinentsList';

const Continents = () => {
  const { continents, error, loading } = useContinents();

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
    <Main variant='continents'>
      <Pagetitle text='Choose a continent' />
      <ContinentsList continents={continents} />
    </Main>
  );
};

export default Continents;
