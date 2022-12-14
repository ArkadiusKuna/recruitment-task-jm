import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className='w-full mt-4'>
      <ul className='flex justify-center text-xl font-semibold uppercase space-x-6 sm:space-x-28'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'text-white underline underline-offset-8 decoration-black'
              : 'text-black/75'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/continents'
          className={({ isActive }) =>
            isActive
              ? 'text-white underline underline-offset-8 decoration-black'
              : 'text-black/75'
          }
        >
          Continents
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
