export default function weekDay(week_day: any){

  let day = week_day        

  switch(day) {
    case 0:
      day = 'Domingo'
      break
    case 1:
      day = 'Segunda'
      break
    case 2:
      day = 'Terça'
      break
    case 3:
      day = 'Quarta'
      break
    case 4:
      day = 'Quinta'
      break
    case 5:
      day = 'Sexta'
      break
    case 6:
      day = 'Sábado'
  }

  return day
}