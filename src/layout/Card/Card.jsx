const variantMap = {
  continent:
    'w-full h-full flex justify-between py-4 px-4 rounded-lg border-2 border-black shadow-2xl bg-orange-300',
  countries:
    'w-full h-full flex justify-between py-4 px-4 rounded-lg border-2 border-black shadow-2xl bg-orange-300',
};

const Card = ({ children, variant }) => {
  const variantClasses = variantMap[variant];

  return <div className={variantClasses}>{children}</div>;
};

export default Card