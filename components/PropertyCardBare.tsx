import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHandPointRight, faImage, faMap } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight, faBath, faBed, faDollarSign, faMapMarkerAlt, faMapPin, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

interface PropertyCardBareProps {
  title: string;
  slug: string
  address: string;
  thumbnail: string;
  description: string;
  bedroom: number;
  bathroom: number;
  floorArea: number;
  price: number;
  forSale?: boolean;
  forRent?: boolean;
  imageCount?: number;
}

const PropertyCardBare: FC<PropertyCardBareProps> = props => {

  const { 
    title,
    slug,
    address,
    thumbnail,
    description,
    price,
    bathroom,
    bedroom,
    floorArea,
    forSale,
    forRent,
    imageCount
  } = props;

  return (
    <div className="">
      <Image
        className="rounded-tl-lg rounded-tr-lg"
        src={ `https:${thumbnail}` }
        alt={ `${title}-thumbnail` }
        width={450}
        height={250}
      />
      <p className="py-2 text-lg text-blue font-medium w-full truncate">{ title }</p>
      <p className="-mt-2 flex mb-4 items-center justify-start text-gray text-sm">
        <FontAwesomeIcon
          icon={ faMapMarkerAlt } 
          className="text-blue mr-2"
        />
        <span className="font-semibold">{ address }</span>
      </p>
      <p className="text-gray text-sm">{ description }</p>
      <p className="mt-6 text-gray text-sm">
        <span className="tracking-widest uppercase nunito-sans">Starting Price:</span>
        <span className="ml-2 font-semibold tracking-wide">₱{ price.toLocaleString() }</span>
      </p>
      <Link href={ `/listings/${slug}` }>
        <button className="px-5 py-2 text-sm mt-2 text-gray border border-lightBlack transition duration-150 hover:bg-black hover:text-white">
          <div className="flex items-center justify-center">
            <p className="uppercase text-xs">View Listing</p>
            <FontAwesomeIcon 
              className="w-2 ml-2"
              icon={ faAngleRight }
            />
          </div>
        </button>
      </Link>
    </div>
  )
}

export default PropertyCardBare;