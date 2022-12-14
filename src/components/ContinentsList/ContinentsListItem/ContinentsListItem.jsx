import { Link } from 'react-router-dom';

import Card from 'layout/Card/Card';

const ContinentsListItem = ({ continent }) => {
  return (
    <li className='w-full'>
      <Link
        key={continent.code}
        to={`/continents/${continent.code}`}
        className='flex justify-center'
      >
        <Card variant='continent'>
          <div className='w-full flex justify-between items-center'>
            <span className='font-bold'>{continent.name}</span>
            <span className='font-bold'>{continent.code}</span>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default ContinentsListItem;
