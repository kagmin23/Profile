import { AppProps } from 'next/app';
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-xl">
        <Sidebar />
      </div>
      <div className="col-span-12 bg-white lg:col-span-9 rounded-xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
