import { useContinents } from 'graphql/hooks/useContinents';
import { Link } from 'react-router-dom';

import Error from 'layout/Error/Error';
import Spinner from 'layout/Spinner/Spinner';
import Card from 'layout/Card/Card';

const ContinentsListItem = () => {
  const { continents, error, loading } = useContinents();

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <Error text='Error occured, try to reload the page...'/>
    }
    
  return (
    <>
      {continents.map((continent) => (
        <Link key={continent.code} to={`/continent/${continent.code}`}>
          <Card>
            <li>{continent.name}</li>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ContinentsListItem;
