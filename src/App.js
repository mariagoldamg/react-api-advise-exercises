import  { useEffect, useState } from 'react';
import './App.css';

function App (){

  const [advice, setAdvice] = useState("");

  /* First Option

  useEffect (()=>{
getAdvice()
  }, [])

  const getAdvice = async()=>{
    const response = await fetch ('https://api.adviceslip.com/advice ')
    const data = await response.json()
   setAdvice(data.slip.advice)
  }*/

  useEffect(()=>{
    const getAdvice = async()=>{
      const response = await fetch ('https://api.quotable.io/random  ')
      const data = await response.json()
      console.log (data)
     setAdvice(data.content)
    }
    getAdvice()
  }, [])

  return(<div className='App'>
    <p>{advice}</p>
  </div>)
}

export default App;






/*function App (){

const [points, setPoints] = useState (1);
const [title, setTitle] = useState ('HEYHEY!');

useEffect(()=>{
  console.log ("Effect!!!!!!!!!!")
}, [title])

  return (<div className='App'>
    <p>{title}</p>
<p>{points}</p>
<button onClick = {()=>setPoints (points+1)}>More Points!</button>
<button onClick = {()=>setTitle ('ALLOHA!')}>useEffect</button>

  </div>)
}

export default App;*/














/*function App() {

  const [book, setBook] =  useState ({
    title: '$100 Startup',
    author: 'Chris Gilbo',
    year:2010,
    rating: '3 stars'
  })

const changeRating =()=> {
  //setBook ({...book, rating:'5stars'})
  setBook ({...book, year:2023, rating:"7stars"})
}

  return (
    <div className="App">
     <h2>{book.title}</h2>
     <h2>{book.author}</h2>
     <h2>{book.year}</h2>
     <h2>{book.rating}</h2>
     <button onClick={changeRating}>Click me</button>
    </div>
  );
}

export default App;*/
