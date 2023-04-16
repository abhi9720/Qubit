import React from 'react'

const Page404 = () => {
    return (
        <section className="bg-white pt-10 flex items-center justify-center">
            <div className="text-center">
                <img className="mx-auto h-64 lg:h-80" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="office content 1" />
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-6xl text-blue-600">404 Not Found
                </h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Whoops! That page doesn’t exist.</p>
                <a href="/" className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</a>
            </div>
        </section>
    )
}

export default Page404
