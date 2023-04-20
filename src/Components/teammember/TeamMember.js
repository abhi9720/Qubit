import React from 'react'
const people = [
    {
        name: 'Abhishek Tiwari',
        role: 'Mentor',
        imageUrl:
            'https://media.licdn.com/dms/image/C4D03AQEGiE8VPqQEbg/profile-displayphoto-shrink_800_800/0/1656847535775?e=1687392000&v=beta&t=Oo7ZSVee_ZHKNTCQaQQYOnzqn-JNEMOymgY21iRSHsk',
    },
    {
        name: 'Mayank Raj',
        role: 'Mentor',
        imageUrl:
            'https://media.licdn.com/dms/image/C5603AQEqmRGHHif-TQ/profile-displayphoto-shrink_800_800/0/1623778843080?e=1687392000&v=beta&t=k_ksn2z4_9gkW3X-datcU8-7TNjDqi7LemxIJwbvYA4',
    },
    {
        name: 'Hemant Patidar',
        role: 'Mentor / Coordinator',
        imageUrl:
            'https://media.licdn.com/dms/image/C4D03AQGU-DPLrlJ0GQ/profile-displayphoto-shrink_800_800/0/1659515506206?e=1687392000&v=beta&t=sadXp7eloM8-FvIDsbiCCIfEZ1s-iQMIcwtqePevfNQ',
    },
    {
        name: 'Abhishek Kumar',
        role: 'Coordinator',
        imageUrl:
            'https://media.licdn.com/dms/image/D5603AQFGJT9VH5ZFAg/profile-displayphoto-shrink_800_800/0/1676654837470?e=1687392000&v=beta&t=Z1_cz4LNDoZvOTxDhnmKaYJRjwfIrogV4ZK2QRrmwYE',
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