import React from "react";
import styles from './about.module.css'
const AboutUs = () => {
    return (
        <section className={`${styles.aboutsection} bg-gray-100 flex flex-col justify-center items-center`}>
            <div className="container mx-auto px-4 w-full lg:w-3/5 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">About Qubit</h2>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                    The Coding Club of NIT Manipur is a dynamic community that promotes and fosters a passion for coding. Through various events like coding challenges, workshops, and hackathons, the club provides opportunities for members to enhance their programming skills and knowledge. With the belief that great things can be accomplished through a series of small things, the club encourages members to share their experiences and expertise through writing articles and blog posts, contributing to the larger coding community. As a close-knit family, the club provides an enthusiastic and supportive learning environment for those interested in coding.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
