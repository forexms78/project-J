'use client'

import * as React from 'react';
import Nav from "@/app/card/nav";
import Header from "@/app/card/header";
import MainPage from "@/app/card/main";
import MainContent from "@/app/card/mainContent";
import PortFolio from "@/app/card/portfolio";


export default function Home() {


    return (
        <div className="grid md:grid-cols-4 bg-bg-100 text-text-100">
            <Nav />
            <div className="md:col-span-4 flex flex-col justify-center items-center">
                <Header />
                <main className="grid mt-32 max-w-3xl">
                    <MainPage />
                    <MainContent />
                    <PortFolio />
                </main>
            </div>
        </div>
    );
}