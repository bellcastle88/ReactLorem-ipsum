import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    // parseInt string을 int로 변환
    let amount = parseInt(count);
    // count가 0보다 작을때 1개만 출력
    if(count <= 0){
      amount = 1
    }
    // 8보다 크더라도 8개 까지만 출력
    if(count >8) {
      amount = 8
    }
    // siice 0부터 마지막까지 자르기 
    setText(data.slice(0,amount))
  
  }

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name='amount' id='amount' value={count} 
        onChange={(e)=> setCount(e.target.value)} 
        />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index)=>{
        return <p key={index}>{item}</p>
        })}
      </article>
    </section>
    );
}

export default App;
