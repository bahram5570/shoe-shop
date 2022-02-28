import { useState } from 'react';
import Signin from './signin/Signin';
import Signup from './signup/Signup';

const Login = () => {
  const [showSignin, setShowSignin] = useState(true);

  return (
    <div className="flex">
      {showSignin && <Signin onShow={() => setShowSignin(!showSignin)} />}
      {!showSignin && <Signup onShow={() => setShowSignin(!showSignin)} />}
    </div>
  );
};

export default Login;
