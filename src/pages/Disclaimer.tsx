import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { Package, PackageOpen, ShieldAlert } from "lucide-react"

const disclaimers = [
	{
		id: 1,
		title: "Compra seguro",
		description:
			"Tus datos están protegidos y tu compra es segura. No compartimos tu información con terceros.",
		icon: ShieldAlert,
	},
	{
		id: 2,
		title: "Envios gratis",
		description:
			"Disfruta de envíos gratis en compras mayores a $50. Recibe tus productos en la puerta de tu casa sin costo adicional.",
		icon: Package,
	},
	{
		id: 3,
		title: "Garantía de devolución",
		description:
			"Si no estás satisfecho con tu compra, puedes devolverla dentro de los 30 días. Tu satisfacción es nuestra prioridad.",
		icon: PackageOpen,
	},
]

const Disclaimer = () => {
	const disclaimerList = disclaimers.map((disclaimer) => (
		<CarouselItem
			key={disclaimer.id}
			className="flex flex-col items-center gap-2 p-4 border-b"
		>
			<disclaimer.icon className="h-6 w-6 text-blue-500" />
			<div className="text-center">
				<h3 className="font-semibold">{disclaimer.title}</h3>
				<p className="text-sm text-gray-600">
					{disclaimer.description}
				</p>
			</div>
		</CarouselItem>
	))

	return (
		<Carousel className="w-[70%] md:w-[90%] md:max-w-3xl mx-auto my-8">
			<CarouselContent>{disclaimerList}</CarouselContent>
			<CarouselNext />
			<CarouselPrevious />
		</Carousel>
	)
}

export default Disclaimer
