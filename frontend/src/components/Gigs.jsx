import React from "react"
import { useState } from "react";
import NavBar from "./NavBar";


const products = [
    {
      id: 1,
      name: 'Seedhe Maut',
      href: '/eventpage',
      imageSrc: 'https://img.redbull.com/images/w_2400/q_auto,f_auto/redbullcom/2021/3/18/lt20l6aqlpkh1xnwv0px/seedhe-maut-encore-abj-calm-indian-hip-hop-duo-rappers',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '25/04/2024',
      color: 'Nehru Place, New Delhi',
    },
    {
      id: 2,
      name: 'Kenny Beats ',
      href: '/underconstruction',
      imageSrc: 'https://i.ytimg.com/vi/vc35GjGCVHY/maxresdefault.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '04/05/2024',
      color: 'Mumbai',
    },
    {
      id: 3,
      name: `The Pervert's Guide to Ideology: Slavoj Zizek`,
      href: '/underconstruction',
      imageSrc: 'https://media.timeout.com/images/105439173/1372/772/image.webp',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '04/05/2024',
      color: 'USA',
    },
  ]
  
  export default function Gigs() {

    const handleMouseEnter = ()=>{
      
    }
    const handleMouseLeave = ()=>{
      
    }
    return (
      <>
      <NavBar currentPage='gigs'/>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-6xl lg:px-9">
          <h2 className="text-3xl font-bold  text-red-600">Active Events</h2><span className="text-3xl font-bold  text-black-900">Dive into the Coolest Gigs Near You!</span> 
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    )
  }
  
