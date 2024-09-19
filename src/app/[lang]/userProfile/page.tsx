
import BasicMenu from '@/components/BasicMenu/BasicMenu'
import BreadcrumbsMenu from '@/components/BreadcrumbsMenu/BreadcrumbsMenu'
import InnerMenu from '@/components/InnerMenu/InnerMenu'
import Profile from '@/components/Profile/Profile'
import SearchInput from '@/components/SearchInput/SearchInput'
import PaginationTable from '@/components/PaginationTable/PaginationTable'


export default function App() {
  return (
    <div className='flex '>
      <BasicMenu />
      <div className='w-full h-full bg-[#E9ECFE] py-[16px] px-[24px]'>
        <SearchInput />
        <BreadcrumbsMenu />
        <Profile />
        <div className='flex  gap-[24px]'>
          <InnerMenu />
          <PaginationTable />
        </div>
      </div>
    </div>
  )
}
