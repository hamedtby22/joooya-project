import React from 'react';
import Image from 'next/image';
import cardone from '../../../public/card-one.svg'
import cardtwo from '../../../public/card-two.svg'
import cardthree from '../../../public/card-three.svg'
import cardfour from '../../../public/card-four.svg'
import cardfive from '../../../public/card-five.svg'

const Advantages = () => {
  const cards = [
    {
      id: 1,
      title: 'برترین پلتفرم کار و کاریابی',
      image: cardone
    },
    {
      id: 2,
      title: 'تعامل مستقیم کاربران',
      image: cardtwo
    },
    {
      id: 3,
      title: '+3000 نفر کاربر فعال',
      image: cardthree
    },
    {
      id: 4,
      title: 'حفظ حریم شخصی کاربر',
      image: cardfour
    },
    {
      id: 5,
      title: 'کامل ترین پلتفرم کار و بازاریابی',
      image:  cardfive
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mb-10">
      <div className="flex justify-evenly space-x-4 overflow-x-auto">
        {cards.map(card => (
          <div key={card.id} className="bg-white rounded-2xl shadow-lg ">
            <div className="flex justify-center">
              <Image
                src={card.image}
                alt={card.title}
                width={124}
                height={124}
                className=" rounded-lg"
              />
            </div> 
            <h3 className="text-center text-[10px] text-[#ACACAC]">{card.title}</h3>    
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;