"use client";
import Image from 'next/image';
import Card from './Card';
import Tabs from '../tabs/Tabs';
import picOne from '../../../public/pic-one.png'
import picTwo from '../../../public/pic-two.png'
import picThree from '../../../public/pic-three.png'
import picFour from '../../../public/pic-four.png'
import picFive from '../../../public/pic-five.png'
import picsix from '../../../public/pic-six.png';
import picseven from '../../../public/pic-seven.png';
import piceight from '../../../public/pic-six.png';

const items =
[
    {
      id: 1,
      image:picOne,
      name: "مهندس علی وهابی",
      title:"عمران و ساختمان",
      task:"دفتر معماری آرکو",
      descrip:"طراحی فوق تخصصی ساختمان های شما با بهترین متد های روز دنیا اصلاح و اتمام پروژه های نیمه کاره",
      contact: "021-77553456"
    },
    {
        id: 2,
        image:picTwo,
        name: "دکتر سپهر علمایی",
        title:"پزشکی و سلامت",
        task:"کلینیک دندانپزشکی سیب",
        descrip:"فوق تخصص فک و ریشه ،ایمپلنت و ترمیم و بیماری های ریشه و عصب و بیماریهای عفونی لثه",
        contact: "021-44563219"
      },
      {
        id: 3,
        image:picThree,
        name: "سجاد مشایخی",
        title:"تکنولوژی",
        task:"دفتر دیجیتال مارکتینگ افرا",
        descrip:"کارشنا س ارشد شبکه و نرم افزار متخصص دیجیتال مارکتینگ و فعال در زمینه هوش مصنوعی",
        contact: "021-65449865"
      },
      {
        id: 4,
        image:picFour,
        name: "نیکی رواقی",
        title:"هنر",
        task:"نقاش و طراح",
        descrip:"نقاشی به سبک رئالیسم و سبک سیاه قلم آموزش و برگزای کلاس های خصوصی و گروهی برای همه سنین",
        contact: "09187665432"
      },
      {
        id: 5,
        image:picFive,
        name: "محمد زارع",
        title:"کشاورزی",
        task:"گلخانه و پرورش گیاه",
        descrip:"گلخانه و پرورش گیاهان آپارتمانی و باغ و فضای سبز فروش و طراحی فضای سبز باغ و ویلا",
        contact: "021-76322456"
      },
      {
        id: 6,
        image:picsix,
        name: "مهرانه رستگاری",
        title:"لباس و پوشاک",
        task:"مزون لباس نوا",
        descrip:"خیاطی و مزون لباس زنانه  و دخترانه  مجلسی و مطابق با سلیقه شما",
        contact: "021-97766532"
      },
      {
        id: 7,
        image:picseven,
        name: "مریم حجازی",
        title:"هنر",
        task:"صنایع سنگ مصنوعی و رزین",
        descrip:"ساخت لوازم تزئینی و دکوریجات سنگی و تابلوهای رزین و سنگ",
        contact: "09216543790"
      },
      {
        id: 8,
        image:picsix,
        name: "سید محسن رضوی",
        title:"لوازم خانگی",
        task:"فروشگاه رضوی",
        descrip:"فروش انواع لوازم خانگی نو و کارکرده بصورت اقساط و با ضمانت ",
        contact: "09115578963"
      }
  ]

  
const CardItems = () => {

  return (
    <div>
        <Tabs/>
        <div className='grid grid-cols-4 gap-5 mx-24 py-5  '>
           {
        items.map((item) =>{
            return(
                <Card 
                    id={item.id}
                    image={item.image} 
                    name={item.name} 
                    title={item.title} 
                    task={item.task} 
                    descrip={item.descrip} 
                    contact={item.contact} 
                />
            )
        } 
        )
      } 
        </div>
        <div className='flex items-center justify-center mb-10'>
          <p className='text-[#ACACAC] text[15px]'>مشاهده بیشتر...</p>
        </div>
    </div>
  )
}

export default CardItems
