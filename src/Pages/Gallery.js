import React from 'react';
import CarouselGallery from '../Components/carousel/Carousel';

function Gallery() {
    return (
        <div className='bg-gray-50'>

            <section className="bg-gray-900 text-white py-20 bg-cover bg-no-repeat bg-fixed bg-[url('https://r4.wallpaperflare.com/wallpaper/947/879/731/3840x1080-owdlarrd-panoramic-wallpaper-d7a84885382bf2a808ad2ebf3801d5a0.jpg')]">
                {/* <div className="absolute inset-0 bg-gray-900 opacity-20"></div> */}
                <div className="container">
                    <h1 className="text-3xl text-center md:text-5xl font-bold mb-4">Welcome to the Coding Club Gallery</h1>
                    <p className="text-2xl mb-8 text-center">Relive the magic of our coding events and celebrate the achievements of our community.</p>
                </div>
            </section>



            <CarouselGallery />

        </div>
    );
}



export default Gallery;
