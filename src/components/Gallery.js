'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const photos = [
    { id: 1, img: '/2.jpeg', location: 'Minnesota' },
    { id: 2, img: '/3.jpeg', location: 'Minnesota' },
    { id: 3, img: '/4.jpeg', location: 'Minnesota' },
    { id: 4, img: '/5.jpeg', location: 'Minnesota' },
    { id: 5, img: '/6.jpeg', location: 'Minnesota' },
    { id: 6, img: '/7.jpeg', location: 'Minnesota' },
    { id: 7, img: '/8.jpeg', location: 'Minnesota' },
    { id: 8, img: '/9.jpeg', location: 'Minnesota' },
    { id: 9, img: '/10.jpeg', location: 'Minnesota' },
    { id: 10, img: '/12.jpeg', location: 'Minnesota' },
];

function Gallery() {
    const [selectedLocation, setSelectedLocation] = useState('All');

    // Filter photos based on the selected location
    const filteredPhotos = selectedLocation === 'All' 
        ? photos 
        : photos.filter(photo => 
            selectedLocation === 'Minnesota' 
                ? photo.location === 'Minnesota' 
                : photo.location !== 'Minnesota'
        );

    return (
        <section id='view-work' className="min-h-[90vh] w-full flex flex-col gap-5 p-5">
            <h3 className="text-3xl font-semibold">Latest Work</h3>

            {/* Buttons to filter photos */}
            <article className='flex gap-4'>
                <button 
                    className={`rounded-[2rem] px-7 py-1 ${selectedLocation === 'All' ? 'bg-emerald-500 text-white' : 'bg-emerald-100'}`}
                    onClick={() => setSelectedLocation('All')}
                >
                    View All
                </button>
                <button 
                    className={`rounded-[2rem] px-7 py-1 ${selectedLocation === 'Minnesota' ? 'bg-emerald-500 text-white' : 'bg-emerald-100'}`}
                    onClick={() => setSelectedLocation('Minnesota')}
                >
                    Minnesota
                </button>
                <button 
                    className={`rounded-[2rem] px-7 py-1 ${selectedLocation === 'Other' ? 'bg-emerald-500 text-white' : 'bg-emerald-100'}`}
                    onClick={() => setSelectedLocation('Other')}
                >
                    Other States
                </button>
            </article>

            {/* Display filtered images */}
            <article className='grid grid-cols-3 grid-rows-3 gap-4 border p-5 bg-slate-200'>
                {filteredPhotos.map((photo) => (
                    <Image 
                        key={photo.id}
                        src={photo.img} 
                        alt="alt" 
                        width={400} 
                        height={600} 
                        className='border border-black'
                    />
                ))}
            </article>
        </section>
    );
}

export default Gallery;
