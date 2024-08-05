import Image from "next/image"
import logo from '../../../public/joooya-logo.png';
import Link from "next/link";

const navList = [
    {id:1,name:"خانه"},
    {id:2,name:"افزودن کارت"},
    {id:3,name:"ارشیو کارت ها"},
    {id:4,name:"پیامرسان"},
    
    
    
]
const Navbar = () => {
  return (
    <main className="flex justify-between">
      <div className="flex items-center">
      <div className="pr-5">
            <Image src={logo} alt="joooya-logo" width={68} height={68} />
        </div>
        <ul className="flex justify-around">
            {
                navList.map((item) => {
                    return(
                        <li className=" px-10 cursor-pointer text-gray-500 hover:scale-105 ">
                            <Link href={item.name} key={item.id}>
                            {item.name}
                            </Link>
                        </li>
                         
                    )
                })
            }
        </ul>
        
      </div>
      <div className="flex items-center ">
      <div className="cursor-pointer">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <div className="flex p-5 font-serif">
        <div className="cursor-pointer hover:scale-105">
             <Link href='/register'>ثبت نام</Link>
        </div>
        | 
        <div className="cursor-pointer  hover:scale-105">
             <Link href='/login'>ورود</Link>
        </div> 
        </div> 
      </div>
      
    </main>
  )
}

export default Navbar
