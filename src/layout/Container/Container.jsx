const variantmap = {
  default: 'max-w-11/12 pb-10 mx-auto md:max-w-[40%]',
  countries: 'max-w-11/12 pb-10 mx-auto md:max-w-5xl md:w-11/12 2xl:max-w-7xl',
};

const Container = ({ children, variant = 'default' }) => {
  const variantClasses = variantmap[variant];

  return <div className={variantClasses}>{children}</div>;
};

export default Container