import Link from "next/link"
import { Container } from "../atoms/Container"
import RecipeStats from "./RecipeStats"
import { RegularText, SmallText } from "../atoms/Texts"
import { LargeIcon } from "../atoms/Icon"
import { LargeImage, MediumImage } from "../atoms/Image"
import { GridDataType } from "@/app/interfaces/GridDataType"
import { CuisineType } from "@/app/interfaces/CuisineType"
import { Ingredient } from "@/app/interfaces/Ingredient"
import capitalize from "@/app/utils/capitalize"

interface p {
  listObj: CuisineType | Ingredient
}
const ListItems: React.FC<p> = ({ listObj }) => {

  if ("cuisineName" in listObj) {    
    return (
      <Link href={`/recipe/${listObj.id}`}>
        <Container key={listObj.id} className="flex items-center justify-start p-4 mb-2">
          <LargeIcon iconSrc={`/countries/${listObj.imageId}.png`} />
          <RegularText text={listObj.cuisineName} className="ml-2" />
        </Container>
      </Link>
    )
  }

  if ("name" in listObj) {    
    return (
      <Link href={`/recipe/${listObj.id}`}>
        <div key={listObj.id} className="bg-white hover:bg-slate-100 flex items-center justify-start p-4 border-b-2 border-b-gray-200">
          <LargeIcon iconSrc={`https://spoonacular.com/cdn/ingredients_100x100/${listObj.image}`} iconName={listObj.image}/>
          <div>

          <RegularText text={capitalize(listObj.name)} className="ml-2" />
          <SmallText text={listObj.original} className="ml-2"/>
          </div>
        </div>
      </Link>
    )
  }

  return null

}
export default ListItems