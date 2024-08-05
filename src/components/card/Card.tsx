"use client";

import Image from 'next/image';

const Card = ({id,image,name,title,task,descrip,contact}) => {
  return (
    <>              
      <div className="w-[267px] h-fit bg-white rounded-lg shadow-md overflow-hidden relative">
            
      <div className='w-100 h-[25px] bg-[#D9ECEC] opacity-80'></div>

      <div className="flex items-center h-[34px] border-2 border-white bg-gradient-to-r from-[#5DAEAE] via-[#FFFFFF] to-[#5DAEAE] p-1 rounded-tr-[100px] rounded-bl-[100px] m-5 absolute top-[-10px]">
        <span className="w-20 text-[#6C6C6C] mr-5 text-[10px]">{name}</span>
        <Image src={image} alt={name} className='w-10 h-10 border-2 border-white rounded-full object-cover'/>
        <span className="w-20 text-[#6C6C6C] ml-5 px-1 text-[10px] ">{title}</span>   
      </div>      
      <div className="p-4">
        <h2 className="text-center text-[12px] my-2 font-bold text-[#6C6C6C]">{task}</h2>
        <p className="text-[12px] text-[#9A9A9A] text-start">
          {descrip}
        </p>
      </div>

        <div className="flex justify-between items-center p-[5px] space-x-2 bg-gradient-to-t from-[#D9ECEC] to-[#FFFFFF] opacity-80 ">
          
          <div className="text-center text-[#008080] text-[8px]">
            {contact}
          </div>
          <div className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[18px] h-[18px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75l-6.75-6.75a6.75 6.75 0 1113.5 0L12 18.75z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
            <svg width="15" height="15" viewBox="0 0 14 14"  xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3608 7.88286V7.89466L10.3661 7.90522L11.3581 9.88918L11.4028 9.86682L11.3581 9.88918C11.4 9.97287 11.4197 10.0659 11.4155 10.1593C11.4113 10.2528 11.3833 10.3437 11.3341 10.4233C11.2849 10.5029 11.2162 10.5686 11.1344 10.6141C11.0527 10.6597 10.9607 10.6836 10.8671 10.6836H8.70891H8.67022L8.66051 10.721C8.54218 11.1776 8.2756 11.5819 7.90262 11.8705C7.52963 12.1592 7.07136 12.3158 6.59973 12.3158C6.1281 12.3158 5.66983 12.1592 5.29684 11.8705C4.92386 11.5819 4.65728 11.1776 4.53895 10.721L4.52925 10.6836H4.49055H2.33238C2.2388 10.6836 2.14678 10.6597 2.06504 10.6141C1.98331 10.5686 1.91458 10.5029 1.86539 10.4233C1.81619 10.3437 1.78816 10.2528 1.78395 10.1593C1.77975 10.0659 1.79951 9.97287 1.84136 9.88918L1.79664 9.86682L1.84136 9.88918L2.83334 7.90522L2.83862 7.89466V7.88286V5.83357C2.83862 4.83606 3.23488 3.87941 3.94022 3.17406C4.64557 2.46872 5.60222 2.07246 6.59973 2.07246C7.59724 2.07246 8.55389 2.46872 9.25924 3.17406C9.96458 3.87941 10.3608 4.83606 10.3608 5.83357V7.88286ZM5.65675 10.6836H5.57015L5.61345 10.7586C5.71342 10.9317 5.85718 11.0755 6.03031 11.1754C6.20344 11.2754 6.39982 11.328 6.59973 11.328C6.79964 11.328 6.99602 11.2754 7.16915 11.1754C7.34228 11.0755 7.48605 10.9317 7.58601 10.7586L7.62932 10.6836H7.54271H5.65675ZM3.71791 8.34724L3.7179 8.34725L3.0809 9.62234L3.04476 9.69468H3.12563H10.0744H10.1552L10.1191 9.62234L9.4821 8.34725L9.48208 8.3472C9.40985 8.20303 9.37214 8.04405 9.37195 7.8828V5.83357C9.37195 5.09833 9.07988 4.39321 8.55999 3.87331C8.0401 3.35342 7.33497 3.06135 6.59973 3.06135C5.86449 3.06135 5.15937 3.35342 4.63947 3.87331C4.11958 4.39321 3.82751 5.09833 3.82751 5.83357V7.88286C3.8275 8.04406 3.78997 8.20305 3.71791 8.34724Z"  stroke="#6C6C6C" stroke-width="0.1"/>
            </svg>
            <svg width="15px" height="15" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" fill="#000000" >
              <path d="M 7 5 L 7 28 L 8.59375 26.8125 L 16 21.25 L 23.40625 26.8125 L 25 28 L 25 5 Z M 9 7 L 23 7 L 23 24 L 16.59375 19.1875 L 16 18.75 L 15.40625 19.1875 L 9 24 Z" stroke="#6C6C6C" stroke-width="0.1"></path>
            </svg>
          </div>
        </div>      
    </div>
    </>
  );
};

export default Card;