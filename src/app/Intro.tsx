"use client"

import React from "react";
import { motion } from "framer-motion";
const IntroAni: React.FC = () => {

    return (
        <motion.div className="bg-black w-screen h-screen"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 3
                    }}>
            <div className="text-white w-fit">
                <div className="animate-typing overflow-hidden
                whitespace-nowrap border-r-4 border-r-white pr-5
                text-5xl text-white font-bold">Hello World
                </div>
            </div>
        </motion.div>
    );
}

export default IntroAni;
