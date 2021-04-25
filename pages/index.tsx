import { contentfulClient } from './contentful';
import PropertyCardBare from './components/PropertyCardBare';

export async function getStaticProps() {

  const options = {
    content_type: 'propertyListing'
  }

  const res = await contentfulClient.getEntries(options)

  return {
    props: {
      total: res.total,
      properties: res.items
    }
  }
}

export default function Home({ total, properties }) {
  
  return (
    <div className="max-w-screen-lg mx-auto mt-10">

      <p className="text-gray border border-lightGray py-20 text-center font-bold w-full rounded-lg">Banner</p>
      <p className="text-gray border border-lightGray py-10 text-center font-bold w-full rounded-lg mt-10">Section</p>

      <section className="what-we-do mt-10">
        <div className="grid grid-cols-12">
          <div className="col-span-10">
            <p className="text-gray nunito-sans tracking-widest text-sm font-medium uppercase">what we do</p>
            <p className="playfair text-4xl mb-1 text-black">Helping you find the <span className="italic">property</span> of your dreams</p>
            <p className="italic text-4xl text-black playfair">Creating real value in property and places.</p>
          </div>
          <div className="col-span-2 h-full flex items-center">
            <button className="w-full px-5 py-3 text-sm mt-2 text-gray border border-lightBlack transition duration-150 hover:bg-black hover:text-white">
              See all listings
            </button>
          </div>
        </div>

        <hr 
          style={{ height: "1.4px" }}
          className="bg-black mt-5"/>

        <br />
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
      </section>
    </div>
  )
}

