"use client"
import Link from 'next/link';
import Logo from '../atoms/Logo';
import { useAuth } from '@/app/context/UserContext';

export default function Header() {
  const { user, loading } = useAuth();

  if (loading) {
    return <></>; 
  }
  return (
    <header className="px-2 bg-white text-white py-4 sticky top-0 z-50 border-b-2  md:px-36">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        <Link href="/">
          <Logo />
        </Link>
        {/* <p className='text-black'>{JSON.stringify(user?.email)}</p> */}
        {user ?
          <div className="flex items-center space-x-4">
            <Link href={"/profile"}>
              <button className="px-0 md:px-2 text-xs md:text-base text-slate-600 py-2 font-bold hover:text-slate-800">
                PROFILE
              </button>
            </Link>
            <Link href="/saved-recipes">
              <button className="px-0 md:px-2 text-xs md:text-base text-slate-600 py-2 font-bold hover:text-slate-800">
                COLLECTION
              </button>
            </Link>
            <button className="px-0 md:px-2 text-xs md:text-base text-slate-600 py-2 font-bold hover:text-slate-800">
            SEARCH
          </button> 

          </div>
          :
          <div className="flex items-center space-x-4">
            <Link href={"/sign-in"}>
              <button className="px-0 md:px-2 text-xs md:text-base text-slate-600 py-2 font-bold hover:text-slate-800">
                SIGN IN
              </button>
            </Link>
            <button className="px-0 md:px-2 text-xs md:text-base text-slate-600 py-2 font-bold hover:text-slate-800">
            SEARCH
          </button> 

          </div>
        }

    </div>
    </header >
  );
}
