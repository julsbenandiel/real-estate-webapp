import { FC } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faSearchLocation } from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {
  activeSection: string;
  scrollToElement: (el: any) => void;
  setActiveSection: (section: string) => void;
}

const Navbar: FC<NavbarProps> = (props) => {

  const { activeSection, setActiveSection, scrollToElement } = props;

  const onNavItemClicked = (item: string, ref: string) => {
    setActiveSection(item);
    scrollToElement(ref)
  }

  return (
    <div className="md:block sm:hidden block w-full border-b border-gold">
      <div className="w-full grid grid-cols-12">
        <div className="col-span-6">
          <ul className="flex items-center justify-start">
            <li 
              onClick={ () => onNavItemClicked('home', 'homeRef') }
              className={ cx("tracking-widest cursor-pointer p-5 text-sm nunito-sans transition duration-150 uppercase text-white font-medium", { 
                'text-gold font-bold border-b-2 border-gold': activeSection == 'home'
              }) }>
              Home
            </li>

            <li 
              onClick={ () => onNavItemClicked('about', 'whatWeDoRef') }
              className={ cx("tracking-widest cursor-pointer p-5 text-sm nunito-sans transition duration-150 uppercase text-white font-medium", { 
                'text-gold font-bold border-b-2 border-gold': activeSection == 'about'
              }) }>
              What We do
            </li>

            <li 
              onClick={ () => onNavItemClicked('listings', 'listingsRef') }
              className={ cx("tracking-widest cursor-pointer p-5 text-sm nunito-sans transition duration-150 uppercase text-white font-medium", { 
                'text-gold font-bold border-b-2 border-gold': activeSection == 'listings'
              }) }>
              Listings
            </li>
          </ul>
        </div>

        <div className="col-span-6">
          <div className="flex items-center h-full justify-end">
            <Link href="/contact">
              <button className="px-5 shadow-lg flex items-center font-medium text-md py-2 rounded bg-gold text-white">
                <FontAwesomeIcon 
                  className="w-3 mr-2"
                  icon={ faLocationArrow }
                />
                <div className="uppercase">Talk to property specialist</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Navbar;
