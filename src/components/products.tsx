"use client";

import { ProductType } from '@/interfaces'
import Image from 'next/image';
import { profile } from 'console';
import Link from 'next/link';
import { FC } from 'react'
import CustomImage from './image';

const Product: FC<{ product: ProductType}> = ({product}) => {
    
    return (
        <Link 
        href={`/product/${product.id}`}
        className="h-96 flex flex-col p-6 rounded-lg group hover:scale-105 
        transition-transform ease=out duration-200 border ">
          <div className='relative max-h-80 flex-1'>
            <CustomImage product={product} fill  />
          </div>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">    
              {product.category}
             
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 line-clamp-2">
              {product.title}
          </h2>
          <div className="leading-relaxed text-base line-clamp-4">
          <p> ${product.price}</p>
           <p> {product.description}</p>
          </div>
      </Link>
    );
       

    
};

export default Product;