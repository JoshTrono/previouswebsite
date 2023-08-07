import picture from '../images/Picture1.jpg';

function createData(
    degree: string,
    date: string,
) {
    return { degree, date };
}

const rows = [
    createData('Bachelors of Applied Science - Business and Organizational Management - Management Information Systems Specialist', '2020-2022'),
    createData('Associate in Arts', '2022'),
    createData('Associate in Science - Computer Information Technology', '2018-2020'),
];

function createSkills(
    skill: string,
) {
    return { skill };
}
const skills = [
    createSkills('Computer Information Technology'),
    createSkills('Information Tech Analsis'),
    createSkills('Help Desk Support Technician'),
    createSkills('Information Tech Support Specialist'),
    createSkills('Computer Programming Specialist'),
    createSkills('Network Security'),
    createSkills('Comptia A+, Network+, Security+'),
    createSkills('Microsoft Office Specialist'),
    createSkills('Testout PC Pro, Switching Pro, Networking Pro'),
    createSkills('Experience with SQL'),
    createSkills('Basic proficiency in Java, Python, C# programming languages'),
];

function createExperience(
    company: string,
    description: string,
) {
    return { company, description };
}
const experience = [
    createExperience('Revature Full-Stack Developer', 'I got trained with ruby, java, html, css, SQL, React and Angular. I worked on small projects with each of these technologies.'),
    createExperience('Beacon Software Solutions', "Assisted with answering phone call and emails with law enforcement. Worked on SQL to help fix our jail software to work with each individuals client's database."),
    createExperience('J-Tay Consulting Software Development', "* Provided project support in software development including program to transfer electronic health records data to standardized forms for physician’s office * Utilized C#"),
    createExperience('Citrus County School Board Help Desk Intern', '* Assisted Information Technology department to update software on teachers computers and repaired student Ipads'),
    createExperience('College Of Central Florida', '* Assist IT students with classwork including Microsoft Office suite, A+ Fundamentals, and Web Programming'),
];



export default function Homepage() {
    return (
        <>
                <div className='flex flex-wrap'>
                    <img src={picture} className="lg:w-1/2 md:w-1/2 w-full items-center" alt="" />
                    <table className="table-auto lg:w-1/2 md:w-1/2 w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Degree</th>
                                <th className="px-4 py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.degree}>
                                    <td className="border px-4 py-2">{row.degree}</td>
                                    <td className="border px-4 py-2">{row.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-wrap">
                    <table className="table-auto lg:w-1/2 md:w-1/2 w-full bg-blue-200 md:bg-white lg:bg-white">

                        <thead>
                            <tr>
                                <th className="px-4 py-2">Experience</th>
                            </tr>
                        </thead>
                        <tbody>
                            {experience.map((experience) => (
                                <tr key={experience.company}>
                                    <td className="border px-4 py-2">{experience.company}</td>
                                    <td className="border px-4 py-2">{experience.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table className="table-auto lg:w-1/2 mg:w-1/2 w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skills.map((skills) => (
                                <tr key={skills.skill}>
                                    <td className="border px-4 py-2">{skills.skill}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </>
    )
}
