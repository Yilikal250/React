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
return <section>this is a BookList</section>
}
const Image =() => <Img src="" alt=""/>

ReactDOM.render(<BookList/>,document.getElementById('root'));