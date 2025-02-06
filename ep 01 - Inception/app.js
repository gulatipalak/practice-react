// const heading = React.createElement("h1",{ id: "heading"},"Hello world From React!");
// console.log(heading); // returns an object 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//heading a react h1 element andddd react element is a javascript object.
//when you see inside this object, you will find a props attribute (childrens + attributes passed as an object)

//<div>
//     <div>
//         <h1>i'm an h1 tag</h1>
//          <h2>i'm an h2 tag</h2>
//      </div>
//</div>

//React Create Element -- React object -- HTML Browser Render
const parent = React.createElement("div",{id: "parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"i'm an h1 tag"),React.createElement("h2",{},"i'm an h2 tag")]));
//this way of creating element is tedious and messy and confusing .this is why JSX exsists.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);