import React from 'react';
import ReactDOM from 'react-dom';


function BookList() {
    return (
      <section>
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
    <Title></Title>
    <Author></Author>
    
  </article>
  ); 
};

const Image =() => (<img src="https://m.media-amazon.com/images/I/81VDgrbTN+L._AC._SR360,460.jpg" alt=""/>
);

const Author =() => <h1>The Bone Spindle</h1>;
const Title =() => <h4>Engelstalige uitgave </h4>;
ReactDOM.render(<BookList/>,document.getElementById('root'));