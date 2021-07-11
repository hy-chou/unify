import React, {useState} from 'react';
import Member from './Member';

const lvl = 7
const lvll = []
for (let i = 0; i < lvl; i++) {
  lvll.push(i)
}

function united(queue) {
  let firstQ = queue[0]
  for (let i = 1; i < lvl; i++) {
    if (firstQ !== queue[i]) {
      return false;
    }
  }
  return true;
}

function newQ(fill=null) {
  let queue = []
  while (queue === [] || united(queue)) {
    queue = []
    for (let i = 0; i < lvl; i++){
      queue.push(fill || Math.floor(Math.random() * 2))
    }
  }
  return queue
}

function Game(props) {
  const [queue, setQ] = useState(newQ());

  let handleClick = (i) => {
    let nowQ = queue.slice();

    nowQ[i] = nowQ[i] ? 0 : 1;
    if (i - 1 >= 0) {nowQ[i - 1] = nowQ[i - 1] ? 0 : 1;}
    if (i + 1 < lvl) {nowQ[i + 1] = nowQ[i + 1] ? 0 : 1;}
    setQ(nowQ);
  }

  if (united(queue)) {
    console.log("1");
    setTimeout(()=>{console.log("3");setQ(newQ());}, 3000)
    console.log("2");
  }
  return (
    <div className="queue flex-container">
      {lvll.map((id, value)=>
        <Member
          key={id}
          value={queue[value]}
          onClick={()=> handleClick(value)} />)}
    </div>
  );
}

export default Game