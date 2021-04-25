import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHandPointRight, faImage, faMap } from '@fortawesome/free-regular-svg-icons';
import { faBath, faBed, faDollarSign, faMapMarkerAlt, faMapPin, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import cx from 'classnames';

interface PropertyCardProps {
  title: string;
  address: string;
  thumbnail: string;
  description: string;
  bedroom: number;
  bathroom: number;
  floorArea: number;
  price: number;
  forSale: boolean;
  forRent: boolean;
  imageCount: number;
}

const PropertyCard: FC<PropertyCardProps> = props => {

  const { 
    title,
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
    <div className="border rounded-tl-2xl rounded-tr-2xl rounded-bl-lg rounded-br-lg border-lightGray">
      <div className="p-2 relative">

        <div
          style={{ width: "96%" }}
          className="flex justify-between items-center absolute top-4 px-2">
          <div className="flex bg-white items-center justify-start card-list-images-count">
            <FontAwesomeIcon
              className="mr-2 w-3 text-orange" 
              icon={ faImage }
            />
            <span className="font-medium text-orange text-13">{ imageCount }</span>
          </div>

          <div className={ cx("flex items-center justify-start card-list-images-count", {
            'bg-blue': forSale,
            'bg-green': forRent
          }) }>
            <span className="font-medium text-white text-13">
            { forSale ? "For Sale" : null }
            { forRent ? "For Rent" : null }
            </span>
          </div>
        </div>

        <Image
          className="rounded-tl-xl rounded-tr-xl rounded-br-lg rounded-bl-lg"
          src={ `https:${thumbnail}` }
          alt="Picture of the author"
          width={450}
          height={250}
        />
      </div>
      <div className="px-5 pb-5 mt-2">
        <p className="text-gray font-medium text-xl mb-2">{ title }</p>
        <p className="text-gray -mt-2 mb-3 flex items-center justify-start">
          <FontAwesomeIcon
            className="w-3 text-green"
            icon={ faMapMarkerAlt }
          />
          <span className="ml-2">{ address }</span>
        </p>
        <p className="text-gray">{ description }</p>

        <section className="mt-5">
       
          <div className="grid grid-cols-12 gap-5 mt-3">
            <div className="col-span-4">
              <p className="text-gray flex items-center justify-start">
                <FontAwesomeIcon
                  className="w-5 text-green"
                  icon={ faDollarSign }
                />
                <span className="ml-2 font-semibold">Php{ price.toLocaleString() }</span>
              </p>
            </div>
            <div className="col-span-4">
              <p className="text-gray flex items-center justify-start">
                <FontAwesomeIcon
                  className="w-5 text-green"
                  icon={ faBed }
                />
                <span className="ml-2 font-semibold">{ bedroom }</span>
              </p>
            </div>
            <div className="col-span-4">
              <p className="text-gray flex items-center justify-start">
                <FontAwesomeIcon
                  className="w-5 text-green"
                  icon={ faBath }
                />
                <span className="ml-2 font-semibold">{ bathroom }</span>
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default PropertyCard;