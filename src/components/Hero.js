'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import '../styles/globals.css';

function Hero() {
    const heroRoll = [
        { id: 1, img: '/1.jpeg' },
        { id: 2, img: '/11.jpeg' },
    ];

    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % heroRoll.length;
            slider.style.transform = `translateX(-${index * 100}%)`;
        }, 4000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full min-h-[60vh] flex justify-between items-center gap-3 p-4 bg-slate-200">
            {/* Left Content */}
            <article className="flex flex-col gap-4 w-[50%] justify-start items-baseline p-5">
                <h1 className="text-[3rem] font-[900]">
                    The right <span className="text-emerald-600">Handyman</span> for the <span className="text-emerald-600 underline-offset-4 underline">Job</span>.
                </h1>
                <p className="text-lg text-slate-600">
                    From flooring to ceiling, indoors to outdoors, security and more... I am the right man for the job!
                </p>
                <button className="px-8 py-3 rounded-[3rem] bg-emerald-600 text-white">Contact Me</button>
                <section className="flex gap-8 py-8">
                    <article>
                        <h3 className="font-semibold text-[2rem]">50+</h3>
                        <p>Completed jobs over the last 2 years</p>
                    </article>
                    <article>
                        <h3 className="font-semibold text-[2rem]">50+</h3>
                        <p>Satisfied Customers</p>
                    </article>
                </section>
            </article>

            {/* Right - Hero Slider */}
            <article className="w-[50%] bg-slate-800 overflow-hidden relative">
                <div ref={sliderRef} className="flex w-full h-full transition-transform duration-700 ease-in-out">
                    {heroRoll.map((item) => (
                        <Image
                            key={item.id}
                            src={item.img}
                            alt="Hero image"
                            width={0} // Set width to 0
                            height={0} // Set height to 0
                            sizes="100vw" // Set sizes to 100vw
                            style={{ width: '100%', height: 'auto' }} 
                            className="object-cover rounded-lg"
                        />
                    ))}
                </div>
            </article>
        </section>
    );
}

export default Hero;
