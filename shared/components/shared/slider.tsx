import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { Container, SliderCards } from ".";

interface Props {
  className?: string;
}

export const Slider: React.FC<Props> = ({ className }) => {
  return (
    // <Carousel>
    //   <CarouselContent className="-ml-2 md:-ml-4">
    //     <CarouselPrevious />
    //     <CarouselItem className="pl-2 md:pl-4">Hello</CarouselItem>
    //     <CarouselItem className="pl-2 md:pl-4">how</CarouselItem>
    //     <CarouselItem className="pl-2 md:pl-4">are you</CarouselItem>
    //     <CarouselNext />
    //   </CarouselContent>
    // </Carousel>
    <Container>
      <div className="flex gap-4 py-3 px-4 bg-white mt-[16px] mb-[20px] rounded-lg">
        <SliderCards />
        <SliderCards />
        <SliderCards />
        <SliderCards />
        <SliderCards />
        <SliderCards />
        <SliderCards />
        <SliderCards />
      </div>
    </Container>
  );
};
