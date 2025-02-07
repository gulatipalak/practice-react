import React from 'react';
import ReactDOM from 'react-dom/client';

//React Create Element -- React object -- HTML Browser Render
const parent = React.createElement("div",{id: "parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"i'm an h1 tag"),React.createElement("h2",{},"i'm an h2 tag")]));
//this way of creating element is tedious and messy and confusing .this is why JSX exsists.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);