import Link from "next/link"

import { getRecipeImageSrc } from "@/app/utils/getImageSrc"
import { Recipe } from "@/app/types/domain/recipe/recipe"
import { Container } from "@/app/components/ui/Container"
import { Image } from "@/app/components/ui/Image"
import { RegularText } from "@/app/components/ui/Texts"

interface GridItemProps {
  gridObj: Recipe
}
const GridItemRecipe: React.FC<GridItemProps> = ({ gridObj }) => {
  
    return (
      <Link href={`/recipe/${gridObj.id}`}>
        <Container className="h-auto group hover:bg-transparent">
          <Image size="medium" imageSrc={gridObj.image || getRecipeImageSrc(gridObj.id, gridObj.imageType)} />
          <RegularText className='py-1'>{gridObj.title}</RegularText>
          </Container>
      </Link>
    )
  

}
export default GridItemRecipe