// import { FaLocationArrow } from "react-icons/fa6";

// import { socialMedia } from "@/data";
// import MagicButton from "./MagicButton";

// const Footer = () => {
//   return (
//     <footer className="w-full pt-20 pb-10" id="contact">
//       {/* background grid */}
//       <div className="w-full absolute left-0 -bottom-72 min-h-96">
//         <img
//           src="/footer-grid.svg"
//           alt="grid"
//           className="w-full h-full opacity-50 "
//         />
//       </div>

//       <div className="flex flex-col items-center">
//         <h1 className="heading lg:max-w-[45vw]">
//           Ready to take <span className="text-purple">your</span> digital
//           presence to the next level?
//         </h1>
//         <p className="text-white-200 md:mt-10 my-5 text-center">
//           Reach out to me today and let&apos;s discuss how I can help you.
//         </p>
//         <a href="mailto:amanyadav2508aaa@gmail.com">
//           <MagicButton
//             title="Let's get in touch"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </a>
//       </div>
//       <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
//         <p className="md:text-base text-sm md:font-normal font-light"></p>

//         <div className="flex items-center md:gap-3 gap-6">
//           {socialMedia.map((info) => (
//             <div
//               key={info.id}
//               href={info.link} // Add URL redirection here
//               target="_blank" // Open the link in a new tab
//               rel="noopener noreferrer" // Prevent security issues
//               className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//             >
//               <img src={info.img} alt="icons" width={20} height={20} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// import { FaLocationArrow } from "react-icons/fa6";
// import { socialMedia } from "@/data"; // Assuming your socialMedia data is in "@/data"
// // import MagicButton from "./MagicButton";
// import MagicButton from "./MagicButton";

// const Footer = () => {
//   return (
//     <footer className="w-full pt-20 pb-10" id="contact">
//       {/* background grid */}
//       <div className="w-full absolute left-0 -bottom-72 min-h-96">
//         <img
//           src="/footer-grid.svg"
//           alt="grid"
//           className="w-full h-full opacity-50"
//         />
//       </div>

//       <div className="flex flex-col items-center">
//         <h1 className="heading lg:max-w-[45vw]">
//           Ready to take <span className="text-purple">your</span> digital
//           presence to the next level?
//         </h1>
//         <p className="text-white-200 md:mt-10 my-5 text-center">
//           Reach out to me today and let&apos;s discuss how I can help you.
//         </p>
//         <a href="mailto:amanyadav2508aaa@gmail.com">
//           <MagicButton
//             title="Let's get in touch"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </a>
//       </div>

//       <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
//         <p className="md:text-base text-sm md:font-normal font-light"></p>

//         {/* Social Media Icons */}
//         <div className="flex items-center md:gap-3 gap-6">
//           {socialMedia.map((info) => (
//             <a
//               key={info.id}
//               href={info.link} // Link to the social media page
//               target="_blank" // Open the link in a new tab
//               rel="noopener noreferrer" // Security attributes
//               className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//             >
//               {/* // eslint-disable-next-line @next/next/no-img-element */}

//               <img src={info.img} alt={info.link} width={20} height={20} />
//             </a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data"; // Assuming your socialMedia data is in "@/data"
import MagicButton from "./MagicButton";
import Image from "next/image"; // Import Image from next/image

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={20}
          height={20}
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you.
        </p>
        <a href="mailto:amanyadav2508aaa@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light"></p>

        {/* Social Media Icons */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link} // Link to the social media page
              target="_blank" // Open the link in a new tab
              rel="noopener noreferrer" // Security attributes
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {/* Use Image from next/image */}
              <Image
                src={info.img} // Image source
                alt={info.link} // Alt text for the image
                width={20} // Width of the image
                height={20} // Height of the image
                className="object-contain" // Optional: control image resizing behavior
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
