import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
    return (
      <section className='booklist'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
    );
}

const Book =() => {
return(
  <article>
    <Image></Image>
    <Author></Author>
    <Title></Title>
  </article>
  ); 
};

const Image =() => (<img src="https://m.media-amazon.com/images/I/51uCRF3qUUL._AC._SR180,230.jpg" alt=""/>
);

const Author =() => <h1>The Bone Spindle</h1>;
const Title =() => <h4>School Trip: A Graphic Novel  </h4>;
ReactDOM.render(<BookList/>,document.getElementById('root'));