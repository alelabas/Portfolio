import { Card, CardContent } from "@/components/ui/card"
import product from "@/examples/product.json"

const ProductCardLarge = () => {
	return (
		<Card className="p-0 m-0 gap-0 h-[200px] w-[90%] md:w-[50%]">
			<CardContent className="flex flex-row m-0 p-0 h-full gap-4 items-center">
				<div>
					<img
						src={product.thumbnail}
						alt={product.title}
						className="h-40 w-full object-cover rounded-t-md"
					/>
				</div>
				<div className="flex flex-col items-start p-4 gap-4 max-w-[1200px]">
					<h3 className="text-lg font-medium">{product.title}</h3>
					<h4 className="text-xl font-semibold">${product.price}</h4>
					<p className="text-green-400">
						{product.price < 50
							? "Llega gratis mañana"
							: "Envío gratis"}
					</p>
				</div>
			</CardContent>
		</Card>
	)
}

export default ProductCardLarge
