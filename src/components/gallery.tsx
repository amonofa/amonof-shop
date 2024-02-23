import React from 'react'

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" 
          src="https://class-tour.com/wp-content/uploads/2/b/b/2bb82d293d9e1f08858f61447bfc7e25.jpeg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block"
           src="https://ialady.ru/wp-content/uploads/2018/02/bfe0744af878edd4eb18b7a858491bcb_C25uRN5rvbE.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block"
           src="https://www.hotelcarlemany.com/content/imgsxml/panel_textoseointerior/quehacerandorrainviernoshopping3274.jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" 
          src="https://www.d8aspring.com/hubfs/Eye-on-Asia/20201130-parcel-paper-cartons-with-shopping-cart-logo-trolley-laptop-keyboard.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" 
          src="https://d1.awsstatic.com/gcrp_mercado-libre-translation_06142022.8e00db323fecefcdb3ccef350206d445e6f8a9c2.jpeg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" 
           src="https://i.pinimg.com/originals/27/8b/86/278b861c72cee9a2d6b600b22c1dc196.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Gallery