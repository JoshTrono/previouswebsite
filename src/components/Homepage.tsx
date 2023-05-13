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
    createExperience('Beacon Software Solutions', "Assisted with answering phone call and emails with law enforcement. Worked on SQL to help fix our jail software to work with each individuals client's database."),
    createExperience('J-Tay Consulting Software Development', "* Provided project support in software development including program to transfer electronic health records data to standardized forms for physician’s office * Utilized C#"),
    createExperience('Citrus County School Board Help Desk Intern', '* Assisted Information Technology department to update software on teachers computers and repaired student Ipads'),
    createExperience('College Of Central Florida', '* Assist IT students with classwork including Microsoft Office suite, A+ Fundamentals, and Web Programming'),
];


export default function Homepage() {
    return (
        <>
        <div className='text-center'>
        <img src={picture} className="img-fluid" alt="Responsive image" />
        </div>
        <div className="row">
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Degree</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.degree}>
                            <td>{row.degree}</td>
                            <td>{row.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {experience.map((experience) => (
                        <tr key={experience.company}>
                            <td>{experience.company}</td>
                            <td>{experience.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map((skills) => (
                        <tr key={skills.skill}>
                            <td>{skills.skill}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
        </>
    )
}
