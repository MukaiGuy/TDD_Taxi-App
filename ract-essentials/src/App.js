import './App.css';

function Header(props) {
  return(
  <header>
        <h1>{props.title} Hello</h1>
  </header>
  );
}

function Main(props) {
  return (
    <p>{props.content} to eat eggs</p>,

    <ul>
      {props.dishes.map((dish) => (<li>{dish}</li>)     )}

    </ul>
  );
}


server

function Feed() {
  return (
    <h3>Learn to Make the Best Eggs</h3>
  );
}


function Footer() {
  return (
    <h2>Hello</h2>
  );
}


function Copyright(props) {
  return (
    <h5>Copyright © 2019-{props.year} InNait Inc. </h5>
  );
}



const dishes = [
  "Mac and Cheese",
  "Steak",
  "Vegies"
]



function App() {
  return (
    <div className="App">
      <Header title="InNait"/>
      <Main content="I love" dishes={dishes}/>
      <Feed />
      <Footer />
      <Copyright />
    </div>
  
  );
}

export default App;
