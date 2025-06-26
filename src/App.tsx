import Navbar from "./pages/Navbar"
import ProductCard from "./Products/components/ProductCard"

const App = () => {
	return (
		<div className="w-full">
			<Navbar />
			<main className="flex items-center justify-center">
				<ProductCard />
			</main>
		</div>
	)
}

export default App
