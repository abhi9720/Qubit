import React from 'react'
import HeroSection from '../Components/herosection/HeroSection'
const projects = [
    {
        id: 1,
        title: "Project 1",
        description:
            "React Photo Gallery · Responsive, accessible, composable, and customizable image gallery component · Maintains the original aspect ratio of your photos · Creates a ..",
        imageUrl: "https://cdn.dribbble.com/userupload/6311293/file/original-cf072f14db0720f1a126240e8953ddd6.png?compress=1&resize=1504x1128",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
    },
    {
        id: 2,
        title: "Project 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, purus at ultricies suscipit, sapien metus fringilla mauris, et pellentesque massa ex ut leo. Sed blandit, velit vel auctor mattis, nibh eros commodo arcu, in vestibulum lectus nisi vel quam.",
        imageUrl: "https://cdn.dribbble.com/userupload/6320510/file/still-454ddb5750329bcb4c101d8c8594d33d.png?compress=1&resize=400x300&vertical=top",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
    },
    {
        id: 3,
        title: "Project 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, purus at ultricies suscipit, sapien metus fringilla mauris, et pellentesque massa ex ut leo. Sed blandit, velit vel auctor mattis, nibh eros commodo arcu, in vestibulum lectus nisi vel quam.",
        imageUrl: "https://cdn.dribbble.com/userupload/6310792/file/original-639df6fb6fcfb3c17e6258dc41c4ea16.jpg?compress=1&resize=400x300&vertical=top",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
    },
];

function ProjectCard({ project }) {
    return (
        <div className="mx-2 my-2 lg:mx-0 lg:my-0 flex flex-col lg:flex-row border-b border-gray-200">
            <div className="p-8 lg:w-1/2">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex flex-col p-6 lg:w-1/2">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="mb-4 whitespace-pre-line">{project.description}</p>
                <div className="flex">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-2">
                        View Live
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
}


const Documentation = () => {
    return (
        <>
            <HeroSection />

            <div className="container mx-auto lg:px-10 sm:px-0 py-10">
                <div className="grid grid-cols-1 gap-4">
                    {projects.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Documentation