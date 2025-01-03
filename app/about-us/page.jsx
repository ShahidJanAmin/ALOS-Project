import React from 'react'
import RootLayout from '../layout'
import TopNavigation from '@/component/common/TopNavigation'
import HorizontalMenu from '@/component/common/HarizontalMenu'
import Footer from '@/component/common/Footer'
import AboutComponent from '@/component/about-us/AboutComponent'

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