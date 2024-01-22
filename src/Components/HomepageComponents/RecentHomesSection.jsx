import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import HomeCard from './HomeCard'

const RecentHomesSection = () => {
  return (
    <div className=' container mx-auto'>
        <SectionHeader small={'most recent homes are'} big={'Recent Homes'}/>
        <div className=' grid gap-6 grid-cols-4 mt-16'>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
        </div>
    </div>
  )
}

export default RecentHomesSection