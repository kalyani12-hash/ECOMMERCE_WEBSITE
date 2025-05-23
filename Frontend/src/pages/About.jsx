import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum magnam distinctio veniam inventore, dolorem eaque et placeat soluta, quod dicta obcaecati nemo repellendus natus? Culpa ipsam voluptatem adipisci aspernatur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nesciunt recusandae. Consequatur esse molestiae eos minima facilis repellat magnam laborum eum doloribus, labore blanditiis assumenda cumque voluptatibus quo soluta a.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatibus illum voluptatum deleniti iusto exercitationem vero necessitatibus. Atque exercitationem quidem, ducimus tempora sunt dolorem recusandae quas veritatis id magni pariatur.</p>

            </div>

        </div>
        <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur debitis optio, eligendi aspernatur totam, officiis, cupiditate temporibus ipsam deleniti quae. Optio vero corporis numquam perspiciatis a. Atque, accusamus dignissimos.</p>

            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur debitis optio, eligendi aspernatur totam, officiis, cupiditate temporibus ipsam deleniti quae. Optio vero corporis numquam perspiciatis a. Atque, accusamus dignissimos.</p>

            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exception Customer Service:</b>
                <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur debitis optio, eligendi aspernatur totam, officiis, cupiditate temporibus ipsam deleniti quae. Optio vero corporis numquam perspiciatis a. Atque, accusamus dignissimos.</p>

            </div>

        </div>
        <NewsletterBox/>
      
    </div>
  )
}

export default About
