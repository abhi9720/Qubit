import React from 'react'
const people = [
    {
        name: 'Abhishek Tiwari',
        role: 'Mentor',
        imageUrl:
            '/assets/coordinate/abhi9720.jpg',
    },
    {
        name: 'Mayank Raj',
        role: 'Mentor',
        imageUrl:
            '/assets/coordinate/mayank.jpg',
    },
    {
        name: 'Atul Sharma',
        role: 'Mentor',
        imageUrl:
            '/assets/coordinate/atul.jpg',
    },
    {
        name: 'Hemant Patidar',
        role: 'Mentor / Coordinator',
        imageUrl:
            '/assets/coordinate/hemu.jpg',
    },
    {
        name: 'Abhishek Kumar',
        role: 'Coordinator',
        imageUrl:
            '/assets/coordinate/abhishek.jpg',
    },
    // {
    //     name: 'Leslie Alexander',
    //     role: 'Co-Founder / CEO',
    //     imageUrl:
    //         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    // },
    // {
    //     name: 'Leslie Alexander',
    //     role: 'Co-Founder / CEO',
    //     imageUrl:
    //         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    // },
    // {
    //     name: 'Leslie Alexander',
    //     role: 'Co-Founder / CEO',
    //     imageUrl:
    //         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    // },
    // {
    //     name: 'Leslie Alexander',
    //     role: 'Co-Founder / CEO',
    //     imageUrl:
    //         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    // }
]
const TeamMember = () => {
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        At Qubit, we believe that coding is an essential skill for the future, and our coding club is designed to help members develop their coding proficiency, expand their professional network, and gain real-world experience.
                        Here we all are trying our best to get you learn all the essential skills and help you to get better vision in career.
                        </p>
                    </div>
                    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )

}

export default TeamMember