import Layout from '../layout/Layout';
import { FaRegMeh } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-4">
        <span className="flex items-center text-cyan-600 font-bold mb-6 animate-bounce">
          <p className="text-8xl">4</p>
          <FaRegMeh className="text-7xl mx-4" />
          <p className="text-8xl">4</p>
        </span>
        <p className="text-3xl">Page Not Found!</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
