import HeaderTitle from 'layout/Header/HeaderTitle/HeaderTitle.jsx';
import Navigation from 'layout/Navigation/Navigation';

const Header = () => {
  return (
    <header className='w-full fixed flex flex-col justify-center items-center p-4 py-6 border-b-4 border-black bg-orange-400'>
          <HeaderTitle />
          <Navigation />
    </header>
  );
};

export default Header;
