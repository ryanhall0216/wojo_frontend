import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import WojoGalleryItem from "./wojo-gallery-item"
import { styled } from "@mui/system";

const galleryValues = [
  "/src/assets/gallery/gallery1.png",
  "/src/assets/gallery/gallery2.png",
  "/src/assets/gallery/gallery3.png",
  "/src/assets/gallery/gallery4.png",
  "/src/assets/gallery/gallery5.png",
]

const sliderSettings = {
  dots: true,           // Show navigation dots
  infinite: true,       // Loop through images
  speed: 500,          // Transition speed (ms)
  slidesToShow: 5,     // Show 1 slide at a time
  slidesToScroll: 1,   // Scroll 1 slide at a time
  autoplay: true,      // Auto-slide
  autoplaySpeed: 3000, // Time per slide (ms)
  className: "center",
  centerMode: true,
  centerPadding: "0px",
};

const ButtonGroups = styled('div')({
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  marginTop: "74px"
});

const WojoGalleryContainer = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="slider-container" style={{textAlign: "center", marginTop: "80px"}}>
      <Slider ref={sliderRef} {...sliderSettings}>
        {
          galleryValues && galleryValues.map((item, index) => {
            return <WojoGalleryItem item={item} index={index}/>
          })
        }
      </Slider>
      <ButtonGroups>
        <button onClick={() => sliderRef.current?.slickPrev()}>
          <img src="/src/icons/prev.png" width={140} height={60}/>
        </button>
        <button onClick={() => sliderRef.current?.slickNext()}>
          <img src="/src/icons/next.png" width={140} height={60}/>
        </button>
      </ButtonGroups>
    </div>
  )
}

export default WojoGalleryContainer