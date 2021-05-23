import React, { FC } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{ Navigation, Pagination, Autoplay } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { PropertyListingType } from '../models/PropertyListing';

interface FeaturdPropertiesProps {
  nextRef: any;
  prevRef: any;
  properties: any;
}

const FeaturdProperties: FC<FeaturdPropertiesProps> = ({ nextRef, prevRef, properties }) => {
 
  SwiperCore.use([ Pagination, Navigation, Autoplay ]);

  const houses = [
    {
      name: "Green Grass Residences",
      src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
      address: "Ortigas City, Metro Manila"
    },
    {
      name: "Phinma Likha Residences",
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      address: "Mandaluyong City, Metro Manila"
    },
    {
      name: "Playtech Condominiums",
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      address: "Quezon City, Metro Manila"
    },
    {
      name: "Smart Apartelles",
      src: "https://images.unsplash.com/photo-1567493756992-e2b6227cddc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      address: "Calamba City, Laguna"
    },
    {
      name: "Phinma Likha Residences",
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      address: "Mandaluyong City, Metro Manila"
    },
    {
      name: "Playtech Condominiums",
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      address: "Quezon City, Metro Manila"
    },
  ]

  return (
    <section className="relative">
      <Swiper
        autoplay={{ delay: 3000 }}
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
              <SwiperSlide key={ index }>
                <div className="cursor-pointer">
                  <Image
                    width={ data.projectLandingThumbnail.fields.file.details.image.width }
                    height={ data.projectLandingThumbnail.fields.file.details.image.height }
                    className="rounded"
                    alt={ data.projectLandingThumbnail.fields.title }
                    src={ `https://${data.projectLandingThumbnail.fields.file.url}` }
                  />
                
                  <div className="text-center">
                    <p className="text-lg text-black font-semibold">{ data.projectName }</p>
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