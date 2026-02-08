import React, { useEffect, useRef, useState } from 'react'
import { PlusIcon } from 'lucide-react'
import Card from './Card'

const Foreground = () => {

    let ref = useRef(null);

    const [data, setData] = useState([])

    let btnHandler = () => {
        let title = prompt("Enter note's title");
        let desc = prompt("Enter notes description")

        if (title && desc) {
            setData(prev => (
                [...prev, { id: crypto.randomUUID(), title: title, desc: desc, dateCreated: new Date(), color: "text-red-500" }]
            ))
        }

        localStorage.setItem('data', JSON.stringify([...data, { id: crypto.randomUUID(), title: title, desc: desc, dateCreated: new Date(), color: "text-red-500" }]))
    }

    useEffect(() => {
        if (localStorage.getItem('data')) {
            let dataFromLocalStorage = JSON.parse(localStorage.getItem('data'));
            setData([...dataFromLocalStorage])
        }
    }, [])

    return (
        <div ref={ref} className="foreground fixed inset-0 h-full p-5 flex flex-wrap gap-5 content-start overflow-auto">
            {data.map((obj, index) => (
                <Card key={index} data={data} obj={obj} reference={ref} setData={setData} />
            ))}
            <button onClick={btnHandler} className="create p-4 bg-green-400 rounded-full fixed bottom-12 right-12 z-10 text-zinc-900">
                <PlusIcon size={48} strokeWidth={2.25} />
            </button>
        </div>
    )
}

export default Foreground