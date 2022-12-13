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
        return <Error text='An error occured, try to reload the page...'/>
    }
    
  return (
    <>
      {continents.map((continent) => (
        <Link key={continent.code} to={`/continents/${continent.code}`} className='flex '>
          <Card>
            <li className='w-full flex justify-between items-center'>
              <span className='font-bold'>{continent.name}</span>
              <span className='font-bold'>{continent.code}</span>
            </li>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ContinentsListItem;
