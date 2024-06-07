import * as React from "react";
import Image from "next/image";

export default function Header() {
    return(
        <>
            <header className="flex justify-between">
                <div className="">
                    <div className="flex justify-center mt-5 gap-8">
                        <Image src={'/images/next.png'}
                               alt="test"
                               width={50}
                               height={50}
                               className="bg-white rounded-full"
                        />
                        <Image src={'/images/tailwind.svg'}
                               alt="test"
                               width={50}
                               height={50}
                        />
                    </div>
                </div>
                <div className="text-center">

                </div>
                <div className="text-end">

                </div>
            </header>
        </>
    )
}