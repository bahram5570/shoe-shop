const SignupStructure = ({ type, name, dark, icon }) => {
  return (
    <div className="mb-6 w-full relative">
      {icon}

      <input
        type={type}
        name={name}
        placeholder={name}
        className={`
          w-full 
          pl-8 
          pr-2 
          py-1 
          rounded 
          outline-none 
          ${dark ? '' : 'shadow-loginShadow'}
          focus:bg-cyan-100 
          duration-300
        `}
      />
    </div>
  );
};

export default SignupStructure;
