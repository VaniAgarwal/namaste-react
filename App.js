 import React from "react";
 import reactDom from "react-dom/client";
 
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
//  const parent = React.createElement('div',{id:"parent"},[
//     React.createElement('div',{id:"child1"},[
//         React.createElement('h1',{},'I, am H1 tag'),
//         React.createElement('h2',{},'I, am h2 tag')
//     ]),
//     React.createElement('div',{id:"child2"},[
//         React.createElement('h1',{},'I am child2 h2 tag'),
//         React.createElement('h2',{},'I am child2 h2 tag')
//     ]),

//  ]);

//  console.log(parent);

//  console.log(heading);//returns an object

 //when we want to put inside the browser or we want to render in browser we use DOM

//  const root = reactDom.createRoot(document.getElementById('root'));
//  root.render(parent);

//react element
const heading = (
<h1>Namaste React using JSX</h1>
);

//React Functional COmponent
const Heading= ()=>{
  return <h1 className="headingf" tabIndex="5">Functional Componenet in React</h1>
};

//This is also Functional Component
const HeadingComponent = ()=> (
  <div id="container">
   {Heading()} {/* we can also write a component like this */}

  {/* It is also called component composition */}
  <Heading/>
  <Heading></Heading>
  {/* if i have to use javascript in a component by using {} */}
  {heading}
  <h1>Function Componenet 2</h1>
  <ReactFragment></ReactFragment>
  </div>
  
)

/*React Fragments are used to....suppose if use div we can only have one parent element so we use all the code inside a div...
so to actually avoid this because of ugliness we use <React.Fragment> or <></>. So the extra div will not show in the browser.
*/
const ReactFragment = ()=>(
  <React.Fragment>
  <div>
    <h1>React Fragment</h1>
  </div>


  </React.Fragment>
)

//We can also write as a normal Javascript function but we use arrow functions in industry
const FunctionalComponenet = function(){
  return(
    <div>
      <h1>Functional Component using functions</h1>
    </div>
  )
}



const root = reactDom.createRoot(document.getElementById('root'));
// root.render(heading)
root.render(<HeadingComponent/>)
