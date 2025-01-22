import Link from "next/link"
import capitalize from "@/app/utils/capitalize"
import { getIngredientsImageSrc } from "@/app/utils/getImageSrc"
import { Container } from "@/app/components/ui/Container"
import { ImageIcon } from "@/app/components/ui/ImageIcon"
import { RegularText } from "@/app/components/ui/Texts"
import { IngredientDetailType } from "@/app/types/domain/recipe/ingredients"

interface ListItemsProps {
  item: IngredientDetailType
}
const ListItemIngredient: React.FC<ListItemsProps> = ({ item }) => {  
    if(item.id !== -1){
      return (
        <Link href={`/recipes/complexSearch?includeIngredients=${item.nameClean}`}>
        <Container key={item.id} className="flex items-center justify-start p-2 mb-2 border border-brandColor-200 bg-white">
          <div className="w-1/12 pl-2">
            <ImageIcon iconSrc={getIngredientsImageSrc(item.image)} iconName={item.image} />
          </div>
          <div className="w-11/12 ml-2">
            <RegularText className="ml-2 font-bold">{capitalize(item.nameClean)}</RegularText>
            <RegularText className="ml-2 mt-0">{`${item.amount} ${item.unit}`}</RegularText>
          </div>
        </Container>
      </Link>
    )
  }
}
export default ListItemIngredient