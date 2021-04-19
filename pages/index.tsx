import Head from 'next/head'
import { contentfulClient } from './contentful';
import { PropertyModel } from './model/property.model';
import PropertyCard from './components/PropertyCard';

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
  console.log({ total, properties });
  
  return (
    <div className="max-w-screen-xl mx-auto mt-10">

      <p className="text-gray border border-lightGray py-20 text-center font-bold w-full rounded-lg">Banner</p>
      <p className="text-gray border border-lightGray py-10 text-center font-bold w-full rounded-lg mt-10">Section</p>
    
      <p className="text-gray font-semibold talic text-4xl mt-10">Featured Properties</p>
      <br />
      <div className="grid grid-cols-12 gap-5">
        { properties.map((property: any) => 
          <div
            key={ property.sys.id } 
            className="col-span-4">
            <PropertyCard
              title={ property.fields.title }
              address={ property.fields.address }
              description={ property.fields.shortDescription }
              thumbnail={ property.fields.thumbnail.fields.file.url }
            />
          </div>
        )}
      </div>
    </div>
  )
}
