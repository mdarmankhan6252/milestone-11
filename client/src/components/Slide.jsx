
const Slide = ({title, image}) => {
   return (
      <div className="w-full bg-center bg-cover h-[38rem]" style={{ backgroundImage: `url(${image})` }}>
         <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
               <h1 className="text-2xl font-semibold text-white lg:text-4xl">{title}</h1>
               <button className="px-5 py-3 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
         </div>
      </div>
   );
};

export default Slide;