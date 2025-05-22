import { RegularText } from '@/app/components/ui/Texts';

export default function Footer() {
  return (
    <footer className="px-2 bg-white py-4 border-t-2  xl:px-36 text-center mt-0">
      <a href="http://tanvirazad.com">
        <RegularText className='font-mono hover:text-brandColor'>Made with ♥ by Tanvir Azad</RegularText>
      </a>
    </footer>
  );
}
