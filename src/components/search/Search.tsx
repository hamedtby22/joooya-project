
const Search = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <input 
          type="text" 
          placeholder="نوع و یا زمینه شغل مورد نظر  را انتخاب کنید"
          className='w-[290px] border rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-gray-500 mx-1 ' 
      />
      <input 
        type="text" 
        placeholder="استان ، شهر ، شهرستان و یا منطقه مورد نظر را وارد کنید"
        className='w-[350px] border rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-gray-500 mx-1   ' 
      />
      <input 
        type="text" 
        placeholder="عنوان شغل، فعالیت، نام مجموعه و یا نام فرد را وارد کنید "
        className='w-[350px] border rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-gray-500 mx-1 ' 
      />
      <button type="submit" className="inline-flex items-center py-1.5 px-10 ms-2 text-sm font-medium text-white bg-[#008080] rounded-lg">
        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>جستجو
    </button>  
    </div>
  )
}
export default Search
