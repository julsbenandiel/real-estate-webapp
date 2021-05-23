import React, { FC } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{ Navigation, Pagination, Autoplay } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PropertyListingType } from '../models/PropertyListing';

interface FeaturdPropertiesProps {
  nextRef: any;
  prevRef: any;
  properties: any;
}

const FeaturdProperties: FC<FeaturdPropertiesProps> = ({ nextRef, prevRef, properties }) => {
 
  SwiperCore.use([ Pagination, Navigation, Autoplay ]);

  return (
    <section className="relative">
      <Swiper
        autoplay={{ delay: 6000 }}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        { properties.map((property: any, index: number) => {
            const data: PropertyListingType = property.fields;
            return (
              <SwiperSlide 
                style={{ width:  data.projectLandingThumbnail.fields.file.details.image.width }}
                key={ index }>
                <div className="">
                  <img
                    width={ data.projectLandingThumbnail.fields.file.details.image.width }
                    height={ data.projectLandingThumbnail.fields.file.details.image.height }
                    className="rounded"
                    alt={ data.projectLandingThumbnail.fields.title }
                    src={ `https://${data.projectLandingThumbnail.fields.file.url}` }
                  />
                
                  <div className="text-center">
                    <Link href={ `/listings/${data.slug}` }>
                      <p className="transition duration-150 hover:text-blue cursor-pointer text-lg text-black font-semibold">{ data.projectName }</p>
                    </Link>

                    <p className="text-lightBlack opacity-75 -mt-1 flex items-center justify-center text-sm">
                      <FontAwesomeIcon 
                        icon={ faMapMarkerAlt }
                        className="mr-2 w-2"
                      />
                      <span>{ data.address }</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          }) }
      </Swiper>
    </section>
  )
}

export default FeaturdProperties;