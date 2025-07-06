import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { getProducts } from "@/utils/axiosService"
import { useEffect, useState } from "react"
import ProductCard from "./components/ProductCard"

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
		<CarouselItem
			key={product.id}
			className="basis-1/2 md:basis-1/4 lg:basis-1/6 "
		>
			<ProductCard product={product} />
		</CarouselItem>
	))

	console.log(products)

	return (
		<div className="flex flex-col items-center gap-y-8 p-4">
			{products && (
				<Carousel className="w-full max-w-xs md:max-w-2xl lg:max-w-7xl">
					<CarouselContent>{productsList}</CarouselContent>
					<CarouselNext />
					<CarouselPrevious />
				</Carousel>
			)}
			{error && (
				<p className="text-red-500">Error searching for products</p>
			)}
		</div>
	)
}

export default ProductsList
