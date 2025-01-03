import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-2 bg-white text-white py-4 sticky top-0 z-50 border-b-2  md:px-36">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        {/* Logo Placeholder */}
        <div className="text-xl font-bold">
          <img src="./l.svg" alt="" className='h-10 w-32 md:h-16 md:w-64' />
        </div>

        {/* Navigation and Search Button */}
        <div className="flex items-center space-x-4">
          {/* Link to About Page */}
          

          <button className="px-0 md:px-2 text-xs md:text-base text-slate-600 py-2 rounded-md font-bold hover:text-slate-800">
            SIGN UP
          </button>
          {/* Search Button */}
          <button className="px-0 md:px-2 text-xs md:text-base text-slate-600 py-2 rounded-md font-bold hover:text-slate-800">
            SEARCH
          </button>
        </div>
      </div>
    </header>
  );
}
