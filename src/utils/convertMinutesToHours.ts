export default function convertMinutesToHours(time: number){ 
  
  let hours = (Math.floor(time / 60)).toString()  
  let min = (time % 60).toString()
  hours = hours < '10' ? '0' + hours : hours
  min = min < '10' ? '0' + min : min

  return `${hours}:${min}`
}

