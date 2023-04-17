import React from "react";

function HeroSection() {
    return (
        <div className="bg-gray-900 text-white py-20 bg-cover bg-no-repeat bg-fixed bg-[url('https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
            <div className="container mx-auto py-6 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Welcome to our Programming Club</h1>
                <p className="text-lg md:text-xl mt-5 text-center whitespace-pre-line">
                    We are a group of passionate programmers who love to code and build amazing things.</p>
                <p className="text-lg md:text-xl mt-5 mb-8 text-center whitespace-pre-line">
                    Join us to learn, grow and connect with like-minded individuals.
                </p>
            </div>
        </div>
    );
}

export default HeroSection;
