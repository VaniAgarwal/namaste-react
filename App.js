 /**
  * <div id="parent">
    * <div id ="child1">
        * <h1>I, AM H1 TAG </h1>
        * <h2> I, am h2 tag </h2> 
    * </div>
  *     <div id="child2">
    *     <h1> I, am h1 tag </h1>
    *     <h2> I, am h2 tag </h2>
  *     </div>
  * </div>
  * 
  * React.createElement(object)
  */

 //This is a core react but it is very cumbersome to create it's better to use html tags..
 //so to ease this we use jsx
 
 // <!--pure react thing-->
 const parent = React.createElement('div',{id:"parent"},[
    React.createElement('div',{id:"child1"},[
        React.createElement('h1',{},'I, am H1 tag'),
        React.createElement('h2',{},'I, am h2 tag')
    ]),
    React.createElement('div',{id:"child2"},[
        React.createElement('h1',{},'I am child2 h2 tag'),
        React.createElement('h2',{},'I am child2 h2 tag')
    ]),

 ]);

 console.log(parent);

//  console.log(heading);//returns an object

 //when we want to put inside the browser or we want to render in browser we use DOM

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(parent);
