import React from "react";
import ReactDOM from "react-dom/client";

const elementH1 = React.createElement('h1', {
    'id': 'heading-1'
}, 'Namaste React');
const heading1 = React.createElement('h1', 
{ id: 'heading-1' },
 'Heading 1');
const heading2 = React.createElement('h2',
 { id: 'heading-2' },
  'Heading 2');
const container = React.createElement('div',
 { id: 'container' },
  [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);