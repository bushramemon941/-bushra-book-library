"use client";
import React from 'react'
import Gallery from '@/components/gallery'
import Link from 'next/link';
import "../../style/gallery.css"

const page = () => {
  return (
    <div className='gallery'>
   <Gallery/>
   
   </div>
  )
}

export default page