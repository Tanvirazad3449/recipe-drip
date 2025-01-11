import Link from "next/link"
import { Container } from "../atoms/Container"
import { RegularText } from "../atoms/Texts"
import { LargeIcon } from "../atoms/Icons"
import { LargeImage, MediumImage } from "../atoms/Images"
import { GridDataType } from "@/app/interfaces/GridDataType"
import { getRecipeImageSrc } from "@/app/utils/getImageSrc"

interface GridItemProps {
  gridObj: GridDataType
}
const GridItem: React.FC<GridItemProps> = ({ gridObj }) => {
  

  // Diet Objects
  if (gridObj.dietName) {
    return (
      <Link href={`recipes/complexSearch?diet=${gridObj.dietName}`}>
        <Container className="w-full flex flex-col items-center justify-start pb-2 border border-brandColor-200 group">
          <LargeImage imageSrc={`/diets/${gridObj.imageId}.jpg`} />
          <RegularText className="font-bold">{gridObj.dietName}</RegularText>
        </Container>
      </Link>
    )
  }
  // Meal Type Objects
  if (gridObj.mealTypeName) {
    return (
      <Link href={`recipes/complexSearch?type=${gridObj.mealTypeName}`}>
        <Container className="w-full flex flex-row items-center justify-start p-4  border border-brandColor-200 group">
          <LargeIcon iconSrc={`/mealTypes/${gridObj.imageId}.png`} />
          <RegularText className="ml-2 font-bold">{gridObj.mealTypeName}</RegularText>
        </Container>
      </Link>
    )
  }
  // Recipe Objects
  if (gridObj.title) {
    return (
      <Link href={`/recipe/${gridObj.id}`}>
        <Container className="h-auto group hover:bg-transparent">
          <MediumImage imageSrc={gridObj.image || getRecipeImageSrc(gridObj.id, gridObj.imageType)} />
          <RegularText className='py-1'>{gridObj.title}</RegularText>
          </Container>
      </Link>
    )
  } 
  return <></>

}
export default GridItem