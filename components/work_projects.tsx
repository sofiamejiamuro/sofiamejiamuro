"use client";

import Image from "next/image";
import Link from "next/link";

export default function WorkAIProjects({
    project_name,
    product_type,
    description,
    imageUrl,
    url,
}: any) {
  return (
    <div className="
     rounded-xl overflow-hidden shadow-lg bg-violet-100 hover:bg-violet-300 my-5 sm:my-0">
        <Link 
            href={url} 
            >
            <div className=''>
                <Image 
                src={imageUrl}
                quality={"100"}
                width={"1000"}
                height={"900"}
                alt={project_name}
                style={{
                }}>
                </Image> 
            </div>
            <div className="px-6 py-4">
                <h2 className="text-xl font-bold text-gray-700">{project_name}</h2>
                <p className="text-gray-700 text-xl">{product_type}</p>
                <p className="text-gray-700">
                {description}
                </p>
            </div>
        </Link>   
    </div>
  );
}
