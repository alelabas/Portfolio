import { Home } from "./components/Home"
import Footer from "./pages/Footer"

import Navbar from "./pages/Navbar"

const App = () => {
	return (
		<div className="w-full overflow-hidden bg-gray-900 text-white min-h-screen flex flex-col bg-[url(./src/assets/bg-page.jpg)] bg-cover bg-fixed bg-center">
			<Navbar />
			<main className="flex flex-col justify-center gap-y-10 flex-grow p-10 min-h-screen pt-30">
				<Home />
			</main>
			<Footer />
		</div>
	)
}

export default App
