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
          <RegularText className="ml-2 font-bold">{listObj.cuisineName} </RegularText>
        </Container>
      </Link>
    )
  }

  if ("name" in listObj) {
    if(listObj.id !== -1){
      // Ingredient Object
      return (
        <Link href={`/recipes/findByIngredients?ingredients=${listObj.nameClean}`}>
        <Container key={listObj.id} className="flex items-center justify-start p-2 mb-2 border border-brandColor-200 bg-white">
          <div className="w-1/12 pl-2">
            <LargeIcon iconSrc={getIngredientsImageSrc(listObj.image)} iconName={listObj.image} />
          </div>
          <div className="w-11/12 ml-2">
            <RegularText className="ml-2 font-bold">{capitalize(listObj.nameClean)}</RegularText>
            <RegularText className="ml-2 mt-0">{`${listObj.amount} ${listObj.unit}`}</RegularText>
          </div>
          {/* <p>{JSON.stringify(listObj)}</p> */}
        </Container>
      </Link>
    )
  }
  }

  return null

}
export default ListItems