import {useEffect, useState} from 'react';

type ClockProps = {
  color: string;
  time: string;
}

const Clock: React.FC<ClockProps> = ({ color, time }) => {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  )
}

function return_now_time () {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`

}


function NowTime () {


  const [time, setTime] = useState(return_now_time)

  useEffect(() => {
    setInterval(() => {
      // 時間、分、秒をコロン(:)で連結して表示形式を整えています。
      setTime(return_now_time);
    }, 1000);
  }, []);

  return (
    <Clock 
      color = {"black"}
      time = {time}
    />
  )
}

export default NowTime