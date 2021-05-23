import { FC } from "react";
import Image from 'next/image';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

interface AgentProps {
  name: string;
  description: string;
  profilePic: any,
  hasFacebook: boolean;
  hasLinkedin: boolean;
  hasTwitter: boolean;
  hasInstagram: boolean;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  linkedinLink: string;
}

const Agent: FC<AgentProps> = props => {

  const {
    name,
    description,
    profilePic,
    hasFacebook,
    hasLinkedin,
    hasTwitter,
    hasInstagram,
    facebookLink,
    twitterLink,
    instagramLink,
    linkedinLink,
  } = props;

  return (
    <section>
      <img
        className=""
        height={ profilePic.fields.file.details.image.height }
        width={ profilePic.fields.file.details.image.width }
        alt={ profilePic.fields.file.title }
        src={ `https:${profilePic.fields.file.url}` }
      />
      <p 
        style={{ fontWeight: 500 }}
        className="text-2xl playfair my-3">{ name }</p>
      <p className="text-justify text-10 text-gray">{ description }</p>

      <div className="flex items-center justify-start mt-4">
        { hasFacebook && (
          <button
            title="facebook"
            className="cursot-pointer text-gray mr-3">
            <Link href={ facebookLink }>
              <FontAwesomeIcon 
                className="w-5"
                icon={ faFacebook }
                />
            </Link>
          </button>
        )}
        { hasTwitter && (
          <button
            title="twitter"
            className="cursot-pointer text-gray mr-3">
            <Link href={ twitterLink }>
              <FontAwesomeIcon 
                className="w-5"
                icon={ faTwitter }
                />
            </Link>
          </button>
        )}
        { hasInstagram && (
          <button
            title="facebook"
            className="cursot-pointer text-gray mr-3">
            <Link href={ instagramLink }>
              <FontAwesomeIcon 
                className="w-5"
                icon={ faInstagram }
                />
            </Link>
          </button>
        )}
        { hasLinkedin && (
          <button
            title="facebook"
            className="cursot-pointer text-gray mr-3">
            <Link href={ linkedinLink }>
              <FontAwesomeIcon 
                className="w-5"
                icon={ faLinkedin }
                />
            </Link>
          </button>
        )}
      </div>
    </section>
  )
}

export default Agent;