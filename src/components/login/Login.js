import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (
      userStatus &&
      userStatus !== 'wrong' &&
      userStatus !== 'fail' &&
      showComponent === 'signin'
    ) {
      if (searchParams.get('status') === 'checkout') {
        setShowComponent('profile');
        navigate('/Cart?status=checkedin');
      } else {
        setShowComponent('profile');
        navigate('/Home');
      }
    }
  }, [userStatus, showComponent, searchParams, navigate]);

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
