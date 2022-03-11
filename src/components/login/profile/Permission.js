const Permission = ({ message, onNo, onYes }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div
        className="
          px-8
          py-3
          md:py-4
          rounded-lg
          shadow-[0_0_5px_#000000]
          bg-neutral-200"
      >
        <p className="text-lg md:text-2xl">{message}</p>

        <div className="flex justify-around mt-3 md:mt-4">
          <button
            type="button"
            onClick={onNo}
            className="
              bg-redColor 
              w-16 
              md:w-20 
              py-0.5 
              rounded-md 
              text-white 
              md:xl"
          >
            No
          </button>

          <button
            type="button"
            onClick={onYes}
            className="
              bg-greenColor 
              w-16 
              md:w-20 
              py-0.5 
              rounded-md 
              text-white 
              md:xl"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Permission;
