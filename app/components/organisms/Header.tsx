"use client"
import Link from 'next/link';
import Logo from '../../svg/Logo';
import { useAuth } from '@/app/context/UserContext';

export default function Header() {
  const { user, loading } = useAuth();

  if (loading) {
    return <></>;
  }
  return (
    <header className="px-2 bg-white text-white py-4 sticky top-0 z-50 border-b-2  xl:px-36">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href={user ? "/profile" : "/auth"}>
            <button className="px-0 xl:px-2 text-xs xl:text-base text-slate-600 py-2 font-bold hover:text-slate-800">
              {user ? "PROFILE" : "SIGN IN"}
            </button>
          </Link>
          <Link href={"/search"}>
            <button className="px-0 xl:px-2 text-xs xl:text-base text-slate-600 py-2 font-bold hover:text-slate-800">
              SEARCH
            </button>
          </Link>
        </div>
      </div>
    </header >
  );
}
