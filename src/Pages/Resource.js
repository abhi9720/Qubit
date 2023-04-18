const posts = [
    {
        id: 1,
        title: 'Core Java',
        href: '#',
        imageUrl:
            'https://flowbite.com/docs/images/blog/image-1.jpg',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        category: 'Marketing'

    }
    ,
    {
        id: 1,
        title: 'C++',
        href: '#',
        imageUrl:
            'https://flowbite.com/docs/images/blog/image-1.jpg',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        category: 'Marketing'

    }
    ,
    {
        id: 1,
        title: 'Git/Github',
        href: '#',
        imageUrl:
            'https://flowbite.com/docs/images/blog/image-1.jpg',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        category: 'Marketing'

    }
    ,
    {
        id: 1,
        title: 'Operating System',
        href: '#',
        imageUrl:
            'https://flowbite.com/docs/images/blog/image-1.jpg',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        category: 'Marketing'

    }
    ,
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        imageUrl:
            'https://flowbite.com/docs/images/blog/image-1.jpg',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        category: 'Marketing'

    }
    // More posts...
]


function Resource() {
    return (
        <div className="bg-gray-50">
            <section className="bg-gray-900 text-white py-20 bg-cover bg-no-repeat bg-fixed  bg-[url('https://r4.wallpaperflare.com/wallpaper/391/415/637/3840x1080-owdlarrd-panoramic-wallpaper-61342abaa08e6552f02203248ebed02d.jpg')]">
                <div className="absolute inset-0 bg-gray-900 opacity-10"></div>


                <div className="container mx-auto mt-14">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Welcome to the Coding Club</h1>

                    <p className="text-lg md:text-xl mb-8 text-center">Want to learn something new? Here are all the resources you might need.</p>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-6 lg:px-8  py-12 sm:py-12">
                <div className="mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Resources For You.</h2>
                    <p className="mt-2 text-2xl text-gray-600 text-center">
                        Empowering aspiring coders with the knowledge and resources to build their skills and careers.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <Card title={post.title} image={post.imageUrl} />
                    ))}
                </div>
            </div>
        </div>
    )
}


const Card = ({ title, image }) => (

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg hover:shadow">
        <a href="/">
            <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
            <a href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>

);

export default Resource