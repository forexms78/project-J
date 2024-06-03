"use client"

import { motion } from 'framer-motion';
import React from "react";

const TypingComponent = () => {
    const [word, setWord] = React.useState('');
    let sentence = '안녕하세요! 예제입니다.';
    const currentIndex = React.useRef(0);
    React.useEffect(() => {
        const timerId = setInterval(() => {
            setWord((state) => {
                const newState = (state += sentence[currentIndex.current]);
                currentIndex.current += 1;
                return newState;
            });
        }, 100);

        return () => clearTimeout(timerId);
    }, [sentence]);

    return (
        <>
            <p>{word}</p>
        </>
    );
};
const IntroAni: React.FC = () => {
    const [word, setWord] = React.useState('');

    TypingComponent()
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
            <span className="text-white">
                {word}
            </span>
        </motion.div>
    );
}

export default IntroAni;
