import Promo from "./components/Promo"
import Disclaimer from "./pages/Disclaimer"
import Navbar from "./pages/Navbar"
import ProductCard from "./Products/components/ProductCard"
import ProductCardLarge from "./Products/components/ProductCardLarge"

const App = () => {
	return (
		<div className="w-full">
			<Navbar />
			<main className="flex flex-col items-center justify-center gap-y-10">
				<ProductCard />
				<Promo />
				<ProductCardLarge />
				<Disclaimer />
			</main>
		</div>
	)
}

export default App
