import { styled } from "@mui/system";

const GalleryItemContainer = styled('div')({
  border: "1px solid #000000",
  borderRadius: "10.86px",
  boxShadow: "5px 7px #000000",
  padding: "27px 22px",
  backgroundColor: "#FFDB1F",
  margin: "0 15px"
});

const GalleryItem = styled('div')({
  border: "2px solid #000000",
  borderRadius: "10px",
  padding: "33px 27px",
  backgroundColor: "#FFFFFF"
});

const WojoGalleryItem = ({item, index}: {item: string, index: number}) => {
  return (
    <GalleryItemContainer key={index}>
      <GalleryItem>
        <img src={item}/>
      </GalleryItem>
    </GalleryItemContainer>
  )
}

export default WojoGalleryItem