const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');

document.querySelectorAll('#about, .experience-section, #methods, #education, .approach-band, .environment-section, .contact-section').forEach((section) => section.remove());
if (navigation) navigation.innerHTML = '<a href="#case-studies">Projects</a><a href="#case-studies">Bill effects</a><a href="#case-studies">Sources</a>';
document.title = 'Cancer Policy Projects | Sumayya Mohassib';
document.querySelector('.eyebrow').textContent = 'Cancer policy projects / R data analysis / access to care';
document.querySelector('#hero-title').innerHTML = 'Using Data Analysis <em>&amp;</em> Policy to Fix Problems People Face';
document.querySelector('.hero-lede').textContent = 'A focused research project examining how cancer data, evidence, and R-supported analysis can identify access problems and inform policy responses in Florida.';
document.querySelector('.button-primary').textContent = 'View projects ↗';
document.querySelector('.button-secondary').textContent = 'View bill effects ↗';
document.querySelector('.text-link').textContent = 'View sources →';
document.querySelector('.button-primary').href = '#case-studies';
document.querySelector('.button-secondary').href = '#case-studies';
document.querySelector('.text-link').href = '#case-studies';
document.querySelector('.hero-aside p').textContent = 'The question is practical: where does the system make cancer care harder, and what can evidence help change?';
document.querySelector('.hero-aside strong').textContent = 'Data analysis, policy, and access';
document.querySelector('.case-section .section-label').textContent = '01 / Project evidence';
document.querySelector('#case-title').textContent = 'Two enacted bills. Two access problems.';

const projectMeanings = [
  'When biomarker testing is unavailable or unaffordable, patients may be more likely to proceed without clinically relevant information that could help inform treatment decisions, limiting the evidence available to guide care.',
  'When cost or coverage barriers make follow-up harder after an abnormal screening result, patients may be more likely to delay or forgo recommended diagnostic evaluation. That delay can leave a potentially important finding unresolved longer, which is detrimental to timely cancer detection and care.'
];

const projectAnalysis = [
  'Used R, statistical analysis, and research review to organize cancer and health policy information, examine coverage gaps, and translate findings into evidence that could support a legislative response.',
  'Used R, quantitative analysis, and research review to examine the relationship between out-of-pocket costs, follow-up barriers, and access to diagnostic breast care.'
];

const projectEffects = [
  'HB 885 changed coverage requirements for clinically supported biomarker testing under Florida Medicaid and state employee health plans. The policy effect is a change in what eligible plans must cover; its effect on testing use and patient outcomes requires evaluation.',
  'SB 158 addresses cost-sharing for diagnostic and supplemental breast examinations within Florida’s state group insurance program and took effect January 1, 2026. Its effect on follow-up care and detection outcomes should be measured rather than assumed.'
];

document.querySelectorAll('.case-card').forEach((card, index) => {
  const caseBody = card.querySelector('.case-body');
  const analysis = document.createElement('div');
  analysis.className = 'case-row case-analysis';
  analysis.innerHTML = `<h4>R + Data Analysis</h4><p>${projectAnalysis[index]}</p>`;
  const effect = document.createElement('div');
  effect.className = 'case-row case-effect';
  effect.innerHTML = `<h4>Effect</h4><p>${projectEffects[index]}</p>`;
  const meaning = document.createElement('div');
  meaning.className = 'case-row case-meaning';
  meaning.innerHTML = `<h4>Meaning</h4><p>${projectMeanings[index]}</p>`;
  caseBody?.append(analysis, effect, meaning);
});

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