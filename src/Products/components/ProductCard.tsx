import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import product from "@/examples/product.json"

const ProductCard = () => {
	return (
		<Card className="w-38 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
			<CardHeader className="flex items-center justify-center">
				<img
					src={product.thumbnail}
					alt={product.title}
					className="h-20"
				/>
			</CardHeader>
			<CardContent className="flex flex-col w-full gap-4">
				<CardTitle className="text-sm line-clamp-2">
					{product.title}
				</CardTitle>
				<h4 className="text-lg font-semibold">${product.price}</h4>
			</CardContent>
			<CardFooter>
				<p className="text-green-400">
					{product.price < 50
						? "Llega gratis mañana"
						: "Envío gratis"}
				</p>
			</CardFooter>
		</Card>
	)
}

export default ProductCard
