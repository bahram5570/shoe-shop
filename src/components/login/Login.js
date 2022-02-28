import { useState } from 'react';
import { useSelector } from 'react-redux';
import Signin from './signin/Signin';
import Signup from './signup/Signup';

const Login = () => {
  const [showSignin, setShowSignin] = useState(false);

  const loginStatus = useSelector((state) => state.loginStatus);

  // console.log(loginStatus)

  return (
    <div className="flex">
      {showSignin && <Signin onShow={() => setShowSignin(!showSignin)} />}
      {!showSignin && <Signup onShow={() => setShowSignin(!showSignin)} />}
    </div>
  );
};

export default Login;
