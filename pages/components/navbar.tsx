import { FC } from 'react';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props) => {
  return (
    <div className="px-10 flex items-center justify-between py-5 border-b border-lightGray">
      <p className="text-gray border px-10 py-3 font-bold border-lightGray rounded-lg">
        Logo
      </p>
      <ul className="flex items-center justify-end">
        <li className="px-5 font-medium text-gray text-lg"><Link href="/">Home</Link></li>
        <li className="px-5 font-medium text-gray text-lg"><Link href="/about">About</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;
