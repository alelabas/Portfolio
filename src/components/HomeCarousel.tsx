import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const HomeCarousel = () => {
  const images = {
    1: "@/assets/carousel/image1.jpg",
    2: "@/assets/carousel/image2.jpg",
    3: "@/assets/carousel/image3.jpg",
    4: "@/assets/carousel/image4.jpg",
    5: "@/assets/carousel/image5.jpg",
    6: "@/assets/carousel/image6.jpg",
  };

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
        className="h-120 w-full font-bold text-blue-500"
      >
        <CarouselContent>
          {Object.values(images).map((src, index) => (
            <CarouselItem key={index}>
              <img
                src={src}
                alt={`Carousel image ${index + 1}`}
                className="h-120 w-full object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
