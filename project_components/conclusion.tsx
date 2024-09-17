import Image from "next/image";
import Link from 'next/link';

export default function Conclusion({ img, conlusion_title, conclusion_texts }) {
  return (
    <div>
        <div className='flex justify-center'>
        <Image 
            src={img}
            quality={"100"}
            width={"250"}
            height={"900"}
            alt="lessons learned"
            style={{
            borderRadius: "10px",
            }}>
        </Image>  
        </div>
        <h2 className='sm:text-2xl font-semibold text-center mt-4'>{conlusion_title}</h2>
        <ul className='leading-relaxed sm:text-xl list-inside my-3'>
            {conclusion_texts.map((text, index) => (
                <><li key={index}>{text}</li><br></br></>
            ))}
        </ul>
    </div>
  )
}
