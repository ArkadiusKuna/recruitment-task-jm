import { useContinents } from 'graphql/hooks/useContinents';
import { Link } from 'react-router-dom';

import Card from 'layout/Card/Card';

const ContinentsListItem = () => {
  const { continents, error, loading } = useContinents();

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error</p>
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
