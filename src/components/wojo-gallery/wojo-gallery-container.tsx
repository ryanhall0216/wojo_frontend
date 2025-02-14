import WojoGalleryItem from "./wojo-gallery-item"

const galleryValues = [
  "/src/assets/gallery/gallery1.png",
  "/src/assets/gallery/gallery2.png",
  "/src/assets/gallery/gallery3.png",
  "/src/assets/gallery/gallery4.png",
  "/src/assets/gallery/gallery5.png",
]

const WojoGalleryContainer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-[32px]">
        {
          galleryValues && galleryValues.map((item, index) => {
            return <WojoGalleryItem item={item} index={index}/>
          })
        }
      </div>
      <button style={{marginTop: '74px'}}>
        <img src="/src/icons/next.png"/>
      </button>
    </div>
  )
}

export default WojoGalleryContainer