import { useState, useContext, createContext} from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  // GLOBAL STATES
  const [search, setSearch] = useState({
    keyword: "",
    results: [],
  });

  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {children}
    </SearchContext.Provider>
  );
};

// custom Hook
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
