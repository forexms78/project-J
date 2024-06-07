import Image from "next/image";
import * as React from "react";
import {useModalStore, useModalStore2} from "@/hooks/modal.store";
import Link from "next/link";

export default function PortFolio() {

    const modal = useModalStore();
    const modal2 = useModalStore2();

    const handleOpen = () => {
        modal.setIsOpen(true);
    }

    const handleOpen2 = () => {
        modal2.setIsOpen(true);
    }


    return (

        <div className="animate-slideInFormRight">
            <div className="m-5 bg-primary-600 p-3 rounded-xl shadow-2xl text-lg">
                <h1> 🚪 포트폴리오</h1>
            </div>

            <div className="m-5 mb-24">
                <div className="grid pc:grid-cols-3 pc:grid-rows-2 gap-5">
                    <div
                        className="shadow-lg rounded-3xl bg-primary-600 hover:shadow-2xl hover:border-2 hover:border-gray-700  ">
                        <Image src={'/images/model.png'}
                               alt="test"
                               width={210}
                               height={280}
                               onClick={handleOpen}
                               className="rounded-t-3xl w-full h-40 object-cover p-2"
                        />
                        <div className="m-3 flex pc:flex-col justify-between">
                            <span className="col-span-3 font-bold">Spoti music</span>
                            <span className="col-span-3 text-gray-500">음악 스트리밍 사이트</span>
                            <div className="flex  pc:justify-end justify-between">
                                <Link className="block text-gray-500 text-sm mr-3"
                                      href="https://github.com/forexms78/spoti-music"
                                      target="_blank">github</Link>
                                <Link className="block text-gray-500 text-sm"
                                      href="https://spoti-music-eight.vercel.app/"
                                      target="_blank">demo</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="shadow-lg rounded-3xl bg-primary-600 hover:shadow-2xl hover:border-2 hover:border-gray-700  ">
                        <Image src={'/images/model2.png'}
                               alt="test"
                               width={210}
                               height={280}
                               onClick={handleOpen2}
                               className="rounded-t-3xl w-full h-40 object-cover p-2"
                        />
                        <div className="m-3 flex pc:flex-col justify-between">
                            <span className="col-span-3 font-bold">Passion Talk!</span>
                            <span className="col-span-3 text-gray-500">실시간 메신저</span>
                            <div className="flex  pc:justify-end justify-between">
                                <Link className="block text-gray-500 text-sm mr-3"
                                      href="https://github.com/forexms78/messenger-beta"
                                        target="_blank">github</Link>
                                <Link className="block text-gray-500 text-sm"
                                      href="https://messenger-beta-henna.vercel.app/"
                                      target="_blank">demo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}