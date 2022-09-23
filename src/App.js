import Search from "./components/search/search";
export default function App() {
  const handleSearchChange = (searchValue) => {
    console.log(searchValue);
  };
  return (
    <div className="Container">
      <Search onSearchChange={handleSearchChange} />
    </div>
  );
}
