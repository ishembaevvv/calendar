let date = document.getElementById('date');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let hour = document.getElementById('clock-hour');
let minute = document.getElementById('clock-min');

const today = new Date();

const weekDays = ["Дүйшөмбү","Шейшемби","Шаршемби","Бейшемби","Жума","Ишенби","Жекшемби",]
const allMonth = ['Үчтүн','Бирдин','Жалган Куран','Чын Куран','Бугу','Кулжа','Теке','Баш Оона','Аяк Оона','Тогуздун','Жетинин','Бештин']

if (date < 9) date = "0" + date;    

date.innerHTML = today.getDate();
day.innerHTML = weekDays[today.getDay()-1];
month.innerHTML = allMonth[today.getMonth()];
year.innerHTML = today.getFullYear();

hour.innerHTML = today.getHours();
minute.innerHTML = today.getMinutes();