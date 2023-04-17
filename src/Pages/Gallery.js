import React from 'react';
import GalleryCarousel from '../Components/carousel/Carousel';

function Gallery() {
    return (
        <>

            <section className="relative bg-gray-900 text-white py-20 px-4 md:px-20 lg:px-40 xl:px-80 bg-cover bg-no-repeat bg-fixed bg-[url('https://freelinkedinbackgrounds.com/wp-content/uploads/2015/01/Technology-007.jpg')] bg-gray-800 backdrop-filter backdrop-opacity-20">
                <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
                <div className="container">
                    <h1 className="text-3xl text-center md:text-5xl font-bold mb-4">Welcome to the Coding Club Gallery</h1>
                    <p className="text-2xl mb-8 text-center">Browse Our Beautiful Momets</p>
                </div>
            </section>



            <GalleryCarousel />

        </>
    );
}



export default Gallery;
