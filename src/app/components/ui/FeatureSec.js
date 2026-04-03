import Image from "next/image";

export default function FeatureSection() {
  return (

     <div className="bg-white mb-[80px]">
        <div className="border-2 border-gray-300  py-5 max-w-7xl mx-auto">
          <div className="flex  md:flex-row items-center justify-between gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">

            <div className="flex items-center gap-3 flex-1 justify-center py-3 md:py-0">
               <Image src="/assets/svg-icons/shield.svg" alt="Arrow Right" width={50} height={50} />
              <span className="text-base text-gray-600 font-semibold">Best Rate Guarantee</span>
            </div>

            <div className="flex items-center gap-3 flex-1 justify-center py-3 md:py-0">
             
               <Image src="/assets/svg-icons/box.svg" alt="Arrow Right" width={50} height={50} />
              <span className="text-base text-gray-600 font-semibold">Exclusive Direct Benefits</span>
            </div>

            <div className="flex items-center gap-3 flex-1 justify-center py-3 md:py-0">
               <Image src="/assets/svg-icons/close.svg" alt="Arrow Right" width={50} height={50} />
             
              <span className="text-base text-gray-600 font-semibold">Flexible Cancellation</span>
            </div>

            <div className="flex items-center gap-3 flex-1 justify-center py-3 md:py-0">
               <Image src="/assets/svg-icons/support.svg" alt="Arrow Right" width={50} height={50} />
              
              <span className="text-base text-gray-600 font-semibold">24/7 Direct Guest Support</span>
            </div>

          </div>
        </div>
      </div>
    
  );
}