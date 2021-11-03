function App() {
  
  function Header() {
    return (
      <header>Fantasylist</header>
    )
  }

  function Navbar() {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>Shops</li>
        </ul>
      </nav>
    )
  }

  function Search() {
    return (
      <form>
        <input />
      </form>
    )
  }

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Search />

    </div>
  );
}

export default App;
