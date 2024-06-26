import { ProductType } from '@/types/ProductType'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product }: { product: ProductType }) {
    const blurDataURL = "data:image/webp;base64,UklGRs4CAABXRUJQVlA4WAoAAAAgAAAAnwAAnwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg4AAAADAMAJ0BKqAAoAA+7W6vVamlo6MhVAoRMB2JaW7dfv8bCEAAMwAwZByNKo25AdWm9U5eWlb3lx2DeDHc08kWakPJypzwdLPfsyljoFVJap3tKBLFBxVPUzf3Jsv7DvlpVzPu/kdV+n93e4AA/u2wiuTEhisVj9cNacazgpJ+TJzOLMFE8rUdoapAeblQ4w6R1h2+EMvtvTy+FfiUQZGYFhj9XYydgqpxbB3mNxe2ScxNrKhUJTszxqNvbIIDVxQKXo6Ls2EFyM4vQ8QEYLNaCzlYigICXk+4huKejb/2QAAA";
    return (
        <div className='flex gap-4 items-center justify-center '>
            <div className="card w-96 bg-black shadow-xl relative bg-opacity-90">
                <figure className="relative">
                    <Image
                        src={product.image}
                        alt={product.slug}
                        width={500}
                        height={500}
                        className="object-cover pointer-events-none"
                        placeholder='blur'
                        blurDataURL={blurDataURL}

                    />
                    <div className=" hidden lg:card-actions justify-center absolute bottom-4 left-1/2   text-[#272A2D] ">
                        <p className="badge badge-sm   badge-outline  ">{product.brand}</p>
                        <p className="badge badge-sm badge-outline  " >{product.category}</p>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>


                    <span className='flex  items-center space-x-3 '>
                        <p >{product.description}</p>
                        <p  >${product.price}</p>
                    </span>


                    {/* Button */}
                    <Link
                        href={`/product/${product.slug}`}
                        className="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                    >
                        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease" />
                        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md" />
                            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md" />

                        </span>
                        <span className="relative text-white flex space-x-4">
                            <ShoppingCart />
                            <p className="hidden group-hover:flex">buy</p>
                        </span>
                    </Link>






                </div>
            </div>
        </div>
    )
}
