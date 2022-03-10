const HomeStructure = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} className="w-auto h-44 lg:h-60 rounded-md" />
      <p className="text-2xl">{name}</p>
    </div>
  );
};

export default HomeStructure;
