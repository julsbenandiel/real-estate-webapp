import { FC } from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface BannerProps {
  banners: Array<any>;
}

const Banner: FC<BannerProps> = props =>  {

  const { banners } = props;
  const title = banners[0].fields.title;
  const slug = banners[0].fields.slug;
  const image = banners[0].fields.image.fields.file;

  console.log({ banners});

  return (
    <div className="relative">
      <div
        style={{ 
          top: "calc(100%/3.5)",
          left: "3rem"
        }} 
        className="bg-black absolute z-10 p-8 text-white">
        <p className="luxury">Luxury</p>
        <p className="banner-title my-5">{ title }</p>
        <button className="view-project-button flex items-center justify-start">
          <span className="mr-2">view project</span>
          <FontAwesomeIcon 
            className="w-2"
            icon={ faAngleRight }
          />
        </button>
      </div>

      <Image
        className=""
        height={ image.details.image.height }
        width={ image.details.image.width }
        alt={ image.title }
        src={ `https:${image.url}` }
      />
    </div>
  )
}

export default Banner;