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
        <h1 className="text-3xl font-bold mb-4">5 Year Plan</h1>
        <table className="table-auto w-full">

            <thead>

                <tr>
                    <th className="px-4 py-2">Year</th>
                    <th className="px-4 py-2">Description</th>
                </tr>
            </thead>
            <tbody>
                {plan.map((plan) => (
                    <tr key={plan.year}>
                        <td className="border px-4 py-2">{plan.year}</td>
                        <td className="border px-4 py-2">{plan.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        </div>
        </>
    )
}
