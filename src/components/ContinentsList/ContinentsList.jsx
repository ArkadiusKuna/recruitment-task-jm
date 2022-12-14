import Container from 'layout/Container/Container';
import ContinentsListItem from './ContinentsListItem/ContinentsListItem';

const ContinentsList = ({ continents }) => {
  return (
    <Container>
      <ul className='flex flex-col items-center justify-center gap-4'>
        <ContinentsListItem continents={continents} />
      </ul>
    </Container>
  );
};

export default ContinentsList;
