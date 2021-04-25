import { FC } from 'react';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props) => {

  return (
    <div className="px-10 flex items-center justify-start py-5 border-b border-lightGray">
      <p className="text-gray border px-10 py-3 font-bold border-lightGray rounded-lg">
        Logo
      </p>
      <ul className="flex items-center justify-start ml-10">
        <li 
          style={{ letterSpacing: "1px" }}
          className="px-5 text-sm nunito-sans transition duration-150 hover:text-lightBlack uppercase text-black font-medium"><Link href="/">Home</Link></li>

        <li
          style={{ letterSpacing: "1px" }} 
          className="px-5 text-sm nunito-sans transition duration-150 hover:text-lightBlack uppercase text-black font-medium"><Link href="/about">About</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;
