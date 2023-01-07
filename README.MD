# Learning React - Day 03

## What is JSX ?
 - JSX stands for Javascript XML and it is a very useful tool for React developers.
 - JSX is an extension of the JavaScript language which provides a way to structure component rendering using syntax similar to HTML.

## Superpowers of JSX 
 - JSX gives us the ability to write HTML elements in Javascript and place them in the DOM by converting the HTML tags into React elements without the need for other methods like createElement() or appendChild().
 - This combination of Javascript and HTML leads to having more powerful applications with boosted performance.
 ```
 const element = <h2>This is the JSX element!</h1>
 ReactDOM.render(element,document.getElementById('root'));
 ```
 - This JSX code snippet is an example of what it would take to output an `<h2>` of “This is the JSX element!” to your DOM using JSX syntax.
 ```
 const element = React.createElement('h1',{},'This is the JSX element!');
 ReactDOM.render(element,document.getElementById('root'));
 ```
 - This second code snippet is an example of how to do the same exact thing as the first but without the use of JSX.
 - As you can see, and most people would agree, the first example using JSX is much cleaner and clearer code that will be easier to read, edit and debug when the time comes.
 - As you can see, and most people would agree, the first example using JSX is much cleaner and clearer code that will be easier to read, edit and debug when the time comes.
 - You can also represent multiple lines of HTML with JSX. However, there must always be one top level element with the rest of your code nested inside.
 ```
 const element = (
    <ul>
       <li>Ramesh</li>
       <li>Shreedevi</li>
       <li>Pratham</li>
       <li>Pratiksha</li>
    </ul>
 )
 ```
 - React is aware of and embraces the fact that UI logic is coupled with rendering logic when referring to things such as how the state changes over time, how the data is displayed and how events are handled.
 - What makes React unique and powerful is the fact that they utilize something called separating “concerns” by coupling units inside components that contain both markup and logic, rather than putting them in separate files.
  - Another popular use case with JSX is its ability to provide a range of element attributes designed to mirror those provided by HTML.
  - Custom attributes can be passed to the component and all attributes will be received by the component as props.
  - Custom attributes can be passed to the component and all attributes will be received by the component as props.
  - Also, JavaScript expressions can be used inside JSX with curly brackets `{}`:
  ```
  <h2>{12+5}</h2>
  ```
**Babel** - How does the browser understand and read JSX? They don’t. React developers typically utilize **Babel**, which is a popular, free and open-source ***Javascript transpiler*** that transforms your JSX into regular Javascript objects first before passing it to the browser.

## What is Browserslist?
 Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
 



