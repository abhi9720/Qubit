import React, { useState } from 'react';
import { Carousel } from 'react-carousel-minimal';

const CarouselGallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const carouselImage = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg"

        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",

        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",

        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",

        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",

        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",

        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",

        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",

        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",

        }
    ];
    const galleryImages = [
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
            alt: 'Image 1',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
            alt: 'Image 2',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
            alt: 'Image 3',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg',
            alt: 'Image 4',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg',
            alt: 'Image 4',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg',
            alt: 'Image 4',
        }
    ];

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1;
            setSelectedImage(galleryImages[newIndex].src);
            return newIndex;
        });
        console.log(selectedImageIndex)
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => {
            const newIndex = prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1;
            setSelectedImage(galleryImages[newIndex].src);
            return newIndex;
        });
    };

    const handleClick = (image, index) => {
        setSelectedImage(image.src);
        setSelectedImageIndex(index);
        setShowModal(true);
    };

    return (
        <>





            <Carousel
                data={carouselImage}
                time={2000}
                width="900px"
                height="400px"
                // radius="10px"
                slideNumber={true}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                    boxSizing: "border-box",
                    textAlign: "center",
                    maxWidth: "900px",
                    maxHeight: "600px",
                    margin: "40px auto",
                    padding: "20px",
                    backgroundColor: "#fff",
                    // boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
                }}
            />




            <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-12 border-t border-gray-200">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center mb-10">Gallery Photos 📷</h1>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                        <div className='block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 relative'>

                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className="object-cover w-full h-full rounded-lg cursor-pointer"

                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                                <button onClick={() => handleClick(image, index)} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Preview</button>
                            </div>
                        </div>
                    ))}
                </div>
                {showModal && (
                    <div className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center flex-col">
                        <div
                            className="bg-white absolute top-0 left-0 w-full h-full transition-opacity opacity-7"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="bg-gray-50 border border-gray-200 shadow rounded-lg overflow-hidden absolute bottom-6 lg:w-4/5 sm:w-auto h-5/6 flex items-center justify-center pt-6">
                            <img src={selectedImage} alt={selectedImage} className='h-5/6 max-w-11/12' />
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white py-2 px-4 rounded-lg">
                                X
                            </button>




                            <button
                                onClick={handlePrev}
                                className="absolute top-1/2 left-0 ml-2 bg-blue-700 text-white py-2 px-4 rounded-lg transform -translate-y-1/2"
                            >
                                Prev
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute top-1/2 right-0 mr-2 bg-blue-700 text-white py-2 px-4 rounded-lg transform -translate-y-1/2"
                            >
                                Next
                            </button>


                        </div>


                    </div>
                )}
            </div>
        </>

    );
};

export default CarouselGallery;
