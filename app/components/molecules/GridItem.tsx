import Link from "next/link"
import { Container } from "../atoms/Container"
import { RegularText } from "../atoms/Texts"
import { LargeIcon } from "../atoms/Icons"
import { LargeImage, MediumImage } from "../atoms/Images"
import { GridDataType } from "@/app/interfaces/GridDataType"

interface GridItemProps {
  gridObj: GridDataType
}
const GridItem: React.FC<GridItemProps> = ({ gridObj }) => {
  // Diet Objects
  if (gridObj.dietName) {
    return (
      <Link href={`recipes/complexSearch?diet=${gridObj.dietName}`}>
        <Container className="w-full flex flex-col items-center justify-start pb-2 border border-brandColor-200">
          <LargeImage imageSrc={`/images/${gridObj.imageId}.jpg`} />
          <RegularText text={gridObj.dietName} className="font-bold" />
        </Container>
      </Link>
    )
  }
  // Meal Type Objects
  if (gridObj.mealTypeName) {
    return (
      <Link href={`recipes/complexSearch?type=${gridObj.mealTypeName}`}>
        <Container className="w-full flex flex-row items-center justify-start p-4  border border-brandColor-200">
          <LargeIcon iconSrc={`/icons/${gridObj.imageId}.png`} />
          <RegularText text={gridObj.mealTypeName} className="ml-2 font-bold" />
        </Container>
      </Link>
    )
  }
  // Recipe Objects with image
  if (gridObj.title && gridObj.image) {
    return (
      <Link href={`/recipe/${gridObj.id}`}>
        <Container className="h-auto">
          <MediumImage imageSrc={gridObj.image} />
          <RegularText text={gridObj.title} className='p-2' />
        </Container>
      </Link>
    )
  } else {
    // Recipe Objects without images but needs fetching
    return (
      <Link href={`/recipe/${gridObj.id}`}>
        <Container className="h-auto">
          <MediumImage imageSrc={`https://img.spoonacular.com/recipes/${gridObj.id}-556x370.${gridObj.imageType}`} />
          <RegularText text={gridObj.title} className='p-2' />
        </Container>
      </Link>
    )
  }
  return <></>

}
export default GridItem