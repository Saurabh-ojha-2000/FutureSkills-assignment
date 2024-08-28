import debounce from "lodash.debounce";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RequestDialog from "./components/RequestDialog";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardsArray, setCardsArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = debounce(async (term) => {
    if (term.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/cards/search?query=${encodeURIComponent(
          term
        )}`
      );
      if (response.ok) {
        const data = await response.json();
        setSearchResults([...data.data?.cards]);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error searching cards:", error);
      setSearchResults([]);
    }
  }, 300);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch("http://localhost:8080/api/cards/");
      const data = await response.json();
      setCardsArray(data?.data?.cards || []);
    };
    fetchCards();
  }, []);

  const displayedCards = searchTerm.trim() === "" ? cardsArray : searchResults;

  return (
    <>
      <div className="min-h-screen p-2 flex flex-col">
        <Header setIsModalOpen={setIsModalOpen} />
        <Hero cardsArray={displayedCards} handleSearch={handleInputChange} />
        <Footer />
        <RequestDialog
          setCardsArray={setCardsArray}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
}

export default App;
