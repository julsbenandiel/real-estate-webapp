import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface FooterProps {}

const Footer: FC<FooterProps> = (props) => {

  return (
    <div
      style={{ padding: "3.5rem 0" }} 
      className="w-full bg-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-8">
          <div className="col-span-2">
            <p className="mb-3 text-white text-2xl">Logo</p>
            <p className="mb-3 text-lightGray text-sm opacity-75">(049) 502-1234</p>          
            <p className="mb-5 text-lightGray text-sm opacity-75">14 Main Road, Makati City 1013</p>
            <div className="flex items-center justify-start">
              <FontAwesomeIcon 
                className="transition duration-100 cursor-pointer opacity-75 hover:opacity-100 text-blank w-5 text-white mr-3"
                icon={ faFacebook }
              />
              <FontAwesomeIcon 
                className="transition duration-100 cursor-pointer opacity-75 hover:opacity-100 text-blank w-5 text-white mr-3"
                icon={ faTwitter }
              />
              <FontAwesomeIcon 
                className="transition duration-100 cursor-pointer opacity-75 hover:opacity-100 text-blank w-5 text-white mr-3"
                icon={ faInstagram }
              />
            </div>
          </div>
          <div className="col-span-2">
            <p className="text-xl playfair text-white mb-3">Featured Listings</p>
            <p className="text-lightGray text-sm uppercase cursor-pointer opacity-75 hover:opacity-100 tracking-wide mb-3">Listing 1</p>
            <p className="text-lightGray text-sm uppercase cursor-pointer opacity-75 hover:opacity-100 tracking-wide mb-3">Listing 2</p>
            <p className="text-lightGray text-sm uppercase cursor-pointer opacity-75 hover:opacity-100 tracking-wide mb-3">Listing 3</p>
            <p className="text-lightGray text-sm uppercase cursor-pointer opacity-75 hover:opacity-100 tracking-wide mb-3">Listing 4</p>
            <p className="text-lightGray text-sm uppercase cursor-pointer opacity-75 hover:opacity-100 tracking-wide mb-3">Listing 5</p>
          </div>
          <div className="col-span-2">
            <div>
              <p className="text-xl playfair text-white mb-3">Makati Office</p>
              <p className="text-lightGray text-sm opacity-75">Monday – Saturday 8AM – 10PM</p>
              <p className="text-lightGray text-sm opacity-75">Sunday 11AM – 5PM</p>
            </div>
            <div className="mt-7">
              <p className="text-xl playfair text-white mb-3">Other Branch Schedule</p>
              <p className="text-lightGray text-sm opacity-75">Monday – Saturday 8AM – 10PM</p>
              <p className="text-lightGray text-sm opacity-75">Sunday 11AM – 5PM</p>
            </div>
          </div>
          <div className="col-span-2">
            <p className="text-xl playfair text-white mb-3">Sign up</p>
            <div className="flex">
              <input 
                style={{ height: "40px" }}
                placeholder="Your email"
                type="text"
                className="border text-white border-lightGray w-full px-5 bg-black"/>
              <button className="bg-lightGray px-3">
                <FontAwesomeIcon 
                  className="text-black w-3"
                  icon={ faAngleRight }
                />
              </button>
            </div>
            <p className="text-sm text-lightGray opacity-50 italic mt-1">We promise not to spam you</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
