import {
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaTelegram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 absolute bottom-0 w-full text-slate-50 py-2 flex justify-center items-center">
      <p className="w-fit">All rights reserved.</p>
      <span className="flex">
        <a href="https://github.com/bahram5570" target="_blank">
          <FaGithub className="w-6 h-auto sm:mx-2" />
        </a>
        <a href="https://bahramsa70@gmail.com" target="_blank">
          <FaEnvelope className="w-6 h-auto sm:mx-2" />
        </a>
        <a href="https://wa.me/9389951034" target="_blank">
          <FaWhatsapp className="w-6 h-auto sm:mx-2" />
        </a>
        <a href="https://t.me/Bahramsa70" target="_blank">
          <FaTelegram className="w-6 h-auto sm:mx-2" />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
