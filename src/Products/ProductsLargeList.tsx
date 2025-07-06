import { getProducts } from "@/utils/axiosService"
import { useEffect, useState } from "react"
import ProductCardLarge from "./components/ProductCardLarge"

const ProductsList = () => {
	const [products, setProducts] = useState<Product[]>([] as Product[])
	const [error, setError] = useState()

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const data = await getProducts()
				setProducts(data)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				setError(error)
			}
		}
		fetchProducts()
	}, [])

	const productsList = products.map((product) => (
		<ProductCardLarge key={product.id} product={product} />
	))

	return (
		<div className="flex flex-col items-center gap-y-8 p-4 w-full">
			{productsList.slice(0, 5)}
			{error && (
				<p className="text-red-500">Error searching for products</p>
			)}
		</div>
	)
}

export default ProductsList
