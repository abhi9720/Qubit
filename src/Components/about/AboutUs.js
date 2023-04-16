import React from "react";
import styles from './about.module.css'
const AboutUs = () => {
    return (
        <section className={`${styles.aboutsection} bg-gray-100 flex flex-col justify-center items-center`}>
            <div className="container mx-auto px-4 w-full lg:w-3/5 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">About Qubit</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Qubit is a vibrant coding community at NIT Manipur that aims to create a welcoming and enthusiastic learning environment for those interested in coding.
                    Qubit strives to equip members with the necessary skills to become excellent programmers through a variety of events such as coding challenges, hackathons, workshops, and expert guest lectures. Members are also encouraged to share their coding knowledge and experiences by writing articles and blog posts and thus contributing to the larger coding community. Qubit is more than just a community; it's a family that encourages and supports one another in their coding endeavours.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
