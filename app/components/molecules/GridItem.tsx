import Link from "next/link"
import { Container } from "../atoms/Container"
import RecipeStats from "./RecipeStats"
import { RegularText } from "../atoms/Texts"
import { LargeIcon } from "../atoms/Icon"
import { LargeImage, MediumImage } from "../atoms/Image"
import { GridDataType } from "@/app/interfaces/GridDataType"

interface GridItemProps{
  gridObj: GridDataType
}
const GridItem: React.FC<GridItemProps> = ({ gridObj }) => {

  if (gridObj.dietName) {
    return (
      <Link href={`/recipe/${gridObj.id}`}>
        <Container className="w-full flex flex-col items-center justify-start pb-2">
          <LargeImage imageSrc={`/images/${gridObj.imageId}.jpg`} />
          <RegularText text={gridObj.dietName} />
        </Container>
      </Link>
    )
  }
  if (gridObj.mealTypeName) {
    return (
      <Link href={`/recipe/${gridObj.id}`}>
        <Container className="w-full flex flex-row items-center justify-start p-4">
          <LargeIcon iconSrc={`/icons/${gridObj.imageId}.png`} />
          <RegularText text={gridObj.mealTypeName} className="ml-2" />
        </Container>
      </Link>
    )
  }
  if (gridObj.title && gridObj.image) {
    return (
      <Link href={`/recipe/${gridObj.id}`}>
        <Container className="h-auto bg-white">
          <MediumImage imageSrc={gridObj.image} />
            <RegularText text={gridObj.title} className='p-2' />
        </Container>
      </Link>
    )
  }else{
    return (
      <Link href={`/recipe/${gridObj.id}`}>
        <Container className="h-auto bg-white">
          <MediumImage imageSrc={`https://img.spoonacular.com/recipes/${gridObj.id}-556x370.${gridObj.imageType}`} />
            <RegularText text={gridObj.title} className='p-2' />
        </Container>
      </Link>
    )
  }
  return <></>

}
export default GridItem