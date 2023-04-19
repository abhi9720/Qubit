import React from "react";


function HeroSection() {
    return (
        <div className="bg-gray-900 text-white py-20 bg-cover bg-no-repeat  bg-[url('https://r4.wallpaperflare.com/wallpaper/980/231/735/3840x1080-owdlarrd-panoramic-wallpaper-a1e43a0a20aed542e0422384ce2ef0dd.jpg')] ">
            <div div className="container mx-auto py-6 px-4" >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Welcome to our Coding Club</h1>
                <p className="text-lg md:text-xl mt-5 text-center whitespace-pre-line">
                    We are a group of passionate programmers who love to code and build amazing things.</p>
                <p className="text-lg md:text-xl mt-5 mb-8 text-center whitespace-pre-line">
                    Join us to learn, grow and connect with like-minded individuals.
                </p>
            </div >
        </div >
    );
}

export default HeroSection;
