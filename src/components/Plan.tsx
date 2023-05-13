function createPlan(
    year : string,
    description : string,
) {
    return { year, description };
};
const plan = [
    createPlan('August 2022', 'Finish my degree ✔'),
    createPlan('February 2023', 'Get a Job in my field and hopefully remote or close to my house'),
    createPlan('2024', "Be able to pay half of my dream vehicle cost. My Dream vehicles are all of Tesla's Models."),
    createPlan('2025', 'Travel around'),
    createPlan('2025', 'Be able to fully pay off my car and starting to look for a place to stay'),
    createPlan('2026', 'Be able to afford a house either by renting or mortage'),
];


export default function Plan() {
    return (
        <>
        <div className='text-center'>
        <h1>5 Year Plan</h1>
        <table className="table table-striped">

            <thead>

                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {plan.map((plan) => (
                    <tr key={plan.year}>
                        <td>{plan.year}</td>
                        <td>{plan.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        </div>
        </>
    )
}
