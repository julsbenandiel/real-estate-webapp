import { createClient } from 'contentful';
import PropertyCardBare from '../components/PropertyCardBare';
import Banner from '../components/banner';
import { ContentModel, contentfulClient } from '../configs/index';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { faEnvelope, faHouseUser, faLocationArrow, faMapMarked, faMapMarker, faMobile, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeaturdProperties from '../components/FeaturedProperties';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import WhatWeDo from '../components/WhatWeDo';
import { PropertyListingType } from '../models/PropertyListing';


export async function getServerSideProps() {

  const properties = await contentfulClient.getEntries({
    content_type: ContentModel.PROPERTY_LISTING_V2
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

  console.log({ properties })

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const pagesRef = {
    homeRef: useRef(null),
    listingsRef: useRef(null),
    whatWeDoRef: useRef(null)
  }
  

  const scrollToElement = (ref: any) => {
    if (pagesRef[ref]) {
      pagesRef[ref].current.scrollIntoView({
        behavior: 'smooth',
      })    
    }
  }

  useEffect(() => {
    document.body.style.zoom = "100%"
  }, [])
  
  return (
    <>
      <div
        ref={ pagesRef.homeRef } 
        className="pt-5 relative">
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
            scrollToElement={ scrollToElement }
            activeSection={ activeSection } 
            setActiveSection={ setActiveSection }  
          />
          <div className="bg-white shadow-lg p-4 mt-2 rounded">
            <FeaturdProperties
              properties={ properties }
              nextRef={ navigationNextRef }
              prevRef={ navigationPrevRef }
            />
            <div ref={navigationPrevRef} />
            <div ref={navigationNextRef} />
          </div>
        </div>
      </div>

      <div className="mb-10 maxwidth-1200 mx-auto mt-10">
        <p className="border-l-4 border-gold text-blue playfair mb-5 font-semibold text-3xl pl-3">
          Latest Articles
        </p>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4">
            <div>
              <img
                className="rounded"
                width="420"
                height="240" 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <div className="flex justify-end -mt-1">
                <p className="text-gray opacity-75 text-xs mb-1">January 20, 2021</p>
              </div>
              <p 
                style={{ lineHeight: "22px" }}
                className="text-navy text-xl font-medium hover:text-blue cursor-pointer mb-2">10 Things to Consider When Getting a New House (2020 update)</p>

              <p className="text-sm opacity-75">aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ext aliquip ex ea</p>
              <p className="text-black hover:text-blue cursor-pointer italic">Continue Reading...</p>
              
            </div>
          </div>
          <div className="col-span-5">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-5">
                <img
                  style={{ height: "160px" }}
                  className="rounded object-cover" 
                  src="https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
              </div>
              <div className="col-span-7 flex flex-col justify-center">
                <p className="text-navy font-medium hover:text-blue cursor-pointer">Avoid Stress Talking to your Clients and Make a Sale!</p>
                <p className="text-gray opacity-75 text-xs mb-2">January 20, 2021</p>
                <p className="text-sm opacity-75 text-justify">aliqua. Ut enim ad minim veniam, ullamco laboris nisi ut aliquip ext aliquip ex ea</p>
                <p className="text-black hover:text-blue text-sm cursor-pointer italic">Continue Reading...</p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 mt-5">
              <div className="col-span-5">
                <img
                  style={{ height: "160px" }}
                  className="rounded object-cover" 
                  src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
              </div>
              <div className="col-span-7 flex flex-col justify-center">
                <p className="text-navy font-medium hover:text-blue cursor-pointer">Present to your Clients The Right Way (Updated)</p>
                <p className="text-gray opacity-75 text-xs mb-2">January 20, 2021</p>
                <p className="text-sm opacity-75 text-justify">aliqua. Ut enim ad minim veniam, ullamco laboris nisi ut aliquip ext aliquip ex ea</p>
                <p className="text-black hover:text-blue text-sm cursor-pointer italic">Continue Reading...</p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-12 gap-2 mb-3">
              <div className="col-span-5 bg-lightGray rounded h-full">

              </div>
              <div className="col-span-7 flex flex-col justify-center">
                <p className="text-navy font-medium hover:text-blue cursor-pointer">Ut enim ad minim</p>
                <p className="text-gray opacity-75 text-xs mb-2">January 20, 2021</p>
                <p className="text-sm opacity-75 text-justify">aliqua. Ut enim ad minim veniam</p>
                <p className="text-black hover:text-blue text-xs cursor-pointer italic">Continue Reading...</p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 mb-3">
              <div className="col-span-5 bg-lightGray rounded h-full">

              </div>
              <div className="col-span-7 flex flex-col justify-center">
                <p className="text-navy font-medium hover:text-blue cursor-pointer">Ut enim ad minim</p>
                <p className="text-gray opacity-75 text-xs mb-2">January 20, 2021</p>
                <p className="text-sm opacity-75 text-justify">aliqua. m, ullamco laboris</p>
                <p className="text-black hover:text-blue text-xs cursor-pointer italic">Continue Reading...</p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-5 bg-lightGray rounded h-full">

              </div>
              <div className="col-span-7 flex flex-col justify-center">
                <p className="text-navy font-medium hover:text-blue cursor-pointer">Ut enim ad minim</p>
                <p className="text-gray opacity-75 text-xs mb-2">January 20, 2021</p>
                <p className="text-sm opacity-75 text-justify">aliqua. Ut enim ad minim veniam, ullamco laboris</p>
                <p className="text-black hover:text-blue text-xs cursor-pointer italic">Continue Reading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={ pagesRef.whatWeDoRef }><WhatWeDo /></div>

      <section ref={ pagesRef.listingsRef }>
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
            { properties.map((property: any) =>  {
              const data: PropertyListingType = property.fields;
              return (
                <div
                  key={ property.sys.id } 
                  className="col-span-4">
                  <PropertyCardBare
                    title={ data.projectName }
                    slug={ data.slug }
                    address={ data.address }
                    description={ data.shortDescription }
                    thumbnail={ data.projectThumbnail.fields.file.url }
                    bedroom={ 2 }
                    floorArea={ 210 }
                    bathroom={ 1 }
                    price={ data.projectPrice }
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}

