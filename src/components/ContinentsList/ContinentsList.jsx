import Container from 'layout/Container/Container';
import ContinentsListItem from './ContinentsListItem/ContinentsListItem';

const ContinentsList = ({ continents }) => {
  return (
    <Container>
      <ul className='flex flex-col items-center justify-center gap-4'>
        {continents.map((continent) => (
          <ContinentsListItem key={continent.code} continent={continent} />
        ))}
      </ul>
    </Container>
  );
};

export default ContinentsList;
