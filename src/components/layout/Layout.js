import Headers from './Headers';

const Layout = (props) => {
  return (
    <div className="min-h-screen relative pb-10">
      <Headers />

      <main className="min-h-full pt-16 p-5 sm:p-6">{props.children}</main>

      <footer className="bg-zinc-800 absolute bottom-0 w-full text-center text-slate-50 py-2">
        All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
