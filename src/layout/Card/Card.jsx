const Card = ({ children }) => {
  return (
    <div className='w-full h-full flex justify-between py-4 px-4 rounded-lg border-2 border-black shadow-2xl bg-orange-300'>
      {children}
    </div>
  );
};

export default Card