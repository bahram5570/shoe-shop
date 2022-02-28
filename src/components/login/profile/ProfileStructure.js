const ProfileStructure = ({ type, name, dark, icon, formik, isDisabled }) => {
  return (
    <div className="mt-8 w-full relative">
      <p
        className={`
        absolute
        -top-6
        right-0
        text-right 
        text-sm mb-1 
        text-redColor
        ${formik.touched[name] ? '' : 'opacity-0'}
      `}
      >
        {formik.errors[name]}
      </p>

      {icon}

      <input
        type={type}
        name={name}
        placeholder={name}
        {...formik.getFieldProps(name)}
        disabled={isDisabled}
        className={`
          w-full 
          pl-8 
          pr-2 
          py-1 
          rounded 
          outline-none 
          focus:bg-cyan-100 
          duration-300
          ${dark ? '' : 'shadow-loginShadow'}
        `}
      />
    </div>
  );
};

export default ProfileStructure;
