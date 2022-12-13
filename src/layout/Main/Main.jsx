const variantMap = {
  default: 'min-h-screen flex justify-center items-center bg-gray-400'
}

const Main = ({ children, variant='default' }) => {
  const variantClasses = variantMap[variant];

  return <main className={variantClasses}>{children}</main>;
};

export default Main