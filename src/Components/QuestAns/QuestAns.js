import React from 'react';
import './QuestAns.css';

const QuestAns = () => {
    return (
        <div className='qa-container'>
            <h2>Q.A Section</h2>
            <hr />
            <h3>How React Works?</h3>
            <p>React is a JavaScript Library, that works with declarative codes. Like while using react we can imaging how it will be shown in the UI. We can creat Components as much as we want and these are like functional element. We can use JavaScript logic and JSX inside these functional component. React works with it's Virtual DOM. Virtual DOM is a soft copy or a minified version of the Browser DOM. For every changes in code, Virtual DOM creates a copy for that change and compares it with the previous copy to see the differences between two copies through React Diff Algorithm. After triggering the changes the Virtual DOM updates the Browser DOM by rendering the code into the Browser DOM.</p>
            <h3>Difference Between Props and State?</h3>
            <p>
            • Props are used to pass data from one Component to another Component. And We can change or store data through State in a particular Component.
            <br />
            • The State can not be pass from one Component to another. But we can pass Props from One Component to another, Uni directionally.
            <br /> 
            • Props values are read only values. These can not be modified in child components. But we can modify or update the State value.
            <br />
            • The State value changes can be asynchronous.
            </p>
            <h3>How useState Works?</h3>
            <p>useState is a React Hook. It contains a variable and a function to update the variable. That means, the useState hook allow us to change or update data.
                <br />
                For Example: <br />
                <code>
                const [variable, setVariable] = useState(initial value if needed);
                </code>
                <br /> In this code, in variable the data / value will store. And the setVariable function will update the variable data if needed. And we have to give a initial value to the variable if needed.
            </p>
        </div>
    );
};

export default QuestAns;