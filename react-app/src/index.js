import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books =[
  {
  img:'https://m.media-amazon.com/images/I/51uCRF3qUUL._AC._SR180,230.jpg',
  author:'The Bone Spindle',
  title:'School Trip: A Graphic Novel',
},
{
  img:'https://images-eu.ssl-images-amazon.com/images/I/81QVYq-iPkS._AC_UL160_SR160,160_.jpg',
  author:'by Christophe Alexis Perez',
  title:'School Trip: A Graphic Novel',
},
];
const names = ['john','peter','susan'];
const newNames=names.map((names)=>{
 return <h1>{names}</h1>;
});
console.log(newNames);
function BookList() {
    return (
      <section className='booklist'>{newNames}</section>
    );
}

const Book =(props) => {
  const {img,title,author,children} = props;
  console.log(props);
return(
  <article>
    <img src={img} alt=''/>
    <h1>{title}</h1>
    {children}
    <h4>{author}</h4>
   
  </article>
  ); 
};





ReactDOM.render(<BookList/>,document.getElementById('root'));