# What is the difference between Component and PureComponent? give an example where it might break my app
The main difference is pure component will re-render when only its props or state changes. On the other hand, simple component re-renders every time when its parent re-renders

I think Pure component may not detect some changes if props is nested object because of shallow comparision of pure components

# Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I think because shouldComponentUpdate changes only part of tree and effects only specific component. But, context works in global level
there might be race condition when there is gloabal changes and shouldComponentUpdate works together.

# Describe 3 ways to pass information from a component to its PARENT.

1. We can wrap state related function (setState or useState) inside callback function and pass it to child component. Through, this callback function we can pass data from child to parent
2. With state management library 
3. Pass function to child component which gets data from child component.  And set data to state in parent component

# Give 2 ways to prevent components from re-rendering.

1. We can use shouldComponentUpdate method it class components
2. With memo() function in functional components

# What is a fragment and why do we need it? Give an example where it mightbreak my app.
Fragment lets you gather some elements without creating extra node on DOM.
I think there might be style related issue. Because of not exsit node.

# Give 3 examples of the HOC pattern.

In order to create re-usable component we need HOC.
From my personal experience I used HOC when I created components which have same functionalities like toggling.

# what's the difference in handling exceptions in promises, callbacks andasync...await.

Promise is an object representing intermediate state of operation which is guaranteed to complete its execution at some point in future. Async/Await is a syntactic sugar for promises, a wrapper making the code execute more synchronously. 2. Promise has 3 states – resolved, rejected and pending

We can also pass functions as parameters to other functions and call them inside the outer functions. So callback is a function that is passed to another function. When the first function is done, it will run the second function.

# How many arguments does setState take and why is it async.

setState takes up to 2 arguments and because operation made with setState might be expensice it was made asyc

# List the steps needed to migrate a Class to Function Component.

1. Change Class to function related syntax
2. Change render method to return method
3. Remove constructor
4. Change all methods to functions
5. Replace lifesycle methods with hooks

# List a few ways styles can be used with components.
1. With importing them
2. Inluce them direectly inside components
3. We can use CSS in JS

# How to render an HTML string coming from the server.

We can use dangerouslySetInnerHTML to render it