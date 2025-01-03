// app/recipe/[slug]/page.tsx
"use client"
import { usePathname } from 'next/navigation';

export default function Recipe() {
  const pathname = usePathname();

  // Extract the slug from the pathname
  const slug = pathname?.split('/')[2]; // assuming the structure is /recipe/[slug]

  return (
    <div>
      <p>Recipe page for: {slug}</p>
    </div>
  );
}
