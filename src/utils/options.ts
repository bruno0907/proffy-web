const subjects = [
  { value: '0', label: 'Selecione aqui...'},
  { value: 'matematica', label: 'Matemática'},
  { value: 'ingles', label: 'Inglês'},
  { value: 'quimica', label: 'Química'},
  { value: 'fisica', label: 'Física'},
];


const weekDay = [                          
    { value: '', label: 'Selecione aqui...' },    
    { value: '1', label: 'Segunda-feira' },
    { value: '2', label: 'Terça-feira' },
    { value: '3', label: 'Quarta-feira' },
    { value: '4', label: 'Quinta-feira' },
    { value: '5', label: 'Sexta-feira' },
    { value: '6', label: 'Sábado' },
];

const teacher = {
  id: 1,
  avatar: 'https://avatars3.githubusercontent.com/u/54812906?s=460&u=230c6ae207fa7fd5735456ef3011c8771549c8cb&v=4',
  name: 'Bruno Mariani',
  bio: 'Uma biografia qualquerLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
  subject: 'Inglês',
  cost: 10,
  whatsapp: '47999887766',
}

export default { subjects, weekDay, teacher }