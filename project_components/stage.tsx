import Image from "next/image";
import Link from 'next/link';

export default function Stage({ stage, img, tasks, hash }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Link
          href='#'
        >
            <Image src={img}
                    quality={"100"}
                    width={"700"}
                    height={"510"}
                    alt={stage}
                    className='max-w'>
            </Image> 
            <div className="px-6 py-4">
                <div className="">
                    <p className="font-bold text-xl mb-2">{stage}</p>
                    <ul className="leading-relaxed text-xl">
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                    </ul>
                </div>
            </div>         
        </Link> 
    </div>
  )
}
