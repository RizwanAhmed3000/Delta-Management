// import { Carousel, Typography, Button } from "@material-tailwind/react";
 
// export default function ServicesCarousel() {
//   return (
//    <div className="w-[100%] overflow-hidden h-[500px]">
//      <Carousel className="rounded-xl">
//       <div className="relative h-full w-full">
//         <img
//           src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//           alt="image 1"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
//           <div className="w-3/4 text-center md:w-2/4">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//             >
//               The Beauty of Nature
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-12 opacity-80"
//             >
//               It is not so much for its beauty that the forest makes a claim
//               upon men&apos;s hearts, as for that subtle something, that quality
//               of air that emanation from old trees, that so wonderfully changes
//               and renews a weary spirit.
//             </Typography>
//             <div className="flex justify-center gap-2">
//               <Button size="lg" color="white">
//                 Explore
//               </Button>
//               <Button size="lg" color="white" variant="text">
//                 Gallery
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="relative h-full w-full">
//         <img
//           src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//           alt="image 1"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
//           <div className="w-3/4 text-center md:w-2/4">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//             >
//               The Beauty of Nature
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-12 opacity-80"
//             >
//               It is not so much for its beauty that the forest makes a claim
//               upon men&apos;s hearts, as for that subtle something, that quality
//               of air that emanation from old trees, that so wonderfully changes
//               and renews a weary spirit.
//             </Typography>
//             <div className="flex justify-center gap-2">
//               <Button size="lg" color="white">
//                 Explore
//               </Button>
//               <Button size="lg" color="white" variant="text">
//                 Gallery
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="relative h-full w-full">
//         <img
//           src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//           alt="image 1"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
//           <div className="w-3/4 text-center md:w-2/4">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//             >
//               The Beauty of Nature
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-12 opacity-80"
//             >
//               It is not so much for its beauty that the forest makes a claim
//               upon men&apos;s hearts, as for that subtle something, that quality
//               of air that emanation from old trees, that so wonderfully changes
//               and renews a weary spirit.
//             </Typography>
//             <div className="flex justify-center gap-2">
//               <Button size="lg" color="white">
//                 Explore
//               </Button>
//               <Button size="lg" color="white" variant="text">
//                 Gallery
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
    
//     </Carousel>
//    </div>
//   );
// }
import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
