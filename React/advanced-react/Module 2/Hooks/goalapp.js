import React from "react";

function GoalForm(props) {

}

function ListOfGoals(props) {
    return (
        <ul>
            {props.allGoals.map((g) => (
                <li key={g.goal}>
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li>
            ))}
        </ul>
    )
}

export default function App() {
    const [allGoals, updateAllGoals] = React.useState([]);

    function addGoal(goal) {updateAllGoals([...allGoals, goal]);}

    return (
        <div className="App">
        <GoalForm onAdd={addGoal}/>
        <ListOfGoals allGoals={allGoals}/>
        </div>
    )
}