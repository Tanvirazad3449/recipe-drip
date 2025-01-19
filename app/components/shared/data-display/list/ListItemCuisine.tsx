import Link from "next/link"
import { Container } from "@/app/components/ui/Container"
import { ImageIcon } from "@/app/components/ui/ImageIcon"
import { RegularText } from "@/app/components/ui/Texts"
import { CuisineType } from "@/app/types/domain/recipe/attributes"

interface ListItemsProps {
  item: CuisineType
}
const ListItemCuisine: React.FC<ListItemsProps> = ({ item }) => {
    return (
      <Link href={`recipes/complexSearch?cuisine=${item.cuisineName}`}>
        <Container key={item.id} className="flex items-center justify-start p-4 mb-2 border border-brandColor-200 group">
          <ImageIcon iconSrc={`/countries/${item.imageId}.png`} />
          <RegularText className="ml-2 font-bold">{item.cuisineName} </RegularText>
        </Container>
      </Link>
    )
  }

export default ListItemCuisine