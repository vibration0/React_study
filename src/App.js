import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] =useState([]);
  const [err, setErr] =useState("");
  const [loading, setLoading] =useState(true);
  
  //app이 실행(마운트)시 로딩데이터 불러오기 위해 useEffect사용
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        return res.json()
      })
      .then(json =>{
        console.log(json);
        setData(json);
        setLoading(false);
      })
      .catch(err => console.log(err))
  },[]);
  return (
    <div className="App container">
      {
        loading ? <p>loading...</p> : 
        data.map(photo => {
          return(
            <div key={photo.id}>
            <img src={photo.thumbnailUrl}/>
              <p>{photo.id},{photo.title}</p>
            </div>
          )
        }) 
      }
    </div>
  );
}

export default App;
