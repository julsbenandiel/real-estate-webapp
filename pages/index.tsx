import { createClient } from 'contentful';
import PropertyCardBare from '../components/PropertyCardBare';
import Banner from '../components/banner';
import { ContentModel, contentfulClient } from '../configs/index';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { faEnvelope, faHouseUser, faLocationArrow, faMapMarked, faMapMarker, faMobile, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeaturdProperties from '../components/FeaturedProperties';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import WhatWeDo from '../components/WhatWeDo';


export async function getServerSideProps() {

  const properties = await contentfulClient.getEntries({
    content_type: ContentModel.PROPERTY_LISTING
  });

  const banner = await contentfulClient.getEntries({
    content_type: ContentModel.CAROUSEL_BANNER
  });

  return {
    props: {
      total: properties.total,
      properties: properties.items,
      banners: banner.items
    }
  }
}

export default function Home({ total, properties, banners }) {

  const [activeSection, setActiveSection] = useState<string>('home'); 

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  useEffect(() => {
    document.body.style.zoom = "100%"
  }, [])
  
  return (
    <>
      <div className="pt-5 relative">
        <div
          style={{ height: '420px', zIndex: -1 }}  
          className="absolute header-v2 bg-blue w-full top-0"></div>

        <div className="flex items-center justify-end px-10">
          <p className="flex items-center text-sm text-white mr-8">
            <FontAwesomeIcon
              className="w-3 mr-1 text-white"
              icon={ faEnvelope }/>
            <a
              className="text-white" 
              href="mailto:info@property-wizard.com">info@property-wizard.com</a>
          </p>

          <p className="flex items-center text-sm text-white mr-8">
            <FontAwesomeIcon
              className="w-3 mr-1 text-white"
              icon={ faMapMarked }/>
            <span>Ortigas City, Manila</span>
          </p>

          <p className="flex items-center text-sm text-white">
            <FontAwesomeIcon
              className="w-3 mr-2 text-white"
              icon={ faUser }/>
            <span>+639 3689 20147</span>
          </p>
        </div>
        <div className="text-center pb-10 pt-5">
          <div className="flex items-start justify-center">
            <p className="uppercase playfair tracking-widest font-bold text-white">
              <span style={{ fontSize: '84px' }}>Reserve</span> 
            </p>
          </div>
          <p className="text-white test-justify">
            Lorem ipsum dolor sit ametesd do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-white test-justify">
            Lorem ipsum dolor sit amet dolor sit amet consectetur adipiscing elit
          </p>
        </div>
        <div className="maxwidth-1200 mx-auto">
          <Navbar 
            activeSection={ activeSection } 
            setActiveSection={ setActiveSection }  
          />
          <div className="bg-white shadow-lg p-4 mt-2 rounded">
            <FeaturdProperties 
              nextRef={ navigationNextRef }
              prevRef={ navigationPrevRef }
            />
            <div ref={navigationPrevRef} />
            <div ref={navigationNextRef} />
          </div>
        </div>
      </div>

      <WhatWeDo />

      <section>
        <div className="bg-white mt-10 p-5">
          <div className="maxwidth-1200 mx-auto">
            <p className="border-l-4 border-gold text-blue playfair mb-5 font-semibold text-3xl pl-3">
              Featured Properties
            </p>
          </div>
        </div>
        
        {/* max-w-screen-xl  */}
        <div className="maxwidth-1200 mx-auto">
          <div className="grid grid-cols-12 gap-5">
            { properties.map((property: any) => 
              <div
                key={ property.sys.id } 
                className="col-span-4">
                <PropertyCardBare
                  title={ property.fields.title }
                  slug={ property.fields.slug }
                  address={ property.fields.address }
                  description={ property.fields.shortDescription }
                  thumbnail={ property.fields.thumbnail.fields.file.url }
                  bedroom={ 2 }
                  floorArea={ 210 }
                  bathroom={ 1 }
                  price={ property.fields.price }
                  forSale={ property.fields.forSale }
                  forRent={ property.fields.forRent }
                  imageCount={ property.fields.images.length }
                />
              </div>
            )}
          </div>
        </div>
      </section>

    </>
  )
}

