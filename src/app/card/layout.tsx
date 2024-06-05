import { FC, ReactNode } from "react";
import CardNav from "@/app/card/CardNav";

const CardPageLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="w-full h-full bg-gray-700">
            <CardNav/>
            {children}
        </div>
    );
};

export default CardPageLayout;