import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Question Answer Section </h1>

            <div className="card card-side bg-base-100 shadow-xl my-6 m-3">

                <div className="card-body">

                    <p className='text-xl font-bold'>What are the different ways to manage a state in a React application?</p>
                    <p>Ans : Beau Carnes. React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.</p>
                    <ul>
                        <li> 1.Local state.</li>
                        <li>  2. Global state.</li>
                        <li>  3. Server state.</li>
                        <li>  4. URL state.</li>
                    </ul>
                </div>
            </div>


            <div className="card card-side bg-base-100 shadow-xl my-6 m-3">

                <div className="card-body">

                    <p className='text-xl font-bold'>How does prototypical inheritance work?</p>
                    <p>Ans :The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object</p>
                    <p>
                        When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                    </p>
                </div>
            </div>


            <div className="card card-side bg-base-100 shadow-xl my-6 m-3">

                <div className="card-body">

                    <p className='text-xl font-bold'>What is a unit test? Why should we write unit tests?</p>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    <p>
                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important
                    </p>
                </div>
            </div>


            <div className="card card-side bg-base-100 shadow-xl my-6 m-3">

                <div className="card-body">

                    <p className='text-xl font-bold'>React vs. Angular vs. Vue?</p>
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</p>
                    <p>
                        It's easier to learn Vue than angular and it reasonably takes the same amount of time and effort as learning react. Although some people argue that it's even easier to learn than react but that's of course subjective and varies from person to person.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;