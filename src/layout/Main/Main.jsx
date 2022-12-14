const variantMap = {
  default:
    'min-h-screen pt-[128px] flex flex-col justify-center items-center bg-gray-400',
  antarctica: 'min-h-screen pt-[128px] bg-gray-400',
  error: 'pt-0 min-h-screen flex flex-col justify-center items-center bg-gray-400',
};

const Main = ({ children, variant='default' }) => {
  const variantClasses = variantMap[variant];

  return <main className={variantClasses}>{children}</main>;
};

export default Main