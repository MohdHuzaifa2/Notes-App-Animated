import React from 'react'
import { FileText, X, Download } from 'lucide-react'
import { motion } from "motion/react"

const Card = ({ data, reference }) => {

    console.log(data.tag.color)

    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragTransition={{
            bounceStiffness: 100,
            bounceDamping: 10
        }} dragElastic={0.9} className='w-66 h-72 rounded-4xl bg-zinc-900 text-zinc-200 tracking-wide flex flex-col overflow-hidden justify-between'>
            <div className="content px-8 pt-8 flex flex-col gap-y-5">
                <FileText size={20} strokeWidth={2.25} />
                <p className='text-sm h-25 line-clamp-5 overflow-hidden'>{data.desc}</p>
            </div>
            <div className="footer  flex flex-col text-[15px]">
                <div className="flex px-8 gap-2 items-center justify-between mb-4">
                    <span>{data.fileSize}</span>
                    <button className="p-2.5 bg-zinc-600 rounded-full">
                        {data.close ? <X size={16} strokeWidth={2.75} /> : <Download size={16} strokeWidth={2.75} />}
                    </button>
                </div>
                {data.tag.isOpen ? <button className={`tag p-3 cursor-pointer font-medium text-sm text-center ${data.tag.color}`}>{data.tag.title}</button> : null}
            </div>
        </motion.div>
    )
}

export default Card