
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import {mainPageContents} from "@/app/card/data";

export default function MainPage() {


    return(
        <div className="animate-slideInFormRight">
            <div className="pc:text-4xl text-2xl p-4 font-bold text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:animate-none animate-bounce">
                {mainPageContents[0].title}
            </div>
            <div className="">
                <div className="mb-5 rounded-l">
                    <h1 className="pc:text-lg p-3 bg-primary-600 rounded-xl mt-3 shadow-2xl"><span className="animate-pulse">💡</span> 안녕하세요! React를 좋아하는 개발자 박병호입니다</h1>
                </div>
            </div>
            <div className="flex mt-5 gap-8 pc:p-5 ml-1">
                <div className="flex-shrink-0">
                    <Image src={'/images/4.jpg'}
                           alt="test"
                           width={210}
                           height={280} className="rounded-xl shadow-2xl "
                    >
                    </Image>
                </div>
                <div className="flex flex-col gap-2 pc:ml-10">
                    <div className="pc:text-xl">
                        {mainPageContents[0].name}
                    </div>
                    <div className="text-sm pc:text-lg">
                        E-MAIL I {mainPageContents[0].email}
                    </div>
                    <div className="text-sm pc:text-lg">
                        GITHUB I
                        <Link href="https://github.com/forexms78" target="_blank"
                              className="border-b hover:text-gray-400"> {mainPageContents[0].github}</Link>
                    </div>
                    <div className="text-sm pc:text-lg">
                        BLOG I <Link href="https://velog.io/@bellboy" target="_blank"
                                     className="border-b hover:text-gray-400">{mainPageContents[0].blog}</Link>
                    </div>
                    <div className="text-sm pc:text-lg">
                        SOLVED I
                        <Link href="https://solved.ac/profile/bellboy78" target="_blank"
                              className="border-b hover:text-gray-400"> {mainPageContents[0].solved}</Link>

                    </div>
                    <div className="text-sm pc:text-lg">
                        MAJOR I {mainPageContents[0].major}
                    </div>
                </div>
            </div>
        </div>
    )
}