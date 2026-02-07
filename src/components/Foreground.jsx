import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = () => {

    let ref = useRef(null);

    const [data, setData] = useState([
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cum commodi provident pariatur cumque soluta dolorem",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen: true, title: "Download Now", color: "bg-blue-600"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, eveniet.",
      fileSize: ".4mb",
      close: false,
      tag: {isOpen: true, title: "Upload Now", color: "bg-green-600"}
    },
  ])

    return (
        <div ref={ref} className="fixed inset-0 h-full p-5 flex flex-wrap gap-5 content-start">
            {data.map((data, index) => (
                <Card key={index} data={data} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground