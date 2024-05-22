import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <div className="grid grid-cols-12 gap-6 px-5 px-48 lg:px-48 my-14">
          <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2x1">
            <Sidebar/>
            </div>
          <div className="col-span-12 bg-white lg:col-span-3 rounded-2x1">
              <Component {...pageProps} />
          </div>
      </div>
  )
}

export default MyApp;