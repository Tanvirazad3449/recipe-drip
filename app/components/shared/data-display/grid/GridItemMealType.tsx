import Link from "next/link"
import { Container } from "@/app/components/ui/Container"
import { ImageIcon } from "@/app/components/ui/ImageIcon"
import { RegularText } from "@/app/components/ui/Texts"
import { MealType } from "@/app/types/domain/recipe/attributes"

interface GridItemProps {
  gridObj: MealType
}
const GridItemMealType: React.FC<GridItemProps> = ({ gridObj }) => {
  
    return (
      <Link href={`recipes/complexSearch?type=${gridObj.mealTypeName}`}>
        <Container className="w-full flex flex-row items-center justify-start p-4  border border-brandColor-200 group">
          <ImageIcon iconSrc={`/mealTypes/${gridObj.imageId}.png`} />
          <RegularText className="ml-2 font-bold">{gridObj.mealTypeName}</RegularText>
        </Container>
      </Link>
    )
  

}
export default GridItemMealType