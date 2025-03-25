import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { useState } from "react";
function App() {
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);


  const onhandleStart = () => {
    const timer = setInterval(() => {
      setFlag(!flag);
      
      setTime((prev) => {
        if (prev < 100) {
        
          return prev+1;
        }
        if (prev >= 100) {
          clearInterval(timer);
          // setTime(0)
          setFlag(true);
        }
        return prev;
      // setFlag(true);
      //   setTime((pre)=>{
      //     pre+1
        })
      
    }, time);
  };

  const handleinputChange = (e) => {
    setFlag(false);
    setTime(e.target.value);
  };

  console.log("after time set", time);

  return (
    <>
      <div className="body">
        <div className="input-div">
          <input
            type="number"
            value={time}
            onChange={handleinputChange}
            disabled={flag?true:false}
          ></input>
          <Button variant="primary" onClick={onhandleStart} disabled={flag?true:false} className="button">
            Start
          </Button>

          <div>
            <ProgressBar now={flag ? time : 0} label={`${flag ? time : 0}%`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
