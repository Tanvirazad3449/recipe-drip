import Link from "next/link"
import { RegularText } from "@/app/components/ui/Texts"
import { Image } from "@/app/components/ui/Image"
import { Container } from "@/app/components/ui/Container"
import { DietType } from "@/app/types/domain/recipe/attributes"

interface GridItemProps {
  gridObj: DietType
}
const GridItemDiet: React.FC<GridItemProps> = ({ gridObj }) => {
  return (
    <Link href={`recipes/complexSearch?diet=${gridObj.dietName}`}>
      <Container className="w-full flex flex-col items-center justify-start pb-2 border border-brandColor-200 group">
        <Image size="large" imageSrc={`/diets/${gridObj.imageId}.jpg`} />
        <RegularText className="font-bold">{gridObj.dietName}</RegularText>
      </Container>
    </Link>
  )
}
export default GridItemDiet