import ProfileOrdersStructure from './ProfileOrdersStructure';
import { FaRegWindowClose } from 'react-icons/fa';

const ProfileOrders = ({ dark, items, onClose }) => {
  const closeHandler = (e) => {
    if (e.target.id === 'profileWindow' || e.target.id === 'profileClose') {
      onClose();
    }
  };

  return (
    <div
      id="profileWindow"
      onClick={closeHandler}
      className="
        absolute 
        bg-[#00000099] 
        top-0 
        left-0 
        right-0 
        bottom-0 
        flex 
        justify-center 
        items-center"
    >
      <div
        className={`
          w-full
          sm:w-10/12
          mx-4
          sm:mx-0
          h-5/6
          sm:h-2/3
          overflow-y-auto
          px-4
          sm:px-6
          rounded-md
          sm:rounded-xl
          ${dark ? 'bg-neutral-600 text-white' : 'bg-white'}
        `}
      >
        <span className="flex justify-end my-3">
          <button
            className="text-redColor text-2xl sm:text-4xl"
            type="button"
            onClick={closeHandler}
          >
            <FaRegWindowClose id="profileClose" />
          </button>
        </span>
        <ProfileOrdersStructure dark={dark} items={items} />
      </div>
    </div>
  );
};

export default ProfileOrders;
