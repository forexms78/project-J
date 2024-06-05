"use client"

import Intro from "@/app/Intro";
import { motion } from "framer-motion";
import React from "react";
import {useRouter} from "next/navigation";

const IntroPage = () => {
    const [intro1, setIntro1] = React.useState(true)
    const [intro2, setIntro2] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        setTimeout(()=>{
            setIntro1(false)
            setIntro2(true)
            setTimeout(()=>{
                setIntro2(false)
                router.push('/card')
            },5000)
        },
            12000
        )
    }, []);


    return(
        <div className="bg-black w-full h-full flex justify-center items-center">
            {intro2 && (
                <motion.div
                    className="box h-[300px] w-[300px] bg-gray-700"
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />
            )}
            {intro1 && (
                <Intro/>
            )}
        </div>
    )
}

export default IntroPage;