import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import Image from 'next/image';
import { useState } from 'react';
import NormalNavbar from '../../components/NormalNavbar';
import { contentfulClient, ContentModel } from '../../configs';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faBorderStyle, faMapMarkerAlt, faRuler, faSquare } from '@fortawesome/free-solid-svg-icons';
import { PropertyListingType } from '../../models/PropertyListing';
import { useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export async function getServerSideProps({ query }) {
  const options = {
    content_type: ContentModel.PROPERTY_LISTING_V2,
    'fields.slug': query.slug
  }

  const res = await contentfulClient.getEntries(options);

  return {
    props: {
      property: res.items[0]
    }
  }
}

interface TabOptionType {
  name: string;
  value: string
}


const TAB_OPTIONS = [
  { name: "Listing Overview", value: "listing-overview" },
  { name: "Developer", value: "developer" },
  { name: "Amenities", value: "amenities" },
  { name: "Unit Features", value: "unit-features" },
  { name: "Project/Building Features", value: "project-features" },
  { name: "Gallery", value: "gallery" }
]


const ListingDetailsPage = ({ property }) => {

  const data: PropertyListingType = property.fields;

  console.log({ property })

  const [gallery, setGallery] = useState<Array<string>>([]);
  const [activeTab, setActiveTab] = useState<TabOptionType>(TAB_OPTIONS[0]);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [lightBoxIsOpen, setLightBoxIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (data.gallery) {
      const image_urls: Array<string> = data.gallery.map((image: any) => `https:${image.fields.file.url}`);
      setGallery(image_urls);
    }
  }, []);



  return (
    <>

      { lightBoxIsOpen && (
          <Lightbox
            mainSrc={gallery[photoIndex]}
            nextSrc={gallery[(photoIndex + 1) % gallery.length]}
            prevSrc={gallery[(photoIndex + gallery.length - 1) % gallery.length]}
            onCloseRequest={() => setLightBoxIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % gallery.length)
            }
          />
        )}

      <NormalNavbar />
      <div
          style={{ height: '420px', zIndex: -1 }}  
          className="absolute header-v2 bg-blue w-full top-0"></div>

      <section className="maxwidth-1200 mx-auto mt-5">
        <p className="text-white tracking-widest text-sm mb-5">
          Home / Listings / { data.projectName }
        </p>

        <div className="relative">
          {/* real image */}
          <Image 
            className="rounded"
            width={ data.projectBannerFull.fields.file.details.image.width }
            height={ data.projectBannerFull.fields.file.details.image.height }
            src={ `https://${data.projectBannerFull.fields.file.url}` }
          />

          {/* company icon */}
          <div
            style={{ left: "1rem", top:"1rem" }} 
            className="absolute">
            <Image 
              className="rounded"
              width={ data.developerLogo.fields.file.details.image.width }
              height={ data.developerLogo.fields.file.details.image.height }
              src={ `https://${data.developerLogo.fields.file.url}` }
            />
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <p 
              style={{ lineHeight: "40px" }}
              className="border-l-4 pl-3 border-gold text-3xl mt-5 playfair leading-relaxed tracking-wide">
              <span className="font-normal text-blue font-semibold mr-1">
                { data.projectName }
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-start">
          { TAB_OPTIONS.map((option: TabOptionType) => (
            <div
              key={ option.value }
              className={ cx("cursor-pointer text-black tracking-widest cursor-pointer p-5 text-sm nunito-sans transition duration-150 uppercase text-white font-medium", {
                'text-gold font-bold border-b-2 border-gold': activeTab.value == option.value
              })}
              onClick={ () => setActiveTab(option) }>
              { option.name }
            </div>
          )) }
        </div>

        <hr 
          style={{ height: "1px" }}
          className="w-full text-lightGray"/>

        { activeTab.value == 'listing-overview' && (
          <section className="grid grid-cols-12 gap-5 mt-5">
            <div className="col-span-8">
              <Image 
                className="rounded"
                width={ data.projectDescriptionImage.fields.file.details.image.width }
                height={ data.projectDescriptionImage.fields.file.details.image.height }
                src={ `https://${data.projectDescriptionImage.fields.file.url}` }
              />
              <p className="text-black text-xl font-semibold mt-5 mb-1">Description</p>
              <p className="text-sm text-black text-justify">{ data.fullDescription }</p>
            </div>
            <div className="col-span-4">
              <div className="border border-lightGray shadow-md rounded p-5">
                <p className="text-lg mb-1 text-blue font-medium">
                  { data.projectName } Overview
                </p>

                <p className="flex items-center justify-start mb-6">
                  <FontAwesomeIcon
                    className="mr-2 text-blue" 
                    icon={ faMapMarkerAlt } />
                  <span className="text-dark text-sm">{data.address}</span>
                </p>

                <div className="grid grid-cols-12 border-b border-lightGray py-3">
                  <div className="col-span-4">
                    <p className="flex items-center justify-start">
                      <FontAwesomeIcon
                        className="w-3 mr-2 text-blue" 
                        icon={ faSquare } />
                      <span className="text-dark text-sm">Floor Area</span>
                    </p>
                  </div>
                  <div className="col-span-8 flex justify-end">
                    <span className="text-dark text-sm">{ data.floorArea }</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 border-b border-lightGray py-3">
                  <div className="col-span-4">
                    <p className="flex items-center justify-start">
                      <FontAwesomeIcon
                        className="w-3 mr-2 text-blue" 
                        icon={ faBorderStyle } />
                      <span className="text-dark text-sm">Unit Area</span>
                    </p>
                  </div>
                  <div className="col-span-8 flex justify-end">
                    <span className="text-dark text-sm">{ data.unitArea }</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 border-b border-lightGray py-3">
                  <div className="col-span-4">
                    <p className="flex items-center justify-start">
                      <FontAwesomeIcon
                        className="w-3 mr-2 text-blue" 
                        icon={ faBed } />
                      <span className="text-dark text-sm">Rooms</span>
                    </p>
                  </div>
                  <div className="col-span-8 flex justify-end">
                    <span className="text-dark text-sm">{ data.roomCount }</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 py-3">
                  <div className="col-span-4">
                    <p className="flex items-center justify-start">
                      <FontAwesomeIcon
                        className="w-3 mr-2 text-blue" 
                        icon={ faBath } />
                      <span className="text-dark text-sm">Bathroom</span>
                    </p>
                  </div>
                  <div className="col-span-8 flex justify-end">
                    <span className="text-dark text-sm">{ data.bathroomCount }</span>
                  </div>
                </div>

                <button className="transition duration-150 mt-10 text-blue shadow font-semibold bg-white border-2 border-blue py-2 text-lg rounded w-full">
                  Inquire to this Listing
                </button>
                <button className="mt-2 text-white shadow font-semibold bg-gold py-2 text-lg rounded w-full">
                  Contact Property Specialist
                </button>
                
              </div>
            </div>
          </section>
        )}

        { activeTab.value == 'developer' && (
          <section className="mt-5">
            <p className="font-medium text-lg tracking-wide  font-semibold playfair text-blue mb-3">About the Developer</p>
            <p className="text-black opacity-80">{ data.developerDetails }</p>
          </section>
        )}

        { activeTab.value == 'amenities' && (
          <section className="mt-5 grid grid-cols-12">
            { data.amenities.amenities.map((amenity: { level: string, list: Array<string> }) => (
              <div className="col-span-3">
                <p className="text-blue tracking-wide text-lg playfair font-semibold mb-2">{ amenity.level }</p>
                { amenity.list.map((item: string) => (
                  <p className="text-black opacity-80">
                    <span className="mr-2 text-blue">•</span>
                    { item }
                  </p>
                )) }
              </div>
            )) }
          </section>
        )}

        { activeTab.value == 'unit-features' && (
          <section className="mt-5">
            { data.unitFeatures.unit_features.map((unitFeature: { feature: string, list: Array<string> }) => (
              <div className="mb-3">
                <p className="text-blue tracking-wide text-lg playfair font-semibold">{ unitFeature.feature || '' }</p>
                { unitFeature.list && unitFeature.list.length > 0 && 
                unitFeature.list.map((item: string) => (
                  <p className="text-black opacity-80 ml-5">
                    <span className="mr-2 text-blue">•</span>
                    { item }
                  </p>
                )) }
              </div>
            )) }
          </section>
        )}

        { activeTab.value == 'project-features' && (
          <section className="mt-5">
            { data.projectBuildingFeatures.project_features.map((unitFeature: { feature: string, list: Array<string> }) => (
              <div className="mb-3">
                <p className="text-blue tracking-wide text-lg playfair font-semibold">{ unitFeature.feature || ''}</p>
                { unitFeature.list && unitFeature.list.length > 0 && 
                unitFeature.list.map((item: string) => (
                  <p className="text-black opacity-80 ml-5">
                    <span className="mr-2 text-blue">•</span>
                    { item }
                  </p>
                )) }
              </div>
            )) }
          </section>
        )}

        { activeTab.value == 'gallery' && (
          <>
            <p className="text-sm mb-2 font-medium opacity-80 mt-5">{ data.gallery && data.gallery.length > 0 && data.gallery.length } Images</p>
            <section className="grid grid-cols-12 gap-2">
              { data.gallery.map((image: any, index: number) => (
                <div className="col-span-3">
                  <Image 
                    onClick={ () => {
                      setLightBoxIsOpen(true);
                      setPhotoIndex(index)
                    }}
                    className="cursor-pointer"
                    height={ image.fields.file.details.image.height }
                    width={ image.fields.file.details.image.width }
                    src={ `https:${image.fields.file.url}` }
                  />
                </div>
              )) }
            </section>
          </>
        )}

      </section>
    </>
  )
}

export default ListingDetailsPage;