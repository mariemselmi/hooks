import React from 'react';
import  {useEffect, useState} from 'react';
import CardList from "./components/CardList"

const MovieApp = () => {


  const objet = [
    {id: 1 , name: "Stranger Things" , poster:"https://upload.wikimedia.org/wikipedia/en/7/7a/ST3LambertPoster.png", description:"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.", review:"4 stars", 
      trailer: "Trailer", vid: "https://www.youtube.com/embed/mnd7sFt5c3A"}, 
    {id: 2 ,name: "Inception", poster: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg", description:"Inception: The practice of entering dreams and planting an idea in someone's head. Cobb and his team only invade dreams to steal secrets and they aren't sure if Inception is really possible.", review:"5 stars", 
    trailer: "Trailer", vid:"https://www.youtube.com/embed/YoHD9XEInc0"}, 
    {id: 3 ,name:"The Queen's Gambit", poster:"https://alternativemovieposters.com/wp-content/uploads/2020/11/HaleyTurnbull_queensgambit.jpg",  description:"Set during the Cold War era, orphaned chess prodigy Beth Harmon struggles with addiction in a quest to become the greatest chess player in the world.", review:"4 stars",
    trailer: "Trailer", vid:"https://www.youtube.com/embed/CDrieqwSdgI"}, 
    {id: 4 ,name:"Enola Holmes", poster:"https://m.media-amazon.com/images/M/MV5BZjNkNzk0ZjEtM2M1ZC00MmMxLTlmOWEtNWRlZTc1ZTUyNzY4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", description:"While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.", review:"3 stars", 
    trailer: "Trailer", vid:"https://www.youtube.com/embed/1d0Zf9sXlHk"},
    {id: 5 ,name:"Harry Potter and the Philosopher's Stone", poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9nrOnN8sYfZZHJ06EIBSoEO5qjx7uHHEs6VtKNplGVuGhZuC", description:"Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.", review:"5 stars",
    trailer: "Trailer", vid:"https://youtu.be/VyHV0BRtdxo"},
    {id: 6 ,name:"John Wick", poster:"https://images-na.ssl-images-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg", description:"John Wick is a legendary hitman who retired until a gang invades his house, steals his car, and kills the puppy his late wife Helen had given him.", review:"5 stars",
    trailer: "Trailer", vid:"https://youtu.be/C0BMx-qxsP4"},
    {id: 7 ,name:"The Matrix", poster:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg", description:"Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.", review:"5 stars",
    trailer: "Trailer", vid:"https://youtu.be/vKQi3bBA1y8"},
    {id: 8 ,name:"Breaking Bad", poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSK9eqijqRLTwXWp8mGWvE5ti1l3FCZ2qVkx83TJNW2SRT4vkHC", description:"Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.", review:"5 stars",
    trailer: "Trailer", vid:"https://youtu.be/HhesaQXLuRY"}
  ]


  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  
console.log(objet)
  React.useEffect(() => {
    const results = objet.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

    return(
        <div>
        <div className="Search">
        <input className="input" type="text" placeholder="Type Movie/Series Name" onChange={handleChange} value={searchTerm}/>
       </div>
    <div className="App ">
      <CardList objCard={searchResults} />
      
    </div>
    </div>
        )
}
export default MovieApp;