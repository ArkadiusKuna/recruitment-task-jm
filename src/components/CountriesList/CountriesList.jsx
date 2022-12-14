import Container from 'layout/Container/Container';
import CountriesListItem from './CountriesListItem/CountriesListItem';

const CountriesList = ({ countries }) => {
  return (
    <Container>
      <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3'>
        <CountriesListItem countries={countries} />
      </ul>
    </Container>
  );
};

export default CountriesList;
