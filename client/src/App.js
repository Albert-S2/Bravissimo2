import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";

function App() {
  return (
    <div className="flex flex-col h-[95vh] justify-between">
      <header>
        <Header />
      </header>
      <main>
        <SearchContainer />
      </main>
    </div>
  );
}

export default App;
