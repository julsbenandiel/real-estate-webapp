import { FC } from 'react';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props) => {

  return (
    <div className="px-10 flex items-center justify-between py-5 border-b border-lightGray">
      <div className="flex items-center justify-start">
        <p className="text-gray border px-10 py-3 font-bold border-lightGray rounded-lg">
          Logo
        </p>
        <ul className="flex items-center justify-start ml-10">
          <li 
            className="tracking-widest px-5 text-sm nunito-sans transition duration-150 hover:text-lightBlack uppercase text-black font-medium"><Link href="/">Home</Link></li>

          <li 
            className="tracking-widest px-5 text-sm nunito-sans transition duration-150 hover:text-lightBlack uppercase text-black font-medium"><Link href="/about">About</Link></li>

          <li 
            className="tracking-widest px-5 text-sm nunito-sans transition duration-150 hover:text-lightBlack uppercase text-black font-medium"><Link href="/listings">Listings</Link></li>

          <li 
            className="tracking-widest px-5 text-sm nunito-sans transition duration-150 hover:text-lightBlack uppercase text-black font-medium"><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <a href="mailto:info@property-wizard.com">info@property-wizard.com</a>
    </div>
  )
}

export default Navbar;
