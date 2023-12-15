import  Book from "./Compontents/book/Book"
import './App.css';
import BookData from "./Compontents/book/Sdata"

function App() {
  return (
    <>
    <h1>Our Books</h1>
   <div className="book-conatiner">
    {
      BookData.map((value)=>{
           return  <Book key={value.id} {...value}/>
      })
    }
  </div>
    </>
  )
}

export default App;
