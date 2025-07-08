
import React from 'react'
import { courseCardsData } from '@/constants/cardsData'
import CourseCards from './CourseCards'
import BlueHover from '../Buttons/BlueHoverBtn'

const CourseSection: React.FC = () => {

  return (
    <section className='min-h-screen py-12 px-4 sm:px-6 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        
        <div className='mb-12'>
          <div className='flex items-center gap-4'>
            <h2 className='text-sm sm:text-base font-bold text-[var(--btn-color)] uppercase'>Popular Carriers</h2>
            <span className='w-16 sm:w-28 bg-[var(--btn-color)] py-[1.2px] rounded-full'></span>
          </div>
          <div className='mt-2 sm:mt-4'>
            <h1 className='text-3xl text-[#1a2d62] sm:text-4xl md:text-5xl font-extrabold'>
              Choose Our <span className='text-[var(--btn-color)]'><u>Top Carriers</u></span>
            </h1>
          </div>
        </div>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {courseCardsData.map((course, index) => (
            <CourseCards key={index} button={course.button} title={course.title} lesson={course.lesson} time={course.time} rating={course.rating} seats={course.seats} index={index} price={course.price}  />
          ))}
        </div>

        <div className='mt-12 text-center'>
          <BlueHover text='View all courses' />
        </div>
      </div>
    </section>
  )
}

export default CourseSection