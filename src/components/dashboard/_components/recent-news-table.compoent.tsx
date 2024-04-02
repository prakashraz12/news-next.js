import React from 'react'

export const DashBoardNewsComponet = () => {
  return (
      <div className='flex flex-col mt-3'>
          <div className='flex gap-5 overflow-hidden cursor-pointer '>
              <img src='https://www.onlinekhabar.com/wp-content/uploads/2024/04/image-9.png' alt='news-image' className='w-[100px] h-[100px] object-cover rounded-sm' />
              <div className='flex flex-col gap-3'>
                  <h1 className='text-xl font-bold hover:text-sky-900'>पाठ्यपुस्तक हचुवा भरमा लेखिएका छन्, जसले बालबालिकालाई भ्रममा पार्छ</h1>
                  <p className='line-clamp-1'>हाम्रा बालबालिकाले विद्यालयमा पढिरहेका पाठ्यपुस्तक हेर्दा यस्तो लाग्छ, यी एकदमै अल्छी गरेर हचुवाको भरमा लेखिएका हुन् । पाठहरू क्रमबद्ध छैनन्, तथ्यहरू जाँच गरिएको छैन, विवरण वैज्ञानिक छैनन्, सूचना सही छैनन्, इतिहास साँचो छैन । विद्यालयमा पढाइने पाठ्यपुस्तकमाथि अध्ययन र विश्लेषण गर्दा</p>
                  <p className='text-md font-bold text-end'>-होमराज आचार्य </p>
              </div>
          </div>
          
    </div>
  )
}
