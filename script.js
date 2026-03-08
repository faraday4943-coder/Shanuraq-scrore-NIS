const shanyraqs=[

{
name:"Бауыржан Момышұлы 🛡️",
curator:"Палыбек Асылжан Дәулетұлы",
phone:"87777732383",
classes:"11D, 10B, 7D, 7G",
score:1250,
academy:400,
sport:300,
social:200
},

{
name:"Мархабат Байғұт 📖",
curator:"Бакбергенова Алина Букенбаевна",
phone:"87022559290",
classes:"9M, 8F, 10C, 10D",
score:1180,
academy:500,
sport:200,
social:180
},

{
name:"Ыбырай Алтынсарин 📚",
curator:"Ускенбаева Айдын Жолымбекқызы",
phone:"87027921406",
classes:"11A, 11C, 9K, 7H",
score:1090,
academy:450,
sport:150,
social:140
},

{
name:"Міржақып Дулатұлы ✍️",
curator:"Мауленова Айнұр Жандарбековна",
phone:"87025084590",
classes:"12C, 12G, 9C, 7E, 9G",
score:1020,
academy:300,
sport:250,
social:200
},

{
name:"Шәмші Қалдаяқов 🎵",
curator:"Қаратай Нүргүл Нұранқызы",
phone:"87753478982",
classes:"9A, 10A, 10E, 7F",
score:970,
academy:280,
sport:220,
social:190
},

{
name:"Мұхтар Шаханов 🧠",
curator:"Мылтыкбаева Жулдызай Нурбековна",
phone:"87773064109",
classes:"12A, 12D, 8G, 8H",
score:950,
academy:260,
sport:210,
social:180
},

{
name:"Ахмет Байтұрсынов 🧾",
curator:"Серикбаева Асем Серикбаевна",
phone:"87017528973",
classes:"11L, 11K, 8B, 7B, 9E",
score:930,
academy:240,
sport:200,
social:170
},

{
name:"Төле би ⚖️",
curator:"Темірбек Ақбота Қаныбекқызы",
phone:"87753331792",
classes:"12B, 12F, 11M, 8D",
score:900,
academy:230,
sport:190,
social:160
},

{
name:"Тұрар Рысқұлов 🏛️",
curator:"Тұрдықұл Асылжан Сманұлы",
phone:"87076479921",
classes:"12L, 12M, 9L, 7K",
score:880,
academy:210,
sport:180,
social:150
},

{
name:"Мағжан Жұмабаев 🌟",
curator:"Шәкірбаева Әсемай Сазбергеновна",
phone:"87753164997",
classes:"12K, 12N, 8C, 7A",
score:860,
academy:200,
sport:170,
social:140
},

{
name:"Бекзат Саттарханов 🥊",
curator:"Алимбаева Мадина Кеңесовна",
phone:"87753351837",
classes:"10K, 10L, 8L",
score:840,
academy:190,
sport:160,
social:130
},

{
name:"Дулат Исабеков 🎭",
curator:"Аманбаева Инабат Нариковна",
phone:"87713858033",
classes:"12E, 9F, 7C, 9B",
score:820,
academy:180,
sport:150,
social:120
},

{
name:"Сәкен Сейфуллин 🖋️",
curator:"Абдірахман Мөлдір Асқатқызы",
phone:"87472737790",
classes:"11B, 11E, 8A, 8K",
score:800,
academy:170,
sport:140,
social:110
},

{
name:"Абай Құнанбаев 🧠",
curator:"Сауырбай Ақтолқын Болатбекқызы",
phone:"87022876548",
classes:"11F, 9D, 9H, 8E",
score:780,
academy:160,
sport:130,
social:100
},

{
name:"Шәкәрім Құдайбердіұлы 📜",
curator:"Жаримбетова Махабат Малкаждаровна",
phone:"87011044488",
classes:"11G, 11N, 7L, 7M",
score:760,
academy:150,
sport:120,
social:90
}

];

let currentFilter="all";

function openTab(id){

document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
document.getElementById(id).classList.add("active");

}

function setFilter(filter){

currentFilter=filter;

document.querySelectorAll(".filter").forEach(f=>f.classList.remove("active"));
event.target.classList.add("active");

renderRating();

}

function renderRating(){

const container = document.getElementById("ratingList");

container.innerHTML = "";

let sorted = [...shanyraqs];

if(currentFilter === "academy")
sorted.sort((a,b)=>b.academy-a.academy);

else if(currentFilter === "sport")
sorted.sort((a,b)=>b.sport-a.sport);

else if(currentFilter === "social")
sorted.sort((a,b)=>b.social-a.social);

else
sorted.sort((a,b)=>b.score-a.score);

sorted.slice(0,5).forEach((s,index)=>{

let realIndex = shanyraqs.indexOf(s);

let medal = "";

if(index===0) medal="🥇";
if(index===1) medal="🥈";
if(index===2) medal="🥉";

let leaderClass = index === 0 ? "leader" : "";

container.innerHTML += `

<div class="card ${leaderClass}" onclick="openProfile(${realIndex})">

<h3>${medal} ${index+1}. ${s.name}</h3>

<p>🏆 ${s.score} баллов</p>

<p>📚 ${s.academy} | ⚽ ${s.sport} | 🤝 ${s.social}</p>

</div>

`;

});

}
function openProfile(i){

const s = shanyraqs[i];

document.getElementById("profileContent").innerHTML = `

<div class="card">

<h2>${s.name}</h2>

<p>👨‍🏫 Куратор: ${s.curator}</p>

<p>🏫 Классы: ${s.classes}</p>

<p>📚 Академия: ${s.academy}</p>

<p>⚽ Спорт: ${s.sport}</p>

<p>🤝 Социальная: ${s.social}</p>

<p>🏆 Общий: ${s.score}</p>

</div>

`;

openTab("profile");

}
document.getElementById("searchInput").addEventListener("input",function(){

const value=this.value.toLowerCase();

const results=shanyraqs.filter(s=>s.name.toLowerCase().includes(value));

const container=document.getElementById("searchResults");

container.innerHTML="";

results.forEach((s)=>{

let i = shanyraqs.indexOf(s);

container.innerHTML+=`

<div class="card" onclick="openProfile(${i})">

<h3>${s.name}</h3>

<p>${s.score} баллов</p>

</div>

`;

});
});

renderRating();