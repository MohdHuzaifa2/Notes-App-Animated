import React from 'react'
import { Trash2 } from 'lucide-react'
import { motion } from "motion/react"

const Card = ({ data, obj, reference, setData }) => {

    let options = {
        month: "short",   // Feb
        day: "2-digit",   // 06
        hour: "2-digit",  // 02
        minute: "2-digit",// 28
        hour12: true,     // AM / PM
    };

    let formattedDate = new Intl.DateTimeFormat("en-US", options).format(new Date(obj.dateCreated))

    const deleteNote = () => {
        let arr = [...data];
        arr.splice(data.indexOf(obj), 1)
        setData(arr)

        localStorage.setItem('data', JSON.stringify(arr));
    }

    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.05 }} dragTransition={{
            bounceStiffness: 100,
            bounceDamping: 10
        }} dragElastic={0.9} className='w-66 h-72 rounded-4xl bg-zinc-900 text-zinc-200 tracking-wide flex flex-col overflow-hidden justify-between gap-y-5'>
            <div className="content px-8 pt-8 flex flex-col gap-y-3">
                <h2 className={`text-xl font-semibold ${obj.color}`}>{obj.title}</h2>
                <p className='text-sm h-35 line-clamp-7 overflow-hidden'>{obj.desc}</p>
            </div>
            <div className="footer  flex flex-col text-[15px]">
                <div className="flex px-8 gap-2 items-center justify-between mb-4">
                    <span className='text-zinc-400 text-sm'>{formattedDate}</span>
                    <button onClick={deleteNote} className="p-2.5 bg-red-400/10 rounded-full cursor-pointer">
                        <Trash2 size={20} color='#ff5252' strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default Card