import { useState } from 'react';
import Signin from './signin/Signin';
import Signup from './signup/Signup';

const Login = () => {
  const [showSignin, setShowSignin] = useState(false);

  return (
    <div className="relative">
      <section
        className={`absolute duration-500 ${
          showSignin ? 'left-0' : '-left-96'
        }`}
      >
        <Signup onShow={() => setShowSignin(!showSignin)} />
      </section>

      <section
        className={`absolute duration-500 ${
          showSignin ? '-left-96' : 'left-0'
        }`}
      >
        <Signin onShow={() => setShowSignin(!showSignin)} />
      </section>
    </div>
  );
};

export default Login;
