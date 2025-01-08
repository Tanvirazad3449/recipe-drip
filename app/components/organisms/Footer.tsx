import { RegularText } from '../atoms/Texts';

export default function Footer() {
  return (
    <footer className="px-2 bg-white py-4 border-t-2  md:px-36 text-center mt-0">
        <RegularText className='font-mono' text="Made with ♥ by Tanvir Azad"/>
    </footer>
  );
}
