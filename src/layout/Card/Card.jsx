const Card = ({ children }) => {
  return <div className="flex flex-1 justify-between py-6 px-4 m-5 rounded-lg border-2 border-black shadow-2xl bg-orange-400">{children}</div>;
};

export default Card