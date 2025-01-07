import { Inter } from 'next/font/google'

interface BrandLineProps {
    imgPath: string;
}

export default function BrandLine({imgPath}:BrandLineProps){
    return(
        <div className="flex justify-center pt-4 pb-2 md:pt-6 md:pb-4">
            <img src={imgPath} alt="brand line" className='h-8 md:h-16 w-auto' />

        </div>
    )
}