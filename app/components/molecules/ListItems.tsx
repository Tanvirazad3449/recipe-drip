import Link from "next/link"
import { Container } from "../atoms/Container"
import { RegularText } from "../atoms/Texts"
import { LargeIcon } from "../atoms/Icons"
import { CuisineType } from "@/app/interfaces/CuisineType"
import { Ingredient } from "@/app/interfaces/Ingredient"
import capitalize from "@/app/utils/capitalize"
import { getIngredientsImageSrc } from "@/app/utils/getImageSrc"

interface p {
  listObj: CuisineType | Ingredient
}
const ListItems: React.FC<p> = ({ listObj }) => {

  if ("cuisineName" in listObj) {
    // Cuisine Object
    return (
      <Link href={`recipes/complexSearch?cuisine=${listObj.cuisineName}`}>
        <Container key={listObj.id} className="flex items-center justify-start p-4 mb-2 border border-brandColor-200 group">
          <LargeIcon iconSrc={`/countries/${listObj.imageId}.png`} />
          <RegularText text={listObj.cuisineName} className="ml-2 font-bold" />
        </Container>
      </Link>
    )
  }

  if ("name" in listObj) {
    // Ingredient Object
    // https://api.spoonacular.com/recipes/findByIngredients/ingredients=apple
    return (
      <Link href={`/recipes/findByIngredients?ingredients=${listObj.nameClean}`}>
        <Container key={listObj.id} className="flex items-center justify-start p-2 mb-2 border border-brandColor-200 bg-white">
          <div className="w-1/12 pl-2">
            <LargeIcon iconSrc={getIngredientsImageSrc(listObj.image)} iconName={listObj.image} />
          </div>
          <div className="w-11/12 ml-2">
            <RegularText text={capitalize(listObj.nameClean)} className="ml-2 font-bold" />
            <RegularText text={`${listObj.amount} ${listObj.unit}`} className="ml-2 mt-0" />
          </div>
        </Container>
      </Link>
    )
  }

  return null

}
export default ListItems