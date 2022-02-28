import { useDispatch } from 'react-redux';
import { userSignout } from '../../redux/slices/signinSlice';
import {
  FaUserCircle,
  FaRegEdit,
  FaSignOutAlt,
  FaCheck,
  FaRegTimesCircle,
} from 'react-icons/fa';

const ProfileButtons = ({
  dark,
  data,
  onSignout,
  isEditing,
  onEditing,
  onApplyEdit,
}) => {
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(userSignout());
    onSignout();
  };

  return (
    <div
      className="
        flex 
        justify-between 
        items-center 
        border-b-2
        border-neutral-400"
    >
      <div
        className={`
            flex 
            items-center 
            text-3xl
            ${dark ? 'text-white' : ''}
            `}
      >
        <FaUserCircle />
        <h2 className="ml-2">{data.Username}</h2>
      </div>

      {/* Logout */}
      {!isEditing && (
        <div>
          <button
            type="button"
            className="outline-none"
            onClick={() => onEditing()}
          >
            {<FaRegEdit className="w-7 h-auto text-greenColor" />}
          </button>

          <button
            type="button"
            onClick={() => signoutHandler()}
            className="outline-none"
          >
            {
              <FaSignOutAlt
                className={`
                    w-7 
                    h-auto 
                    ml-4
                    ${dark ? 'text-white' : ''}
                `}
              />
            }
          </button>
        </div>
      )}

      {/* Edit buttons */}
      {isEditing && (
        <div>
          <button
            type="button"
            onClick={() => onApplyEdit()}
            className="outline-none"
          >
            {<FaCheck className="w-7 h-auto text-greenColor" />}
          </button>

          <button
            type="button"
            onClick={() => onEditing()}
            className="outline-none"
          >
            {<FaRegTimesCircle className="w-7 h-auto ml-4 text-redColor" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileButtons;
