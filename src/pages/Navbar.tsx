import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ShoppingCart } from "lucide-react"

const Navbar = () => {
	return (
		<header className="flex flex-col items-center gap-2 p-4 border-b-2 border-gray-200 z-10">
			<h1 className="font-bold text-xl">ShopNow</h1>
			<NavigationMenu viewport={false}>
				<NavigationMenuList>
					<NavigationMenuItem className="relative z-100">
						<NavigationMenuTrigger>
							Trigger one
						</NavigationMenuTrigger>
						<NavigationMenuContent className="absolute">
							<NavigationMenuLink>link one</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem className="relative z-100">
						<NavigationMenuTrigger>
							Trigger two
						</NavigationMenuTrigger>
						<NavigationMenuContent className="absolute">
							<NavigationMenuLink>link two</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem className="relative z-100">
						<NavigationMenuTrigger>
							Trigger three
						</NavigationMenuTrigger>
						<NavigationMenuContent className="absolute">
							<NavigationMenuLink>link three</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink>
							<ShoppingCart />
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	)
}

export default Navbar
