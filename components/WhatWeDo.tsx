import { faSalesforce } from '@fortawesome/free-brands-svg-icons';
import { faCog, faHouseUser, faMap, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import Image from 'next/image';

interface WhatWeDoProps {

}

const WhatWeDo: FC<WhatWeDoProps> = props => {

  const IMAGE_SRC = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"

  return (
    <div
      style={{ backgroundColor: "#f9f9f9" }} 
      className="mt-10 p-5">
      <div className="maxwidth-1200 mx-auto">
        <div className="grid gap-20 grid-cols-12">

          <div className="col-span-4 text-center">
            <img
              className="border-2 border-gold bg-white rounded-lg"
              src="/angel-pro.png" 
              alt="michaela-bernardino" />
            <p className="mt-2 text-black text-xl text-lg playfair font-semibold text-black">Michaela Bernardino</p>
            <p className="text-blue text-sm font-semibold -mt-1">Property Specialist</p>
          </div>

          <div className="col-span-8 mt-10">
            <p className="border-l-4 border-gold text-blue playfair mb-5 font-semibold text-3xl pl-3">
              What We Do
            </p>
            <p className="text-black text-justify text-sm mb-5 mr-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>
            <p className="text-black text-justify text-sm mr-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnais nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>


            <div className="grid grid-cols-12 gap-10 mt-10">
              <div className="col-span-6">
                {/* <Image 
                  height="300"
                  className="rounded"
                  width="420"
                  src={ IMAGE_SRC }
                /> */}
                <div className="flex items-start justify-start mb-8">
                  <FontAwesomeIcon 
                    size="2x"
                    className="text-blue  mt-1 mr-3"
                    icon={ faHouseUser }
                  />
                  <div>
                    <p className="text-black font-semibold uppercase">nostrud exercitation ullamc</p>
                    <p className="text-black text-justify text-sm"> elit, snciion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol</p>
                  </div>
                </div>
                <div className="flex items-start justify-start mb-8">
                  <FontAwesomeIcon 
                    size="2x"
                    className="text-blue  mt-1 mr-3"
                    icon={ faSalesforce }
                  />
                  <div>
                    <p className="text-black font-semibold uppercase">nostrud exercitation ullamc</p>
                    <p className="text-black text-justify text-sm"> elit, snciion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol</p>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex items-start justify-start mb-8">
                  <FontAwesomeIcon 
                    size="2x"
                    className="text-blue  mt-1 mr-3"
                    icon={ faCog }
                  />
                  <div>
                    <p className="text-black font-semibold uppercase">nostrud exercitation ullamc</p>
                    <p className="text-black text-justify text-sm"> elit, snciion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol</p>
                  </div>
                </div>
                <div className="flex items-start justify-start mb-8">
                  <FontAwesomeIcon 
                    size="2x"
                    className="text-blue  mt-1 mr-3"
                    icon={ faUsers }
                  />
                  <div>
                    <p className="text-black font-semibold uppercase">nostrud exercitation ullamc</p>
                    <p className="text-black text-justify text-sm"> elit, snciion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol</p>
                  </div>
                </div>
              </div>
            </div>

          </div>



        </div>
      </div>
    </div>
  )
}

export default WhatWeDo;