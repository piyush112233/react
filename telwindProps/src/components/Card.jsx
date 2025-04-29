import React from 'react'

function Card(props) {
  // console.log("props", props.someObjec.name);
  let nameValue = props?.someObjec?.name || "T-SHIRT";
  let price = props?.someObjec?.price || "10$"
  let color = props?.someObjec?.color || "Yellow"
  let image = props?.someObjec?.image || "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg"
  return (
    <div>
      <div className="group relative">
        <img src={image} alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-grey-700"><a href="#"><span aria-hidden="true" className="absolute inset-0"></span>{nameValue} </a></h3>
            <p className="mt-1 text-sm text-gray-500">{color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{price}</p>
        </div>
      </div>
    </div >
  )
}

export default Card