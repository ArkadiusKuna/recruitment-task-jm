import Card from 'layout/Card/Card';

const CountriesListItem = ({ country }) => {
  console.log(country);
  return (
    <li>
      <Card variant='countries'>
        <div className='flex flex-col flex-1 flex-wrap justify-center items-center space-y-2'>
          <span className='mr-3 text-xl text-center font-bold'>
            {country.name}
          </span>
          <span className='text-7xl'>{country.emoji}</span>
          <span className='w-full text-center text-xl'>
            Official language: {country.languages[0]?.name ?? 'none'}
          </span>
        </div>
      </Card>
    </li>
  );
};

export default CountriesListItem;
