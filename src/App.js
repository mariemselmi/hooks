import React, {useEffect, useState} from 'react';
import "./movie.css"
import CardList from "./components/CardList"
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  

  const objet = [
    {name: "Stranger Things" , poster:"https://upload.wikimedia.org/wikipedia/en/7/7a/ST3LambertPoster.png", description:"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.", review:"4 stars"}, 
    {name: "Inception", poster: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg", description:"Inception: The practice of entering dreams and planting an idea in someone's head. Cobb and his team only invade dreams to steal secrets and they aren't sure if Inception is really possible.", review:"5 stars" }, 
    {name:"The Queen's Gambit", poster:"https://alternativemovieposters.com/wp-content/uploads/2020/11/HaleyTurnbull_queensgambit.jpg",  description:"Set during the Cold War era, orphaned chess prodigy Beth Harmon struggles with addiction in a quest to become the greatest chess player in the world.", review:"4 stars"}, 
    {name:"Enola Holmes", poster:"https://m.media-amazon.com/images/M/MV5BZjNkNzk0ZjEtM2M1ZC00MmMxLTlmOWEtNWRlZTc1ZTUyNzY4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", description:"While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.", review:"3 stars"},
    {name:"Harry Potter and the Philosopher's Stone", poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9nrOnN8sYfZZHJ06EIBSoEO5qjx7uHHEs6VtKNplGVuGhZuC", description:"Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.", review:"5 stars"},
    {name:"John Wick", poster:"https://images-na.ssl-images-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg", description:"John Wick is a legendary hitman who retired until a gang invades his house, steals his car, and kills the puppy his late wife Helen had given him.", review:"5 stars"},
    {name:"The Matrix", poster:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg", description:"Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.", review:"5 stars"},
    {name:"Breaking Bad", poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSK9eqijqRLTwXWp8mGWvE5ti1l3FCZ2qVkx83TJNW2SRT4vkHC", description:"Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.", review:"5 stars"}
  ]

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
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
      <CardList objCrard={searchResults} />
    </div>
    
    </div>
  )
}

export default App;