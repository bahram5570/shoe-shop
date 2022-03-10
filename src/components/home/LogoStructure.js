const LogoStructure = ({ name, image, color }) => {
  return (
    <div
      style={{ background: color }}
      className="
        flex 
        justify-center 
        items-center
        border-2
        border-black
        rounded-full 
        overflow-hidden
        mx-2
        w-32
        h-32
        md:w-48 
        md:h-48 
        p-6"
    >
      <img src={image} alt={name} className="w-full h-auto" />
    </div>
  );
};

export default LogoStructure;
