import React from 'react';
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObjec = {
    color: "Red",
    type: "V neck",
    size: "XXL",
    name: "PUMA V Neck T-SHIRT",
    price: "$50",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
  }
  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl'>This is Telwind Test</h1>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <Card channel="Chai Or Code" someObjec={myObjec} />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
