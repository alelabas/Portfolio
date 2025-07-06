import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

const ProductCard = ({ product }: { product: Product }) => {
	return (
		<Card className=" flex flex-col w-34 md:w-38 h-72 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 m-2 p-2">
			<CardHeader className="flex items-center justify-center h-1/3">
				<img
					src={product.thumbnail ?? product.images[0]}
					alt={product.title}
					className="h-20"
				/>
			</CardHeader>
			<CardContent className="flex flex-col w-full gap-4 h-1/3">
				<CardTitle className="text-sm line-clamp-2">
					{product.title}
				</CardTitle>
				<h4 className="text-lg font-semibold">${product.price}</h4>
			</CardContent>
			<CardFooter className="h-1/3">
				<p className="text-green-400">
					{product.price < 50 ? "Llega mañana" : "Envío gratis"}
				</p>
			</CardFooter>
		</Card>
	)
}

export default ProductCard
