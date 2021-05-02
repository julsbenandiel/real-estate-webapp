import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Agent from '../components/Agent';
import { contentfulClient, ContentModel } from '../configs';

export async function getServerSideProps() {
  
  const about = await contentfulClient.getEntries({
    content_type: ContentModel.ABOUT_PAGE_DATA,
  });

  const agents = await contentfulClient.getEntries({
    content_type: ContentModel.AGENTS
  });

  return {
    props: {
      agents: agents.items,
      text: about.items[0]
    }
  }
}

export default function Contact({ agents, text }) {

  console.log({ agents, text });

  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <div className="grid grid-cols-12">
        <div className="col-span-10">
          <p className="text-gray nunito-sans tracking-widest text-sm font-medium uppercase">what we do</p>
          <p className="playfair text-4xl mb-1 text-black">Helping you find the <span className="italic">property</span> of your dreams</p>
          <p className="italic text-4xl text-black playfair">Creating real value in property and places.</p>
        </div>
        <div className="col-span-2 h-full flex items-center">
          <button className="w-full px-5 py-3 text-sm mt-2 text-gray border border-lightBlack transition duration-150 hover:bg-black hover:text-white">
          Contact Us
          </button>
        </div>
      </div>

      <hr 
        style={{ height: "1px" }}
        className="bg-black mt-5"/>

      <div className="grid grid-cols-12 gap-10 mt-10">
        <div className="col-span-4">
          {/* { documentToReactComponents(text.fields.aboutUsText) } */}
          <p className="mb-5 text-justify text-light text-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
          </p>

          <p className="mb-5 text-justify text-light text-gray">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidr sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventarchitecto beatae vitae dicta sunt.</p>

          <p className="mb-5 text-justify text-light text-gray">
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
          </p>

          <p className="mb-5 text-justify text-light text-gray">Nemo enim ipsam voluptatem quia volupsit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>
        </div>

        <div className="col-span-8">
          <div className="grid grid-cols-12 gap-8">
          { agents.map((agent: any) => {
              const data = agent.fields;
              return (
                <div className="col-span-6">
                  <Agent 
                    name={ data.name }
                    description={ data.description }
                    profilePic={ data.profilePic }
                    hasFacebook={ data.hasFacebook }
                    hasInstagram={ data.hasInstagram }
                    hasLinkedin={ data.hasLinkedin }
                    hasTwitter={ data.hasTwitter }
                    facebookLink={ data.facebookLink }
                    linkedinLink={ data.linkedinLink }
                    twitterLink={ data.twitterLink }
                    instagramLink={ data.instagramLink }
                  />
                </div>
              )
            }) }
          </div>
        </div>
      </div>


    </div>
  )
}
