import './App.css';

let name = "Karan"
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>

    <div className="container">
      <h1>
        Hello {name}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolor mollitia, ullam minus ducimus, autem quo libero, corrupti amet rerum quisquam officia. Quam harum ratione sint voluptate nulla fugit sed aperiam culpa quae vel!
      </p>
    </div>
    </>
  );
}

export default App;
