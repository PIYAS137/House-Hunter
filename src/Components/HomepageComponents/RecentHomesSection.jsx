import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import HomeCard from './HomeCard'
import useGetAllHouses from '../../Hooks/useGetAllHouses'
import { Link } from 'react-router-dom'

const RecentHomesSection = () => {

  const [allHouse,refetch] = useGetAllHouses();

  return (
    <div className=' container mx-auto'>
        <SectionHeader small={'most recent homes are'} big={'Recent Homes'}/>
        <div className='flex flex-wrap justify-center gap-10 mt-16'>
            {
              allHouse?.slice(0,8)?.map(one=><HomeCard key={one._id} data={one}/>)
            }
        </div>
        <div className=' text-center mt-10'>
          <Link to={'/allitems'}><button className='uppercase btn hover:bg-orange-500 bg-orange-400 text-white'>View All House</button></Link>
        </div>
    </div>
  )
}

export default RecentHomesSection