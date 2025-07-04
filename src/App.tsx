import Promo from "./components/Promo"
import Navbar from "./pages/Navbar"
import ProductCard from "./Products/components/ProductCard"

const App = () => {
	return (
		<div className="w-full">
			<Navbar />
			<main className="flex flex-col items-center justify-center gap-y-10">
				<ProductCard />
				<Promo />
			</main>
		</div>
	)
}

export default App
