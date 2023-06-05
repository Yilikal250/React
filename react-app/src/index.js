import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const firstBook ={
  img:'https://m.media-amazon.com/images/I/51uCRF3qUUL._AC._SR180,230.jpg',
  author:'The Bone Spindle',
  title:'School Trip: A Graphic Novel'
}
const secondBook ={
  img:'https://images-eu.ssl-images-amazon.com/images/I/81QVYq-iPkS._AC_UL160_SR160,160_.jpg',
  author:'by Christophe Alexis Perez',
  title:'School Trip: A Graphic Novel'
}

function BookList() {
    return (
      <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </section>
    );
}

const Book =(props) => {
 console.log(props)
return(
  <article>
    <img src={props.img} alt=''/>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>

  </article>
  ); 
};





ReactDOM.render(<BookList/>,document.getElementById('root'));