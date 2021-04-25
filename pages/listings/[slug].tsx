import { useRouter } from 'next/router'
import { contentfulClient } from '../contentful'
import { PropertyModel } from '../model/property.model';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export const getStaticPaths = async () => {

  const options = {
    content_type: 'propertyListing'
  }

  const res = await contentfulClient.getEntries(options);
  const paths = res.items.map((item: any) => {
    return { params: { slug: item.fields.slug } }
  });

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const options = {
    content_type: 'propertyListing',
    'fields.slug': params.slug
  }

  const res = await contentfulClient.getEntries(options);

  return {
    props: {
      listing: res.items[0]
    }
  }
}

const ListingDetailsPage = ({ listing }) => {

  const { 
    title,
    description,
    price,
    thumbnail
  } = listing.fields;

  return (
    <section className="max-w-screen-lg mx-auto mt-10">
      <p className="text-gray nunito-sans tracking-widest text-sm font-medium uppercase">about the property</p>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <p 
            style={{ lineHeight: "40px" }}
            className="text-3xl mt-5 playfair leading-relaxed tracking-wide">
            <span className="font-normal font-semibold mr-1">{ title }</span>
            <span className="font-light">is a contemporary high-rise residential building offering effortless cosmopolitan living.</span>
          </p>
        </div>

        <div className="col-span-3 flex justify-end items-center">
          <div className="h-20 border text-center p-3 rounded border-lightGray">
            Developer<br/>
            Logo
          </div>
        </div>  
      </div>  
      <hr 
        style={{ height: "1.4px" }}
        className="w-full bg-black mt-5"/>

      <div className="grid grid-cols-12 mt-5 gap-5">
        <div className="col-span-6 h-full flex items-start">
          <section className="mt-5">
            { documentToReactComponents(description) }

            <div className="mt-10 mb-2">
              <p className="my-3 text-gray nunito-sans tracking-widest text-sm font-medium uppercase">
                Developer: <span className="font-semibold text-black">Developer Name</span>
              </p>
              <p className="my-3 text-gray nunito-sans tracking-widest text-sm font-medium uppercase">
                Location: <span className="font-semibold text-black">Full Address</span>
              </p>
              <p className="my-3 text-gray nunito-sans tracking-widest text-sm font-medium uppercase">
                Amenities: <span className="font-semibold text-black">Amenities</span>
              </p>
            </div>
          </section>
        </div>
        <div className="col-span-6">
          <Image
            src={ `https:${thumbnail.fields.file.url}` }
            alt={ `${title}-thumbnail` }
            width={ 1080 }
            height={720}
          />
        </div>
      </div>

      <p className="text-gray border border-lightGray py-10 text-center font-bold w-full rounded-lg mt-10">Section</p>


      <p className="text-gray border border-lightGray py-10 text-center font-bold w-full rounded-lg mt-10">Section</p>


      <p className="text-gray border border-lightGray py-10 text-center font-bold w-full rounded-lg mt-10">Section</p>

    </section>
  )
}

export default ListingDetailsPage;