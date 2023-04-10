import { useState } from 'react';
import './App.css';

function App() {
  //state 변수 정의
  const [data, setData] = useState([]);// 데이터를 화면에 표시하려면 스테이트 사용
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((res)=>{ 
      return res.json(); // json으로 변환
    })
    .then(data => { 
      setData(data);
    })
    .catch(err => {
      console.log('연결실패',err);
    })
  }
  console.log('data =', data);
  return (
    <div className="App container">
      <h1>fetching data</h1>
      <button onClick={fetchData}>데이터 불러오기</button>
      {/* 서버에서 불러오는 동안 UI와의 동기화 필요할 수 있음 */}
       { data ? (
        <ul>
          { data.map(todo => {
            return (
            <li key={todo.id}>
              {todo.id}: {todo.title}
              </li>
            
            )
          })}
        </ul>
       )
        : null
       }
    </div>
  );
}

export default App;
