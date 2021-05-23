import { faHouseUser, faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

interface WhatWeDoProps {

}

const WhatWeDo: FC<WhatWeDoProps> = props => {
  return (
    <div className="bg-lightGray mt-10 p-5">
      <div className="maxwidth-1200 mx-auto">
        <div className="grid gap-20 grid-cols-12">
          <div className="col-span-8 mt-10">
            <p className="border-l-4 border-gold text-blue playfair mb-5 font-semibold text-3xl pl-3">
              What We Do
            </p>
            <p className="text-black text-justify text-sm mr-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            </p>

            <div className="grid grid-cols-12 gap-10 mt-12">
              <div className="col-span-6">
                <div className="flex items-start justify-start">
                  <FontAwesomeIcon 
                    className="text-blue mt-1 mr-3 w-14"
                    icon={ faHouseUser }
                  />
                  <div>
                    <p className="text-black font-semibold uppercase">nostrud exercitation ullamc</p>
                    <p className="text-black text-justify text-sm"> elit, snciion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol</p>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex items-start justify-start">
                    <FontAwesomeIcon 
                      className="text-blue mt-1 mr-3 w-14"
                      icon={ faMap }
                    />
                    <div>
                    <p className="text-black font-semibold uppercase">nostrud exercitation ullamc</p>
                    <p className="text-black text-justify text-sm"> elit, snciion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol</p>
                  </div>
                  </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-10 mt-10">
              <div className="col-span-6">
                <div className="flex items-start justify-start">
                  <FontAwesomeIcon 
                    className="text-blue  mt-1 mr-3 w-14"
                    icon={ faHouseUser }
                  />
                  <div>
                    <p className="text-black font-semibold uppercase">nostrud exercitation ullamc</p>
                    <p className="text-black text-justify text-sm"> elit, snciion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol</p>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex items-start justify-start">
                  <FontAwesomeIcon 
                    className="text-blue mt-1 mr-3 w-14"
                    icon={ faMap }
                  />
                  <div>
                    <p className="text-black font-semibold uppercase">nostrud exercitation ullamc</p>
                    <p className="text-black text-justify text-sm"> elit, snciion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-span-4 text-center">
            <img
              className="border-2 border-gold bg-white rounded-lg"
              src="/angel-pro.png" 
              alt="michaela-bernardino" />
            <p className="mt-2 text-black text-xl text-lg playfair font-semibold text-black">Michaela Bernardino</p>
            <p className="text-blue text-sm font-semibold -mt-1">Property Specialist</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo;