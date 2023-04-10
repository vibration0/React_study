import { useRef, useState, useEffect} from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('')
  const [data, setData] = useState(['둘리','홍길동','벤지']);
  //입력요소 참조할 ref(참조명)
  const myInput = useRef();
 

  useEffect(() => {
    console.log(myInput.current); //요소명 알려줌
    myInput.current.focus(); //앱시작시 오토포커스
  },[])

  return (
    <div className="App">
      <h1>사용자 입력</h1>
      <label htmlFor="">이름: 
      <input ref={myInput} type="text" onChange={
        (e) =>{
          console.log(e.target.value)
          setName(e.target.value)
        }
      } value={name}/>
      </label>
      {/* DATA에 추가(push) */}
      <button onClick={
        () => {
          let copy = [...data,name]; //기존 배열에 name추가
          setData(copy); //data update
          setName('');
        }
      }>추가</button>
      <h2>데이터 목록</h2>
      <ul>
        {/* 입력 데이터 추가 */}
        {
          data.map((name, i) => {
            return <li key={i}>{name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
