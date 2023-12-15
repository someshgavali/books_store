import "./Book.css"


const Book = ({id,name,img,author,price,nameLink}) =>{

    const showAuthorName = () =>{
        alert(author);
    }
    return (
    <div className="book-card" key={id}>
        <div className="book-img">
            <img src={img} alt={name}  onClick={showAuthorName}/>
            </div>
            <div className="book-info">
                 <a href={nameLink} target="_blank" rel="noreferrer noopener"> <h3>{name}</h3></a>
                   <h4>{author}</h4>
                   <h4 className="book_price">₹{price}</h4>
             </div>
        </div>
    )
}

export default Book