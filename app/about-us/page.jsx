import React from 'react'
import RootLayout from '../layout'
import TopNavigation from '@/components/common/TopNavigation'
import HorizontalMenu from '@/components/common/HarizontalMenu'
import Footer from '@/components/common/Footer'
import AboutComponent from '@/components/about-us/AboutComponent'

function Page() {
  return (
  <RootLayout>
     <TopNavigation/>
     <HorizontalMenu/>

    <AboutComponent/>
     <Footer/>
  </RootLayout>
  )
}

export default Page