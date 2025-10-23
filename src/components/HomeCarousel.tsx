import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import firstPhoto from "@/assets/carousel/image1.jpg";
import secondPhoto from "@/assets/carousel/image2.jpg";
import thirdPhoto from "@/assets/carousel/image3.jpg";
import fourthPhoto from "@/assets/carousel/image4.jpg";
import fithPhoto from "@/assets/carousel/image5.jpg";
import sixthPhoto from "@/assets/carousel/image6.jpg";

export const HomeCarousel = () => {
  const images = [
    firstPhoto,
    secondPhoto,
    thirdPhoto,
    fourthPhoto,
    fithPhoto,
    sixthPhoto,
  ];

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
