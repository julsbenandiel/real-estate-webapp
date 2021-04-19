import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHandPointRight, faMap } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faMapPin } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface PropertyCardProps {
  title: string;
  address: string;
  thumbnail: string;
  description: string;
}

const PropertyCard: FC<PropertyCardProps> = props => {

  const { 
    title,
    address,
    thumbnail,
    description
  } = props;

  return (
    <div className="border rounded-lg border-lightGray">
      <Image
        src={ `https:${thumbnail}` }
        alt="Picture of the author"
        width={450}
        height={220}
      />
      <div className="px-5 pb-5 mt-2">
        <p className="text-gray font-medium text-xl mb-2">{ title }</p>
        <p className="text-gray">{ description }</p>

        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-6">
            <p className="text-gray flex items-center justify-start">
              <FontAwesomeIcon
                className="w-3"
                icon={ faMapMarkerAlt }
              />
              <span className="ml-2">{ address }</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PropertyCard;