import { FC } from 'react';
import Link from 'next/link';

interface NormalNavbarProps {}

const NormalNavbar:FC<NormalNavbarProps> = props => {
  return (
    <section className="bg-white border-b border-lightGray">
      <div className="maxwidth-1200 mx-auto py-5">
        <div className="flex items-center justify-start">

          <p className="playfair text-xl text-blue tracking-widest uppercase font-bold">Reserve</p>

          <div className="ml-10">
            <Link href="/">
              <a 
                className="text-dark"
                href="">Home</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NormalNavbar;