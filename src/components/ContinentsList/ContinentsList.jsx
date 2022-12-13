import ContinentsListItem from './ContinentsListItem/ContinentsListItem';

const ContinentsList = () => {
  return (
    <div className='max-w-md w-full flex justify-center'>
      <ul className='w-3/4'>
        <ContinentsListItem />
      </ul>
    </div>
  );
};

export default ContinentsList;
