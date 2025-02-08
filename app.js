const parent=React.createElement(
    "div",
    {id:"parent"},[
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement("h1",{},"Hello im nested!"),
                React.createElement("h1",{},"I'm nested sibling")
            ]),
            React.createElement(
                "div",
                {id:"child2"},
                [
                    React.createElement("h1",{},"Hello im nested! child 2"),
                    React.createElement("h1",{},"I'm nested sibling child 2")
                ])

    ]
    );
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);