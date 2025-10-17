import Footer from "./pages/Footer"
import Navbar from "./pages/Navbar"

const App = () => {
	return (
		<div className="w-full overflow-hidden">
			<Navbar />
			<main className="flex flex-col items-center justify-center gap-y-10">
				<Footer />
			</main>
		</div>
	)
}

export default App
