"use client";

import { useState } from "react";

const Tabs = () => {
    const [activeTabs,setActiveTabs] = useState('همه')
    const tabs = ['همه','کارت ویزیت','کارت کارجو','اگهی استخدام',]

  return (
    <div className="flex border-b w-max mx-28">
      {
        tabs.map((tab)=> (
            <div 
            key={tab} 
            className={`cursor-pointer py-2 px-4 text-gray-500 ${activeTabs ===tab ? 'text-teal-500 border-teal-500 border-b-2' : ''}`}
            onClick={() =>setActiveTabs(tab)}>
                {tab}
            </div>
        ))
      }
    </div>
  )
}

export default Tabs
