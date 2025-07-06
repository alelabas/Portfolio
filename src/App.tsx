import Promo from "./components/Promo"
import Disclaimer from "./pages/Disclaimer"
import Footer from "./pages/Footer"
import Navbar from "./pages/Navbar"
import ProductsLargeList from "./Products/ProductsLargeList"
import ProductsList from "./Products/ProductsList"

const App = () => {
	return (
		<div className="w-full overflow-hidden">
			<Navbar />
			<main className="flex flex-col items-center justify-center gap-y-10">
				<ProductsList />
				<Promo />
				<ProductsLargeList />
				<Disclaimer />
				<Footer />
			</main>
		</div>
	)
}

export default App
