import React from 'react'
import FeaturedProducts from './FeaturedProducts'

const HomeFeatured = () => {
  return (
    <section className="pb-12">
      <div className="px-20">
        <div class="main-title text-[30px] font-bold text-center pb-8">OUR FEATURED PRODUCTS
        </div>
        <FeaturedProducts/>
      </div>
    </section>
  )
}

export default HomeFeatured