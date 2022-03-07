const OrderProfile = ({ text, icon }) => {
  return (
    <span className="flex items-center text-lg lg:text-2xl my-4">
      {icon}
      <p className="ml-4">{text}</p>
    </span>
  );
};

export default OrderProfile;
