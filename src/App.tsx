import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
	return (
		<div className="w-full overflow-hidden bg-gray-900 text-white min-h-screen flex flex-col bg-[url(./src/assets/bg-page.png)] bg-cover bg-fixed bg-center">
			<Navbar />
			<ScrollToTop />
			<main className="flex flex-col justify-center gap-y-10 flex-grow p-10 min-h-screen pt-30">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default App
