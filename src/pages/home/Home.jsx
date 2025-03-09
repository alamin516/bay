import React from 'react'
import HomeSlider from '../../components/sliders/HomeSlider'
import HomeCollection from '../../components/home/HomeCollection'
import HomeFeatured from '../../components/home/HomeFeatured'
import HomeBestSell from '../../components/home/HomeBestSell'
import HomeBrand from '../../components/home/HomeBrand'

const Home = () => {
  return (
    <>
    <HomeSlider/>
    <HomeCollection/>
    <HomeFeatured/>
    <HomeBestSell/>
    <HomeBrand/>
    </>
  )
}

export default Home