import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

const App = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-gray-900 bg-[url(./src/assets/bg-page.png)] bg-cover bg-fixed bg-center text-white">
      <Navbar />
      <ScrollToTop />
      <main className="flex min-h-screen flex-grow flex-col justify-center gap-y-10 p-10 pt-30">
        <Outlet />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
