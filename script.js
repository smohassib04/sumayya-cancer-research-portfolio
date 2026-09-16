const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');

const projectMeanings = [
  'When biomarker testing is unavailable or unaffordable, patients may be more likely to proceed without clinically relevant information that could help inform treatment decisions, limiting the evidence available to guide care.',
  'When cost or coverage barriers make follow-up harder after an abnormal screening result, patients may be more likely to delay or forgo recommended diagnostic evaluation. That delay can leave a potentially important finding unresolved longer, which is detrimental to timely cancer detection and care.'
];

document.querySelectorAll('.case-card').forEach((card, index) => {
  const meaning = document.createElement('div');
  meaning.className = 'case-row case-meaning';
  meaning.innerHTML = `<h4>Meaning</h4><p>${projectMeanings[index]}</p>`;
  card.querySelector('.case-body')?.append(meaning);
});

const projectsLink = navigation?.querySelector('a[href="#case-studies"]');
if (projectsLink) projectsLink.textContent = 'Projects';
document.querySelector('.case-section .section-label').textContent = '04 / Featured projects';
document.querySelector('#case-title').textContent = 'Projects that move evidence toward policy.';

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();