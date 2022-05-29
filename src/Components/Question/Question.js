import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <article className='question-1'>
                <h5>How React work?</h5>
                <h5># Answer-1</h5>
                React is a javascript library.We are use react in web development. It has a virtual Dom which is compares
                the components previous states.
                We also know that react is component base libary.React offers some outstanding features that make it the
                most widely adopted library for frontend app development.
                We can write HTML structures in the same file as JavaScript code by utilizing JSX and Hooks are the new feature.
                If you write a function component, and then you want to add some state to it, previously you do this by converting it to a class. But, now you can do it by using a Hook inside the existing function component.

            </article>
            <article className='question-2'>
                <h5>How useSate work?</h5>
                <h5># Answer-2</h5>
                We know that useState is a reactjs's Hook.The useState function is a built in hook that can be imported from the react package.
                It allows to add state to functional components.
                It's Returns a stateful value, and a function to update it.
                With useState you can easily create stateful functional components.
                We can only use useState inside a function component.
            </article>
        </div>
    );
};

export default Question;