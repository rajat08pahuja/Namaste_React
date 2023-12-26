// ReactElement(Object) => HTML(Browser Understands)


const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "I am an h1 Tag"), React.createElement("h2", {}, "I am an h2 Tag")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "I am an h1 Tag"), React.createElement("h2", {}, "I am an h2 Tag")]
    )]
);

console.log(parent);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React !!!");

// console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);