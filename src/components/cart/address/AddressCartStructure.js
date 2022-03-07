const AddressCartStructure = ({ type, name, placeholder, formik }) => {
  return (
    <span className="relative w-full md:w-3/5">
      <p
        className={`absolute -top-2 right-0 text-redColor ${
          formik.touched[name] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {formik.errors[name]}
      </p>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="
            w-full 
            p-2 
            my-5 
            rounded 
            outline-none 
            md:text-lg 
            shadow-[0_0_8px_#333333] 
            focus:scale-105 duration-200"
        {...formik.getFieldProps(name)}
      />
    </span>
  );
};

export default AddressCartStructure;
