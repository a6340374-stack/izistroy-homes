const money = new Intl.NumberFormat('ru-RU');
const projects = [
  {
    id: 'modular30', title: 'Модульный дом 30', area: 30, size: '5 × 6 м', rooms: '1 спальня', floors: '1 этаж', price: 1000000,
    categories: ['life', 'business'], type: 'Готовые модули', image: 'assets/hero.webp', position: '65% center',
    package: 'Отделка, электрика, витражное остекление',
    included: ['Дом из СИП-панелей', 'Готовая отделка', 'Электрика', 'Витражное остекление', 'Два модуля по 2,5 × 6 м'],
    note: 'Без сантехники. Фундамент, доставка, разгрузка и установка уточняются при расчёте.',
    description: 'Отдельная спальня, кухня-гостиная и помещение под санузел. Компактный дом для своего участка или гостевого размещения.',
    source: 'https://www.facebook.com/reel/1764488697976283/', plan: true
  },
  {
    id: 'glamping15', title: 'Дом для глэмпинга', area: 15, size: '2,5 × 6 м', rooms: 'Студия', floors: '1 этаж', price: 395000,
    categories: ['business', 'life'], type: 'Для глэмпинга', image: 'assets/hero.webp', position: '72% center',
    package: 'Комплектация по согласованию',
    included: ['Компактный домик 2,5 × 6 м', 'Возможность доставки по России'],
    note: 'Точный состав отделки, мебели, инженерии, фундамента и установки необходимо уточнить. Площадь рассчитана из габаритов.',
    description: 'Домик для размещения гостей на турбазе или в глэмпинге. Может стать отдельным гостевым пространством на вашем участке.',
    source: 'https://www.facebook.com/reel/1480766720569775/'
  },
  {
    id: 'compact20', title: 'Компактный дом 20', area: 20, terrace: 6, size: 'Уточняется по проекту', rooms: 'Студия', floors: '1 этаж', price: 503000,
    categories: ['life', 'business'], type: 'Домокомплект и сборка', image: 'assets/compact.webp', position: 'center',
    package: 'Каркас, сборка, фундамент и терраса',
    included: ['Каркас дома', 'Сборка', 'Свайный фундамент', 'Крытая терраса 6 м²'],
    note: 'Отделка и мебель в цену не входят. Остекление и инженерные системы уточняются. Площадь по наружному контуру, терраса отдельно.',
    description: 'Студия с кухонной зоной и отдельным санузлом. Подходит для загородного отдыха и гостевого размещения.',
    source: 'https://www.facebook.com/krovati05.ru/posts/pfbid02wU1mkMH9FcacgWMThy5hLziWPR3Nt9B4AcVfGfGLPKNr1mj1kfSMZE1GxVXHK8UZl'
  },
  {
    id: 'compact25', title: 'Компактный дом 25', area: 25, terrace: 7.5, size: 'Уточняется по проекту', rooms: '1 спальня', floors: '1 этаж', price: 628750,
    categories: ['life', 'business'], type: 'Домокомплект и сборка', image: 'assets/compact.webp', position: '65% center',
    package: 'Каркас, сборка, фундамент и терраса',
    included: ['Каркас дома', 'Сборка', 'Свайный фундамент', 'Крытая терраса 7,5 м²'],
    note: 'Отделка и мебель в цену не входят. Остекление и инженерные системы уточняются. Площадь по наружному контуру, терраса отдельно.',
    description: 'Отдельная спальня, кухня-гостиная и санузел. Продуманное пространство для жизни за городом.',
    source: 'https://www.facebook.com/krovati05.ru/posts/pfbid02wU1mkMH9FcacgWMThy5hLziWPR3Nt9B4AcVfGfGLPKNr1mj1kfSMZE1GxVXHK8UZl'
  },
  {
    id: 'terrace35', title: 'Дом с террасой 35', area: 35, terrace: 10, size: 'Уточняется по проекту', rooms: '1 спальня', floors: '1 этаж', price: 875000,
    categories: ['life'], type: 'Домокомплект и сборка', image: 'assets/compact.webp', position: 'center',
    package: 'Каркас, сборка, фундамент и терраса',
    included: ['Каркас дома', 'Сборка', 'Свайный фундамент', 'Терраса 10 м²'],
    note: 'Панорамное остекление, отделка и инженерные коммуникации рассчитываются отдельно. В источнике 35 м² указаны как жилая площадь.',
    description: 'Можно предусмотреть кухню-гостиную, спальню и санузел. Крытая терраса дополняет пространство дома.',
    source: 'https://www.facebook.com/reel/1803456277653335/'
  },
  {
    id: 'family86', title: 'Семейный дом 86', area: 86, terrace: 10, size: 'Уточняется по проекту', rooms: '3 спальни', floors: '2 этажа', price: 1766000,
    categories: ['life', 'business'], type: 'Домокомплект и сборка', image: 'assets/family.webp', position: 'center',
    package: 'Каркас, сборка и свайный фундамент',
    included: ['Каркас из СИП-панелей', 'Сборка конструкции', 'Свайный фундамент'],
    note: 'Отделка, остекление, коммуникации, доставка и состав террасы уточняются при согласовании. Итоговая стоимость зависит от региона.',
    description: 'Два этажа, три спальни, терраса и наружная лестница на второй этаж. Для семьи или гостевого бизнеса.',
    source: 'https://www.facebook.com/reel/1786310149184474/'
  },
  {
    id: 'compact15', title: 'Компактный дом 15', area: 15, terrace: 4.5, size: 'Уточняется по проекту', rooms: 'Студия', floors: '1 этаж', price: 377250,
    categories: ['life', 'business'], type: 'Домокомплект и сборка', image: 'assets/compact.webp', position: 'center',
    package: 'Каркас, сборка, фундамент и терраса',
    included: ['Каркас дома', 'Сборка', 'Свайный фундамент', 'Крытая терраса 4,5 м²'],
    note: 'Отделка и мебель отдельно. Остекление и инженерные системы уточняются. Площадь по наружному контуру.',
    description: 'Компактная студия с кухонной зоной и отдельным санузлом.',
    source: 'https://www.facebook.com/krovati05.ru/posts/pfbid02wU1mkMH9FcacgWMThy5hLziWPR3Nt9B4AcVfGfGLPKNr1mj1kfSMZE1GxVXHK8UZl'
  },
  {
    id: 'compact30', title: 'Дом с террасой 30', area: 30, terrace: 7.5, size: 'Уточняется по проекту', rooms: '1 спальня', floors: '1 этаж', price: 738750,
    categories: ['life', 'business'], type: 'Домокомплект и сборка', image: 'assets/compact.webp', position: 'center',
    package: 'Каркас, сборка, фундамент и терраса',
    included: ['Каркас дома', 'Сборка', 'Свайный фундамент', 'Крытая терраса 7,5 м²'],
    note: 'Отделка и мебель отдельно. Остекление и инженерные системы уточняются. Площадь по наружному контуру.',
    description: 'Спальня, кухня-гостиная, холл и санузел. Терраса считается отдельно от площади дома.',
    source: 'https://www.facebook.com/krovati05.ru/posts/pfbid02wU1mkMH9FcacgWMThy5hLziWPR3Nt9B4AcVfGfGLPKNr1mj1kfSMZE1GxVXHK8UZl'
  },
  {
    id: 'compact40', title: 'Семейный дом 40', area: 40, terrace: 7.5, size: 'Уточняется по проекту', rooms: '2 спальни', floors: '1 этаж', price: 958750,
    categories: ['life'], type: 'Домокомплект и сборка', image: 'assets/compact.webp', position: 'center',
    package: 'Каркас, сборка, фундамент и терраса',
    included: ['Каркас дома', 'Сборка', 'Свайный фундамент', 'Крытая терраса 7,5 м²'],
    note: 'Отделка и мебель отдельно. Остекление и инженерные системы уточняются. Площадь по наружному контуру.',
    description: 'Две спальни, кухня-гостиная и санузел. Пространство для небольшой семьи.',
    source: 'https://www.facebook.com/krovati05.ru/posts/pfbid02wU1mkMH9FcacgWMThy5hLziWPR3Nt9B4AcVfGfGLPKNr1mj1kfSMZE1GxVXHK8UZl'
  }
];

const grid = document.querySelector('#project-grid');
const count = document.querySelector('#catalog-count');
const showAllButton = document.querySelector('#show-all');
const dialog = document.querySelector('#project-dialog');
const projectSelect = document.querySelector('#request-project');
let category = 'all';
let expanded = false;
let requestText = '';

function renderCatalog() {
  const filtered = projects.filter(project => category === 'all' || project.categories.includes(category));
  const sort = document.querySelector('#sort').value;
  if (sort === 'price') filtered.sort((a, b) => a.price - b.price);
  if (sort === 'area') filtered.sort((a, b) => a.area - b.area);
  const visible = expanded ? filtered : filtered.slice(0, 6);
  count.textContent = `${filtered.length} ${filtered.length === 1 ? 'проект' : filtered.length < 5 ? 'проекта' : 'проектов'}`;
  grid.innerHTML = visible.map(project => `
    <article class="project-card">
      <div class="project-photo"><img src="${project.image}" alt="Архитектурная визуализация — ${project.title}" style="object-position:${project.position}" loading="lazy" width="768" height="512"><span class="project-type">${project.type}</span></div>
      <div class="project-info"><h3>${project.title}</h3>
        <div class="project-specs"><span><i class="area-icon" aria-hidden="true"></i>${project.area} м²</span><span><i class="room-icon" aria-hidden="true"></i>${project.rooms}</span></div>
        <p class="project-price">${money.format(project.price)} ₽</p><p class="project-package">${project.package}</p>
        <button class="project-link" data-project="${project.id}" aria-label="Подробнее о проекте ${project.title}">Подробнее о проекте</button>
      </div>
    </article>`).join('');
  showAllButton.hidden = filtered.length <= 6;
  showAllButton.textContent = expanded ? 'Свернуть каталог' : 'Показать все проекты';
}

function setCategory(value) {
  category = value;
  expanded = false;
  document.querySelectorAll('[data-filter]').forEach(button => {
    const selected = button.dataset.filter === value;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  renderCatalog();
}

function openProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  document.querySelector('#dialog-content').innerHTML = `
    <div class="dialog-image"><img src="${project.image}" alt="Визуализация — ${project.title}" style="object-position:${project.position}"><span class="image-note">Иллюстративная визуализация возможной отделки</span></div>
    <div class="dialog-body"><h2 id="dialog-title">${project.title}</h2><div class="dialog-columns"><div><p>${project.description}</p>
      <dl class="dialog-specs"><div><dt>Площадь дома</dt><dd>${project.area} м²</dd></div><div><dt>Этажность</dt><dd>${project.floors}</dd></div><div><dt>Планировка</dt><dd>${project.rooms}</dd></div><div><dt>${project.terrace ? 'Терраса' : 'Габариты'}</dt><dd>${project.terrace ? `${String(project.terrace).replace('.', ',')} м²` : project.size}</dd></div></dl>
      ${project.plan ? '<div class="dialog-plan"><p class="plan-heading">Схема расположения помещений · 5 × 6 м</p><div class="floorplan"><div>Спальня</div><div>Санузел</div><div class="living">Кухня-гостиная</div></div><p class="plan-note">Условная схема. Размеры помещений уточняются в проекте.</p></div>' : ''}
      </div><div><p class="dialog-price">${money.format(project.price)} ₽</p><h3>Что включено</h3><ul>${project.included.map(item => `<li>${item}</li>`).join('')}</ul><p class="small">${project.note}</p><button class="button primary" data-select-project="${project.id}">Обсудить этот проект</button><br><a class="dialog-source" href="${project.source}" target="_blank" rel="noopener">Посмотреть исходную публикацию</a><p class="small">Цена из публикации 2026 года. Актуальная стоимость фиксируется после согласования проекта.</p></div></div></div>`;
  dialog.showModal();
}

function goToRequest(projectId) {
  if (projectId) projectSelect.value = projectId;
  if (dialog.open) dialog.close();
  document.querySelector('#contacts').scrollIntoView({ behavior: 'smooth' });
  projectSelect.focus({ preventScroll: true });
}

document.addEventListener('click', event => {
  const projectButton = event.target.closest('[data-project]');
  if (projectButton) openProject(projectButton.dataset.project);
  const categoryButton = event.target.closest('[data-category-link]');
  if (categoryButton) {
    setCategory(categoryButton.dataset.categoryLink);
    document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
  }
  const selectButton = event.target.closest('[data-select-project]');
  if (selectButton) goToRequest(selectButton.dataset.selectProject);
  if (event.target.closest('[data-request]')) goToRequest();
});

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => setCategory(button.dataset.filter)));
document.querySelector('#sort').addEventListener('change', renderCatalog);
showAllButton.addEventListener('click', () => {
  expanded = !expanded;
  renderCatalog();
  if (!expanded) document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rectangle = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rectangle.left || event.clientX > rectangle.right || event.clientY < rectangle.top || event.clientY > rectangle.bottom)) dialog.close();
});

const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const opened = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.setAttribute('aria-label', opened ? 'Закрыть меню' : 'Открыть меню');
});
navigation.addEventListener('click', event => {
  if (!event.target.closest('a')) return;
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
  navigation.querySelectorAll('a').forEach(link => link.classList.toggle('active', link === event.target));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Открыть меню');
    menuButton.focus();
  }
});

projectSelect.innerHTML = '<option value="undecided">Пока выбираю</option>' + projects.map(project => `<option value="${project.id}">${project.title} — ${money.format(project.price)} ₽</option>`).join('');
document.querySelector('#request-form').addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const selected = projects.find(project => project.id === formData.get('project'));
  const region = String(formData.get('region') || '').trim();
  const comment = String(formData.get('comment') || '').trim();
  if (!region) {
    event.target.elements.region.setCustomValidity('Укажите город или регион');
    event.target.elements.region.reportValidity();
    return;
  }
  requestText = [
    'Запрос на расчёт дома ИЗИСТРОЙ',
    `Проект — ${selected ? selected.title : 'Нужна помощь с выбором'}`,
    `Назначение — ${formData.get('purpose')}`,
    `Регион — ${region}`,
    selected ? `Цена из публикации — ${money.format(selected.price)} ₽` : '',
    selected ? `Комплектация — ${selected.package}` : '',
    comment ? `Пожелания — ${comment}` : '',
    'Прошу уточнить актуальную цену, полную комплектацию, сроки, доставку, установку и гарантию.'
  ].filter(Boolean).join('\n');
  document.querySelector('#request-text').textContent = requestText;
  document.querySelector('#request-result').hidden = false;
  document.querySelector('#copy-status').textContent = '';
  document.querySelector('#request-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
document.querySelector('[name="region"]').addEventListener('input', event => event.target.setCustomValidity(''));
document.querySelector('#copy-request').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(requestText);
    status.textContent = 'Запрос скопирован';
  } catch {
    status.textContent = 'Выделите текст запроса и скопируйте его или скачайте файл.';
  }
});
document.querySelector('#download-request').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob(['\ufeff' + requestText], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Запрос на дом ИЗИСТРОЙ.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

renderCatalog();
