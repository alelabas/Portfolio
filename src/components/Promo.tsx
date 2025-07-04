import {
	BadgePercent,
	ChevronRight,
	CreditCard,
	TruckElectric,
} from "lucide-react"
import { Button } from "./ui/button"

const Promo = () => {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="flex flex-col items-start text-white bg-gray-700 rounded-t-lg justify-center p-4 w-[90%] md:w-[50%] md:justify-between md:flex-row md:items-center">
				<span className="flex items-center">
					<BadgePercent />
					<h2 className="border-l-2 border-black m-2 max-w-40 px-2">
						Suscribete desde $3499/mes
					</h2>
				</span>
				<Button className="hidden md:block md:bg-blue-500 hover:bg-blue-400">
					Suscribirse a ShopNow+
				</Button>
			</div>
			<div className="flex flex-col items-start gap-4 bg-gray-100  justify-center p-4 w-[90%] md:w-[50%] md:rounded-b-xl">
				<h2 className="text-lg">Ahorra en tus envios y compras</h2>
				<div className="flex flex-col items-start gap-4">
					<span className="flex items-center gap-2 max-w-80 md:max-w-fit text-md">
						<TruckElectric size={"40px"} />
						<p>Con ShopNow+ tenes envios mas rapidos y gratis</p>
					</span>
					<span className="flex items-center gap-2 max-w-80 md:max-w-fit text-md">
						<CreditCard size={"40px"} />
						<p>
							Aprovecha hasta 6 cuotas sin interes en tus
							productos
						</p>
					</span>
					<span className="flex items-center gap-2 max-w-80 md:max-w-fit text-md">
						<BadgePercent size={"40px"} />
						<p>
							10% de descuento en tu primera compra con ShopNow+
						</p>
					</span>
				</div>
			</div>
			<div className="w-[90%] bg-gray-200 md:hidden">
				<Button
					variant={"link"}
					className="text-blue-600 w-full p-4 m-1"
				>
					<span className="flex flex-row items-center justify-between w-full">
						<p>Suscribirse a ShopNow+</p>
						<ChevronRight />
					</span>
				</Button>
			</div>
		</div>
	)
}

export default Promo
