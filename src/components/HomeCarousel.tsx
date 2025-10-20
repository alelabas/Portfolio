import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export const HomeCarousel = () => {
	const images = {
		1: "./src/assets/carousel/image1.jpg",
		2: "./src/assets/carousel/image2.jpg",
		3: "./src/assets/carousel/image3.jpg",
		4: "./src/assets/carousel/image4.jpg",
		5: "./src/assets/carousel/image5.jpg",
		6: "./src/assets/carousel/image6.jpg",
	}

	return (
		<div>
			<Carousel
				opts={{
					loop: true,
				}}
				plugins={[
					Autoplay({
						delay: 3000,
					}),
				]}
				className="w-full h-120 text-blue-500 font-bold rounded-2xl"
			>
				<CarouselContent>
					{Object.values(images).map((src, index) => (
						<CarouselItem key={index} className="">
							<img
								src={src}
								alt={`Carousel image ${index + 1}`}
								className="w-full h-120 object-contain"
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}
