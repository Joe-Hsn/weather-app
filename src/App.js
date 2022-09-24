import Search from "./components/search/search";
import CurrentState from "./components/current-state/current-state";
export default function App() {
  const handleSearchChange = (searchValue) => {
    console.log(searchValue);
  };
  return (
    <div className="container min-h-screen w-screen mx-auto p-6">
      <Search onSearchChange={handleSearchChange} className="mb-8" />
      <CurrentState />
    </div>
  );
}
