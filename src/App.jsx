import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const videoRef = useRef(); //비디오 요소 이름
  console.log(videoRef.current);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(()=>{
    //마운트시 한번만 실행
    setDuration(videoRef.current.duration);
    //계속 업데이트 되는 값(Interval=타이머로 1초마다 업데이트)
    let play = setInterval(function(){
      setCurrentTime(videoRef.current.currentTime);
    }, 1000);

    //인터발(타이머) 해제
    return () => {
      clearInterval(play);
    }
  },[currentTime]); 

  const playVideo = () => {
    videoRef.current.play();
  }

  const pauseVideo = () => {
    videoRef.current.pause();
  }

  const stopVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
  }
  return (
    <div className="App">
      <h1>React Video Player</h1>
      <video ref={videoRef} src="/video.mp4"></video>
      <div className="time-ui">
        <p><b>Duration: </b>{duration}S</p>
        <p><b>CurrentTime</b>{currentTime.toFixed(1)}</p>
      </div>
      <div className="btn-ui">
        <button className="play" onClick={playVideo}>play</button>
        <button className="pause"onClick={pauseVideo}>pause</button>
        <button className="stop"onClick={stopVideo}>stop</button>
      </div>
    </div>
  )
}

export default App
