import {
	Card,
	CardContent,
	CardDescription,
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
			<CardContent className="flex flex-col w-full gap-2">
				<CardTitle className="text-sm line-clamp-2">
					{product.title}
				</CardTitle>
				<CardDescription>${product.price}</CardDescription>
			</CardContent>
			<CardFooter>
				<p className="font-light text-sm text-green-400">
					Free shipping
				</p>
			</CardFooter>
		</Card>
	)
}

export default ProductCard
