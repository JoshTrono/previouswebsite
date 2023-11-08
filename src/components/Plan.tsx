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
        <section className="section has-background-dark" style={{ top: 0, left:0 , width: "100%", height: "100%" }}>
            <div className="container">
                <h1 className="title is-3 has-text-centered mb-4">5 Year Plan</h1>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Description</th>
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
        </section>
    );
}
