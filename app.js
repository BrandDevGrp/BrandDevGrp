const icon = (name, size = 18) => {
  const paths = {
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    inbox: '<path d="M4 4h16v14H4z"/><path d="M4 13h5l2 3h2l2-3h5"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    dots: '<circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
    hide: '<path d="M3 3l18 18M10.6 10.7a2 2 0 0 0 2.7 2.7M9.9 4.2A10.8 10.8 0 0 1 12 4c7 0 10 8 10 8a17 17 0 0 1-2 3M6.6 6.6C3.7 8.5 2 12 2 12s3 8 10 8c1.6 0 3-.4 4.2-1"/>',
    sort: '<path d="M3 6h14M3 12h10M3 18h6M19 4v16m0 0-3-3m3 3 3-3"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    board: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
};

const people = {
  maya: ['Maya', 'https://i.pravatar.cc/60?img=47'], theo: ['Theo', 'https://i.pravatar.cc/60?img=12'],
  nia: ['Nia', 'https://i.pravatar.cc/60?img=32'], alex: ['Alex', 'https://i.pravatar.cc/60?img=11'],
  sam: ['Sam', 'https://i.pravatar.cc/60?img=5']
};

let tasks = [
  { group:'Strategy & Planning', name:'Define product positioning', owner:'maya', status:'Done', due:'Apr 2', priority:'High' },
  { group:'Strategy & Planning', name:'Finalize target audience', owner:'theo', status:'Done', due:'Apr 4', priority:'High' },
  { group:'Strategy & Planning', name:'Create launch timeline', owner:'nia', status:'Working on it', due:'Apr 8', priority:'Medium' },
  { group:'Strategy & Planning', name:'Align internal stakeholders', owner:'alex', status:'Stuck', due:'Apr 10', priority:'High' },
  { group:'Creative Production', name:'Develop campaign concept', owner:'sam', status:'Working on it', due:'Apr 12', priority:'High' },
  { group:'Creative Production', name:'Design launch assets', owner:'maya', status:'Working on it', due:'Apr 15', priority:'Medium' },
  { group:'Creative Production', name:'Write website copy', owner:'theo', status:'Not started', due:'Apr 16', priority:'Medium' },
  { group:'Creative Production', name:'Produce launch video', owner:'nia', status:'Not started', due:'Apr 19', priority:'Low' }
];

const app = document.querySelector('#app');
app.innerHTML = `
  <header class="topbar">
    <a class="brand" href="#"><span class="brand-mark"><i></i><i></i><i></i></span><strong>workroom</strong></a>
    <label class="global-search">${icon('search')}<input placeholder="Search everything..."/><kbd>⌘ K</kbd></label>
    <nav class="top-actions"><button class="icon-btn" title="Notifications">${icon('bell')}</button><button class="invite">${icon('plus',16)} Invite</button><button class="avatar me">TB</button></nav>
  </header>
  <aside class="sidebar">
    <nav class="primary-nav">
      <a href="#">${icon('home')} Home</a><a href="#">${icon('inbox')} My work <span class="count">4</span></a>
      <a href="#">${icon('bell')} Inbox <span class="dot"></span></a><a href="#">${icon('chart')} Dashboards</a>
    </nav>
    <div class="workspace-title"><span class="workspace-icon">B</span><b>Brand Studio</b><button>${icon('dots')}</button></div>
    <div class="side-search">${icon('search',15)}<input placeholder="Search boards"/><button>${icon('plus',16)}</button></div>
    <div class="side-label">Favorites</div>
    <a class="board-link" href="#">${icon('heart',16)} Campaign Pipeline</a>
    <div class="side-label boards-label">Boards <button>${icon('plus',15)}</button></div>
    <a class="board-link active" href="#"><span class="board-color coral"></span>Product Launch</a>
    <a class="board-link" href="#"><span class="board-color violet"></span>Content Calendar</a>
    <a class="board-link" href="#"><span class="board-color gold"></span>Website Redesign</a>
    <a class="board-link" href="#"><span class="board-color blue"></span>Client Projects</a>
    <button class="browse">${icon('grid',16)} Browse templates</button>
    <div class="trial"><div><b>Free trial</b><span>9 days left</span></div><div class="trial-bar"><i></i></div><button>See plans</button></div>
  </aside>
  <main>
    <section class="board-header">
      <div class="title-row"><div><h1>Product Launch <button class="star">☆</button></h1><p>Plan and execute our Q2 product launch — from strategy to go-live.</p></div><div class="header-actions"><span class="viewers"><img src="${people.maya[1]}"><img src="${people.theo[1]}"><img src="${people.nia[1]}"><i>+4</i></span><button class="outline">${icon('users',16)} Share</button><button class="outline">${icon('dots')}</button></div></div>
      <div class="view-tabs"><button class="active">${icon('board',16)} Main table</button><button>${icon('chart',16)} Dashboard</button><button>${icon('calendar',16)} Calendar</button><button class="add-view">${icon('plus',15)} Add view</button></div>
    </section>
    <section class="toolbar">
      <div class="add-wrap"><button id="addTask" class="add-task">New task <span>${icon('down',14)}</span></button></div>
      <label class="table-search">${icon('search',17)}<input id="taskSearch" placeholder="Search"/></label>
      <button>${icon('users',17)} Person</button><button>${icon('filter',17)} Filter</button><button>${icon('sort',17)} Sort</button><button>${icon('hide',17)} Hide</button>
    </section>
    <section id="board" class="board"></section>
  </main>
  <div id="toast" class="toast">Task added to your board</div>
`;

const statusClass = s => ({'Done':'done','Working on it':'working','Stuck':'stuck','Not started':'not-started'})[s];
const priorityClass = p => p.toLowerCase();
const board = document.querySelector('#board');

function render(filter = '') {
  const groups = ['Strategy & Planning', 'Creative Production'];
  board.innerHTML = groups.map((group, gi) => {
    const items = tasks.filter(t => t.group === group && t.name.toLowerCase().includes(filter.toLowerCase()));
    return `<div class="task-group ${gi ? 'purple' : ''}">
      <div class="group-title"><button>${icon('down',18)}</button><h2>${group}</h2><span>${items.length} tasks</span><button class="group-menu">${icon('dots')}</button></div>
      <div class="task-table">
        <div class="task-row headings"><div class="check-cell"></div><div>Task</div><div>Owner</div><div>Status</div><div>Due date</div><div>Priority</div><div></div></div>
        ${items.map((t, idx) => `<div class="task-row" data-task="${tasks.indexOf(t)}">
          <div class="check-cell"><input type="checkbox" aria-label="Select ${t.name}"></div><div class="task-name"><button class="expand">${icon('chevron',15)}</button><span contenteditable="true">${t.name}</span><button class="comment">◯</button></div>
          <div class="owner"><img src="${people[t.owner][1]}" alt="${people[t.owner][0]}" title="${people[t.owner][0]}"></div>
          <div><button class="status ${statusClass(t.status)}">${t.status}</button></div><div class="due">${icon('calendar',14)} ${t.due}</div>
          <div><span class="priority ${priorityClass(t.priority)}">${t.priority}</span></div><div><button class="row-menu">${icon('dots')}</button></div>
        </div>`).join('')}
        <button class="inline-add" data-group="${group}">${icon('plus',15)} Add task</button>
      </div>
    </div>`;
  }).join('');
  bindRows();
}

function bindRows() {
  document.querySelectorAll('.status').forEach(btn => btn.onclick = () => {
    const row = btn.closest('.task-row'); const task = tasks[+row.dataset.task];
    const values = ['Not started','Working on it','Stuck','Done'];
    task.status = values[(values.indexOf(task.status)+1)%values.length]; render(document.querySelector('#taskSearch').value);
  });
  document.querySelectorAll('.inline-add').forEach(btn => btn.onclick = () => addTask(btn.dataset.group));
  document.querySelectorAll('.task-name span').forEach(span => span.onblur = () => {
    tasks[+span.closest('.task-row').dataset.task].name = span.textContent.trim() || 'Untitled task';
  });
}

function addTask(group = 'Strategy & Planning') {
  tasks.push({group, name:'New launch task', owner:'maya', status:'Not started', due:'Apr 22', priority:'Medium'});
  render(document.querySelector('#taskSearch').value);
  const toast = document.querySelector('#toast'); toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),1800);
}

document.querySelector('#addTask').onclick = () => addTask();
document.querySelector('#taskSearch').oninput = e => render(e.target.value);
document.querySelector('.global-search input').onfocus = () => document.querySelector('.global-search').classList.add('focused');
document.querySelector('.global-search input').onblur = () => document.querySelector('.global-search').classList.remove('focused');
render();
