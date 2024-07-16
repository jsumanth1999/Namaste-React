
const heading = React.createElement("h1", {}, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

const content = React.createElement("div",{id:"child"},[[React.createElement("h1",{},"I'm h1 Tag"),React.createElement("h2",{},"I'm h2 tag")],
React.createElement("h1",{},"I'm h1 Tag"),React.createElement("h2",{},"I'm h2 tag")]);
const parent = ReactDOM.createRoot(document.getElementById('parent'));

parent.render(content);