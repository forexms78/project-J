import * as React from "react";
import {MainContentItem} from "@/app/card/data";

export default function MainContent() {
    return (
        <>
            {MainContentItem.map((item, index) => {
                return (
                    <div className="animate-slideInFormLeft" key={index}>
                        <div className="bg-primary-600 p-3 rounded-xl shadow-2xl pc:text-lg">
                            <h1>{item.title}</h1>
                        </div>
                        <div className="flex flex-col gap-1 ml-5 mb-5 text-sm pc:text-base">
                            <h1>{item.content.map((subItem, subIndex) => (
                                <div key={subIndex}>
                                    <h1 className="pc:text-2xl text-lg mt-3 font-bold text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                                        {subItem.title}
                                    </h1>
                                    <h1>
                                        {subItem.content.map((subSubItem, subSubIndex) => (
                                            <div key={subSubIndex}>
                                                <h1 className="text-lg p-1 ml-2">
                                                    {subSubItem.title}
                                                </h1>
                                                {subSubItem.content?.map((subSubSubItem, subSubSubIndex) => (
                                                    <div key={subSubSubIndex}>
                                                        <h1 className="ml-4 p-1">{subSubSubItem}</h1>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </h1>
                                </div>
                            ))}
                            </h1>
                        </div>
                    </div>
                )
            })}
        </>
    )
}