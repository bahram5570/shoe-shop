import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Signin from './signin/Signin';
import Signup from './signup/Signup';
import Profile from './profile/Profile';

const Login = () => {
  const userStatus = useSelector((state) => state.signinRedux).loggedUser;

  const [showComponent, setShowComponent] = useState(
    userStatus ? 'profile' : 'signin'
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (
      userStatus &&
      userStatus !== 'wrong' &&
      userStatus !== 'fail' &&
      showComponent === 'signin'
    ) {
      setShowComponent('profile');
      navigate('/Home');
    }
  }, [userStatus, showComponent, navigate]);

  return (
    <div className="flex">
      {showComponent === 'signin' && (
        <Signin onShow={() => setShowComponent('signup')} />
      )}
      {showComponent === 'signup' && (
        <Signup onShow={() => setShowComponent('signin')} />
      )}
      {showComponent === 'profile' && (
        <Profile onSignout={() => setShowComponent('signin')} />
      )}
    </div>
  );
};

export default Login;
