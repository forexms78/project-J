"use client"

import React from "react";
import {motion} from "framer-motion";

const IntroAni: React.FC = () => {
    const [first, setFirst] = React.useState(false)
    const [second, setSecond] = React.useState(false)
    const [third, setThird] = React.useState(false)


    React.useEffect(() => {
        setTimeout(() => {
            setFirst(true)
            setTimeout(() => {
                setSecond(true)
                setTimeout(() => {
                    setThird(true)
                }, 3000)
            }, 2500)
        }, 2000)
    }, [])

    return (
        <motion.div className="bg-black w-screen h-screen p-20"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 3
                    }}>
            <div className="text-white w-fit flex flex-col gap-5">

                {first && (
                    <div className="animate-typing overflow-hidden
                whitespace-nowrap border-r-4 border-r-white pr-5
                text-9xl text-white font-bold">
                        front-end developer
                    </div>)}
                {second && (
                    <div className="h-[200px] animate-typing overflow-hidden
                whitespace-nowrap border-r-4 border-r-white pr-5
                text-9xl text-white font-bold">Byung-ho Park
                    </div>)}
                {third && (<div className="animate-typing overflow-hidden
                whitespace-nowrap border-r-4 border-r-white pr-5
                text-7xl text-white font-bold">
                    React, TypeScript, Next.js tailwind
                </div>)}

            </div>
        </motion.div>
    );
}

export default IntroAni;
