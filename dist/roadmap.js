const ROADMAP_KEY="communityUaTestRoadmapV1";
const defaultRoadmap={
  start:"",
  phases:[
    {id:"foundation",label:"Фаза 0",title:"Підготувати Discord до перших людей",window:"До активізації",status:"planned",gate:"Онбординг веде до першої дії; правила, ролі, модерація й календар готові; порожні канали прибрані.",tasks:[
      {text:"Сформулювати одну обіцянку сервера та правила українською",done:false},
      {text:"Залишити лише необхідні канали: welcome, general, LFG, events, learning, voice",done:false},
      {text:"Налаштувати ролі за інтересом, грою, часом і навчальним напрямом",done:false},
      {text:"Призначити відповідальних за welcome, івенти, voice та безпеку",done:false},
      {text:"Підготувати чотири стартові формати: play, meet, team, learn",done:false}
    ]},
    {id:"seed",label:"Фаза 1",title:"Активізувати Discord через знайомих",window:"Тестовий цикл 1",status:"planned",gate:"Сервер виглядає живим без зовнішнього трафіку: новачок отримує відповідь, а базові формати можна повторювати за розкладом.",tasks:[
      {text:"Особисто запросити знайомих і знайомих знайомих, пояснивши конкретну роль у тесті",done:false},
      {text:"Зібрати невелике ядро ведучих, а не лише пасивних учасників",done:false},
      {text:"Провести по одному тесту: newcomer table, squad draft, розважальний івент, skill club",done:false},
      {text:"Записати, де люди губляться в онбордингу і які канали залишаються порожніми",done:false},
      {text:"Виправити структуру до запуску масового контенту",done:false}
    ]},
    {id:"content",label:"Фаза 2",title:"Запустити TikTok і Threads",window:"Після живого seed",status:"planned",gate:"Знайдені повторювані теми й формати, що приводять не лише перегляди, а activated joins; команда витримує контентний ритм.",tasks:[
      {text:"Створити TikTok і Threads під єдиним брендом екосистеми",done:false},
      {text:"Тестувати TikTok-серії: біль, конфлікт, utility та event CTA",done:false},
      {text:"У Threads публікувати нативні питання й активно відповідати у релевантних дискусіях",done:false},
      {text:"Створити окремі Discord invite для TikTok, Threads і кожного типу CTA",done:false},
      {text:"Щотижня порівнювати profile visits → joins → first message/voice → D7 return",done:false},
      {text:"Не запускати Telegram, доки контентний процес нестабільний",done:false}
    ]},
    {id:"live",label:"Фаза 3",title:"Додати TikTok LIVE",window:"Коли LIVE доступний",status:"planned",gate:"Акаунт відповідає вимогам TikTok; ефіри мають повторюваний сценарій, модератора й дають якісні переходи без safety-інцидентів.",tasks:[
      {text:"Перевірити eligibility: 18+ і необхідний follower threshold у регіоні",done:false},
      {text:"Призначити ведучого й окремого модератора чату",done:false},
      {text:"Провести формати: live-знайомство, збір скваду, квіз або розбір ігрової новини",done:false},
      {text:"Використовувати один CTA на ефір: конкретна Discord-подія або LFG",done:false},
      {text:"Не показувати приватні канали, повідомлення та дані учасників",done:false}
    ]},
    {id:"telegram",label:"Фаза 4",title:"Запустити Telegram-медіа",window:"Після стабілізації контенту",status:"planned",gate:"Telegram корисний самостійно, має стабільні рубрики й окрему аналітику; переходи в Discord відбуваються з конкретною причиною.",tasks:[
      {text:"Створити канал з тією ж назвою, айдентикою та чіткою обіцянкою «читати»",done:false},
      {text:"Підготувати стартовий запас новин, дайджестів, релізів і корисних добірок",done:false},
      {text:"Запустити рубрики «новина → LFG», «новина → voice», «дайджест → подія»",done:false},
      {text:"Створити окремі Discord invite для Telegram-рубрик",done:false},
      {text:"У TikTok частину роликів вести лише в Telegram, частину — лише в Discord, частину — на вибір",done:false},
      {text:"Не дублювати всю Discord-стрічку в Telegram",done:false}
    ]},
    {id:"ecosystem",label:"Фаза 5",title:"Зв'язати канали в одну екосистему",window:"Наступний тестовий цикл",status:"planned",gate:"Для кожного каналу зрозуміла роль; є дані про якість когорт; команда знає, які переходи масштабувати, а які зупинити.",tasks:[
      {text:"Зібрати єдиний контент-календар TikTok, LIVE, Threads, Telegram і Discord",done:false},
      {text:"Telegram → Discord вести на LFG, voice, знайомства та навчальні події",done:false},
      {text:"Discord → Telegram вести на новини, дайджести й нагадування",done:false},
      {text:"Порівнювати джерела за activated joins і D7 return, а не за кліками",done:false},
      {text:"Окремо оцінити попит на розваги, знайомства, команди й навчання",done:false},
      {text:"Прийняти go / change / stop рішення для кожного каналу",done:false}
    ]},
    {id:"learning",label:"Фаза 6",title:"Розширити навчальний напрям",window:"Після підтвердження ядра",status:"planned",gate:"Є регулярний попит, ведучі та видимий результат навчання; напрям не виснажує основну команду.",tasks:[
      {text:"Обрати один навчальний напрям на основі запитів активних учасників",done:false},
      {text:"Запустити повторюваний workshop або skill club з ведучим",done:false},
      {text:"Публікувати корисний матеріал у Telegram і практикувати його в Discord",done:false},
      {text:"Збирати результати: завершена вправа, міні-проєкт або нова навичка",done:false},
      {text:"Лише після доказу цінності тестувати необов'язкову підтримку чи підписку",done:false}
    ]}
  ]
};

const cloneDefault=()=>JSON.parse(JSON.stringify(defaultRoadmap));
function loadRoadmap(){try{const saved=JSON.parse(localStorage.getItem(ROADMAP_KEY));return saved&&Array.isArray(saved.phases)?saved:cloneDefault()}catch{return cloneDefault()}}
let roadmapState=loadRoadmap();
const board=document.querySelector("#roadmapBoard");
const statusLabels={planned:"Заплановано",active:"В роботі",blocked:"Заблоковано",done:"Готово"};
function saveRoadmap(){localStorage.setItem(ROADMAP_KEY,JSON.stringify(roadmapState));updateSummary()}
function esc(value){return String(value).replace(/[&<>"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[char]))}
function renderRoadmap(){
  document.querySelector("#roadmapStart").value=roadmapState.start||"";
  board.innerHTML=roadmapState.phases.map((phase,index)=>`<article class="roadmap-phase" data-status="${esc(phase.status)}" data-index="${index}">
    <div class="phase-index">${String(index+1).padStart(2,"0")}</div>
    <div class="phase-content">
      <div class="phase-head">
        <div class="phase-title-group"><input name="phase-${index}-label" data-field="label" value="${esc(phase.label)}" aria-label="Мітка фази"><input name="phase-${index}-title" class="phase-title" data-field="title" value="${esc(phase.title)}" aria-label="Назва фази"></div>
        <select name="phase-${index}-status" data-field="status" aria-label="Статус фази">${Object.entries(statusLabels).map(([value,label])=>`<option value="${value}" ${phase.status===value?"selected":""}>${label}</option>`).join("")}</select>
        <div class="phase-actions"><button data-action="up" title="Вище">↑</button><button data-action="down" title="Нижче">↓</button><button data-action="delete-phase" class="delete" title="Видалити">×</button></div>
      </div>
      <div class="phase-meta"><div class="phase-window"><label>ЧАСОВЕ ВІКНО<input name="phase-${index}-window" data-field="window" value="${esc(phase.window)}"></label></div><div class="phase-gate"><label>КРИТЕРІЙ ПЕРЕХОДУ<textarea name="phase-${index}-gate" data-field="gate">${esc(phase.gate)}</textarea></label></div></div>
      <div class="phase-tasks">${phase.tasks.map((task,taskIndex)=>`<div class="task-row ${task.done?"done":""}" data-task="${taskIndex}"><input name="phase-${index}-task-${taskIndex}-done" type="checkbox" ${task.done?"checked":""} aria-label="Виконано"><input name="phase-${index}-task-${taskIndex}-text" type="text" value="${esc(task.text)}" aria-label="Текст задачі"><button class="task-delete" data-action="delete-task" title="Видалити задачу">×</button></div>`).join("")}</div>
      <button class="add-task" data-action="add-task">＋ Додати задачу</button>
    </div></article>`).join("");
  updateSummary();
}
function updateSummary(){const all=roadmapState.phases.flatMap(phase=>phase.tasks);document.querySelector("#roadmapDone").textContent=`${all.filter(task=>task.done).length} / ${all.length}`;document.querySelector("#roadmapPhases").textContent=roadmapState.phases.length}
board.addEventListener("input",event=>{const phaseEl=event.target.closest(".roadmap-phase");if(!phaseEl)return;const phase=roadmapState.phases[Number(phaseEl.dataset.index)];const taskEl=event.target.closest(".task-row");if(taskEl){const task=phase.tasks[Number(taskEl.dataset.task)];if(event.target.type==="checkbox")task.done=event.target.checked;else if(event.target.type==="text")task.text=event.target.value;taskEl.classList.toggle("done",task.done)}else if(event.target.dataset.field){phase[event.target.dataset.field]=event.target.value;phaseEl.dataset.status=phase.status}saveRoadmap()});
board.addEventListener("change",event=>{if(event.target.dataset.field==="status")renderRoadmap()});
board.addEventListener("click",event=>{const button=event.target.closest("button[data-action]");if(!button)return;const phaseEl=button.closest(".roadmap-phase"),index=Number(phaseEl.dataset.index),phase=roadmapState.phases[index],action=button.dataset.action;if(action==="add-task")phase.tasks.push({text:"Нова задача",done:false});if(action==="delete-task")phase.tasks.splice(Number(button.closest(".task-row").dataset.task),1);if(action==="delete-phase")roadmapState.phases.splice(index,1);if(action==="up"&&index>0)[roadmapState.phases[index-1],roadmapState.phases[index]]=[roadmapState.phases[index],roadmapState.phases[index-1]];if(action==="down"&&index<roadmapState.phases.length-1)[roadmapState.phases[index+1],roadmapState.phases[index]]=[roadmapState.phases[index],roadmapState.phases[index+1]];saveRoadmap();renderRoadmap()});
document.querySelector("#roadmapStart").addEventListener("change",event=>{roadmapState.start=event.target.value;saveRoadmap()});
document.querySelector("#addPhase").addEventListener("click",()=>{roadmapState.phases.push({id:`custom-${Date.now()}`,label:"Нова фаза",title:"Назва фази",window:"Строк",status:"planned",gate:"Критерій переходу",tasks:[{text:"Нова задача",done:false}]});saveRoadmap();renderRoadmap()});
document.querySelector("#resetRoadmap").addEventListener("click",()=>{if(confirm("Повернути початковий тестовий roadmap? Ваші локальні зміни буде втрачено.")){roadmapState=cloneDefault();saveRoadmap();renderRoadmap()}});
document.querySelector("#exportRoadmap").addEventListener("click",()=>{const blob=new Blob([JSON.stringify(roadmapState,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url;link.download="community-ua-test-roadmap.json";link.click();URL.revokeObjectURL(url)});
renderRoadmap();
