import React from 'react'

export const CoverStoryCard = () => {
  return (
    <div className='overflow-hidden cursor-pointer'>
          <img
            src="https://www.onlinekhabar.com/wp-content/uploads/2024/03/Dhye-Dreams1-1.jpg"
            alt="news-image"
            className="aspect-square w-full object-cover transition-all hover:duration-1000 ease-in-out hover:scale-105"
          />
          <p className="text-2xl font-semibold bg-sky-900 p-3 text-white">
            धाय ड्रिम्स : हामी ‘जलवायु शरणार्थी’ बन्न तयार भएका हौं ?
          </p>
        </div>
  )
}
