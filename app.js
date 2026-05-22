const data = {
  models: [
    { tag: 'Opportunity', title: 'Discovery over ideation', body: 'Do not start by worshipping ideas. Start by finding mismatches between urgent human or organizational needs and inadequate current alternatives.' },
    { tag: 'Uncertainty', title: 'Assumption stack', body: 'Every startup rests on assumptions about customers, pain, willingness to pay, channels, product feasibility, timing, and trust. Make them explicit.' },
    { tag: 'Resources', title: 'Resource assembly', body: 'Founders recruit capital, talent, credibility, partners, users, distribution, data, and belief before the company appears inevitable.' },
    { tag: 'Value', title: 'Create and capture', body: 'Value creation improves a customer outcome. Value capture turns enough of that improvement into revenue and margin.' },
    { tag: 'Timing', title: 'Why now?', body: 'A startup needs a catalyst: new technology, regulation, cost collapse, behavior change, distribution shift, or market frustration.' },
    { tag: 'Execution', title: 'Learning velocity', body: 'Execution is not busyness. It is the rate at which the team turns contact with reality into better product, sales, and strategic decisions.' },
    { tag: 'Risk', title: 'Risk decomposition', body: 'Separate market risk, product risk, distribution risk, regulatory risk, capital risk, execution risk, and trust risk. Attack the one that can kill you first.' },
    { tag: 'Market', title: 'Market pull beats tech push', body: 'Technology enables. Markets demand. Strong startups connect a new capability to a painful, budgeted, repeated job.' },
    { tag: 'Company', title: 'Search then execute', body: 'The early startup searches for a repeatable business model. The later company builds systems to execute and scale it.' }
  ],
  stages: [
    { name: 'Founder-market fit', goal: 'Identify markets where you can earn real insight and access.', evidence: ['Clear reason to understand the domain', 'Access to users or experts', 'Personal stamina for years of learning'], traps: ['Pretending to have insight', 'Picking markets only because they are fashionable'], exercise: 'Write a personal edge inventory: what you know, who you know, what you can access, and what you are willing to study deeply.' },
    { name: 'Problem discovery', goal: 'Understand painful workflows before proposing solutions.', evidence: ['Repeated stories of real pain', 'Existing workarounds', 'Visible cost in time, money, risk, or status'], traps: ['Pitching too early', 'Asking hypothetical questions', 'Confusing curiosity with urgency'], exercise: 'Run 15 problem interviews focused only on past behavior and current alternatives.' },
    { name: 'Customer discovery', goal: 'Define the exact segment, buyer, user, trigger, and buying process.', evidence: ['Specific ICP', 'Budget owner identified', 'Buying process mapped', 'Problem ranked against other priorities'], traps: ['A vague user definition', 'Ignoring procurement and stakeholders'], exercise: 'Create a customer archetype map for three segments and score each on pain, budget, reachability, and urgency.' },
    { name: 'Market research', goal: 'Determine whether the market is structurally attractive.', evidence: ['Timing catalyst', 'Reachable market', 'Growing demand', 'Accessible channels'], traps: ['Huge TAM with no wedge', 'No budget owner', 'Overlooking regulation'], exercise: 'Write a 3-page market memo with TAM/SAM/SOM, channels, competitors, budget, and why-now.' },
    { name: 'Competitor analysis', goal: 'Understand alternatives, substitutes, complaints, and defensibility.', evidence: ['Map of direct and indirect alternatives', 'Customer complaints', 'Positioning gaps'], traps: ['Assuming no competitors', 'Copying competitor features without insight'], exercise: 'Tear down ten alternatives and identify underserved segments.' },
    { name: 'Wedge selection', goal: 'Choose the narrow beachhead where you can win intensely.', evidence: ['Painful specific use case', 'Reachable early customers', 'Expansion path'], traps: ['Too broad', 'Too niche with no expansion', 'No distribution path'], exercise: 'Score candidate wedges on pain, urgency, budget, reachability, neglect, time-to-value, and expansion.' },
    { name: 'MVP', goal: 'Run the smallest test that produces meaningful learning.', evidence: ['Clear hypothesis', 'Success threshold', 'Customer behavior observed'], traps: ['Building a mini full product', 'Polishing before learning'], exercise: 'Define the riskiest assumption and design a landing page, concierge, prototype, or paid pilot test.' },
    { name: 'Validation', goal: 'Prove behavior change, not just interest.', evidence: ['Paid pilots', 'Repeated usage', 'Retention', 'Referrals', 'Expansion'], traps: ['Compliments', 'Surveys only', 'Vanity metrics'], exercise: 'Build a signal ladder from weak interest to decisive commercial validation.' },
    { name: 'Product-market fit', goal: 'Find a segment where demand pulls the product forward.', evidence: ['Retention', 'Word of mouth', 'Shorter sales cycles', 'Users disappointed if it disappears'], traps: ['Mistaking early adopter enthusiasm for fit', 'Scaling before retention'], exercise: 'Run a retention and disappointment test with active users.' },
    { name: 'Go-to-market', goal: 'Build a repeatable system for discovery, trust, trial, purchase, onboarding, retention, and expansion.', evidence: ['Known ICP', 'Repeatable channel', 'Working message', 'Viable CAC/payback'], traps: ['Random channels', 'Marketing before positioning', 'Sales without learning'], exercise: 'Test two acquisition channels with one message, one CTA, and one decision metric.' },
    { name: 'Scaling', goal: 'Increase throughput after the system works.', evidence: ['Healthy retention', 'Repeatable onboarding', 'Known bottleneck', 'Improving unit economics'], traps: ['Premature hiring', 'Scaling churn', 'Confusing revenue with quality of revenue'], exercise: 'Run a bottleneck review and improve one constraint for two weeks.' },
    { name: 'Company building', goal: 'Turn validated value creation into an operating organization.', evidence: ['Hiring bar', 'Operating cadence', 'Decision rights', 'Culture principles', 'Metrics'], traps: ['Product without company', 'Culture by accident', 'Founder as bottleneck'], exercise: 'Draft a company OS: meetings, metrics, hiring, product review, customer loop, and financial cadence.' }
  ],
  methods: [
    { name: 'Customer Development', tag: 'customer early', when: 'Use when assumptions about customer, problem, or business model are unproven.', risk: 'Can become theater if interviews are not tied to decisions.' },
    { name: 'Lean Startup', tag: 'early product', when: 'Use when you need rapid build-measure-learn cycles and validated learning.', risk: 'Bad metrics create false certainty.' },
    { name: 'Effectuation', tag: 'early market', when: 'Use when resources are limited and you must start from means, affordable loss, and partnerships.', risk: 'Can drift without strategic filters.' },
    { name: 'Jobs-to-be-Done', tag: 'customer product', when: 'Use when you need to understand why customers switch and what progress they seek.', risk: 'Can become generic if detached from situations and triggers.' },
    { name: 'Design Thinking', tag: 'customer product', when: 'Use when empathy, experience, workflow, and usability are central.', risk: 'May underweight pricing, distribution, and market structure.' },
    { name: 'MVP Methodology', tag: 'product early', when: 'Use when the riskiest assumption can be tested without building the whole product.', risk: 'MVP is not an excuse for careless quality.' },
    { name: 'Wedge Strategy', tag: 'market scale', when: 'Use when the market is broad or crowded and you need a precise entry point.', risk: 'A wedge must expand; narrow alone is not strategy.' },
    { name: '10x Value Proposition', tag: 'product market', when: 'Use when switching costs are high and marginal improvements are ignored.', risk: '10x must be perceived by the buyer, not just claimed by you.' },
    { name: 'Distribution-first Thinking', tag: 'market scale', when: 'Use when reaching customers is harder than building product.', risk: 'Distribution without real value creates churn.' },
    { name: 'Systems Thinking', tag: 'scale market', when: 'Use when feedback loops, incentives, constraints, and second-order effects matter.', risk: 'Can become abstract unless converted into action.' },
    { name: 'OODA Loop', tag: 'early scale ai', when: 'Use when speed of learning and adaptation creates advantage.', risk: 'Fast action without orientation is chaos.' },
    { name: 'Theory of Constraints', tag: 'scale', when: 'Use when growth is blocked and you need to identify the bottleneck.', risk: 'Optimizing non-bottlenecks creates fake productivity.' },
    { name: 'Competitive Strategy', tag: 'market scale', when: 'Use when positioning, substitutes, channels, and moats shape outcomes.', risk: 'Copying competitors is not strategy.' },
    { name: 'AI Evals', tag: 'ai product scale', when: 'Use when AI output quality, reliability, safety, or tool use must be measured.', risk: 'Demos are not reliability evidence.' }
  ],
  ai: [
    { icon: 'R', title: 'Research', body: 'Use AI to map markets, synthesize interviews, summarize sources, compare competitors, and expose contradictions.' },
    { icon: 'C', title: 'Coding', body: 'Use coding agents for prototypes, tests, refactors, bug fixes, docs, and scaffolding. Keep human review in the loop.' },
    { icon: 'D', title: 'Design', body: 'Generate flows, copy variants, wireframes, critique prompts, and usability test scripts.' },
    { icon: 'O', title: 'Operations', body: 'Automate repetitive admin, reporting, SOP drafting, knowledge retrieval, and workflow handoffs.' },
    { icon: 'S', title: 'Sales', body: 'Research accounts, personalize outreach, summarize calls, draft follow-ups, and maintain CRM hygiene.' },
    { icon: 'E', title: 'Evals', body: 'Test accuracy, hallucination risk, tone, compliance, retrieval quality, tool use, latency, cost, and edge cases.' }
  ],
  skills: [
    { tag: 'Commercial', title: 'Sales', body: 'Learn discovery, qualification, objections, pricing, follow-up, closing, renewal, and expansion.' },
    { tag: 'Product', title: 'Product judgment', body: 'Learn pain detection, prioritization, activation, retention, usability, and what not to build.' },
    { tag: 'Technical', title: 'Technical literacy', body: 'Understand APIs, databases, authentication, cloud, analytics, security, RAG, agents, and evals.' },
    { tag: 'Market', title: 'Market judgment', body: 'Learn market structure, budgets, procurement, regulation, channels, timing, and competitive dynamics.' },
    { tag: 'Communication', title: 'Writing', body: 'Write strategy memos, product specs, sales emails, investor updates, postmortems, and customer summaries.' },
    { tag: 'People', title: 'Recruiting', body: 'Define roles, source talent, interview with scorecards, check references, and sell the mission.' },
    { tag: 'Deals', title: 'Negotiation', body: 'Practice BATNA, anchoring, interests, deal structure, procurement, partnerships, and term sheets.' },
    { tag: 'Leadership', title: 'Ambiguity leadership', body: 'Set context, clarify decisions, regulate emotion, handle conflict, and create accountability.' }
  ],
  exercises: [
    { stage: 'Discovery', title: '15-interview sprint', body: 'Run 15 problem interviews. No pitching. Capture past behavior, current alternatives, cost, frequency, and emotional intensity.' },
    { stage: 'Market', title: 'Market memo', body: 'Write a concise memo covering customers, budget, channels, growth, timing, regulation, competition, and why-now.' },
    { stage: 'Competitors', title: 'Alternative teardown', body: 'Analyze 10 direct and indirect alternatives. Find complaints, neglected segments, switching costs, and channel advantages.' },
    { stage: 'MVP', title: 'Riskiest assumption test', body: 'Define the assumption, smallest test, success threshold, failure threshold, time limit, and decision rule.' },
    { stage: 'Sales', title: 'Founder-led sales reps', body: 'Write 20 cold emails, run 10 mock discovery calls, and try to sell one small manual service or paid pilot.' },
    { stage: 'AI-native', title: 'Eval set builder', body: 'Create 100 cases: 20 easy, 20 realistic, 20 adversarial, 20 high-value, 20 known failure cases.' }
  ],
  weeks: [
    { title: 'Entrepreneurship fundamentals', deliverable: 'Startup mental model memo' },
    { title: 'Customer problems', deliverable: 'Problem evidence table from 5 interviews' },
    { title: 'Jobs-to-be-Done', deliverable: 'JTBD teardown of 10 products' },
    { title: 'Markets', deliverable: 'Market attractiveness scorecard' },
    { title: 'Competition and alternatives', deliverable: 'Competitor map' },
    { title: 'MVPs and experiments', deliverable: 'Experiment backlog' },
    { title: 'Product thinking', deliverable: 'MVP product spec' },
    { title: 'Sales', deliverable: 'Sales script and objection library' },
    { title: 'Go-to-market', deliverable: 'GTM one-pager' },
    { title: 'AI-native workflows', deliverable: 'AI operating system v0.1' },
    { title: 'Strategy and company building', deliverable: 'Company OS memo' },
    { title: 'Integration sprint', deliverable: 'Full startup discovery dossier' }
  ],
  glossary: [
    ['Startup', 'A temporary organization searching for a repeatable, scalable business model.'],
    ['Business model', 'How a company creates, delivers, and captures value.'],
    ['ICP', 'Ideal Customer Profile: the best-fit customer segment.'],
    ['Buyer', 'The person or organization that pays.'],
    ['User', 'The person who uses the product.'],
    ['Champion', 'An internal advocate who wants your solution adopted.'],
    ['Economic buyer', 'The stakeholder with budget authority.'],
    ['MVP', 'The smallest test or product needed to validate a key assumption.'],
    ['PMF', 'Product-market fit: strong demand from a market for a satisfying product.'],
    ['Wedge', 'A narrow entry point into a broader market.'],
    ['Beachhead', 'The initial market segment where you aim to win first.'],
    ['TAM', 'Total Addressable Market: total possible demand.'],
    ['SAM', 'Serviceable Available Market: portion of TAM you can serve.'],
    ['SOM', 'Serviceable Obtainable Market: realistic near-term share.'],
    ['CAC', 'Customer Acquisition Cost.'],
    ['LTV', 'Lifetime Value of a customer.'],
    ['Churn', 'The rate at which customers leave.'],
    ['Retention', 'The rate at which customers keep using or paying.'],
    ['Activation', 'The moment a user first experiences core value.'],
    ['Runway', 'Time before cash runs out.'],
    ['Moat', 'Durable competitive advantage.'],
    ['Switching cost', 'The cost or friction of changing solutions.'],
    ['PLG', 'Product-led growth, where product usage drives acquisition and expansion.'],
    ['GTM', 'Go-to-market: the system for acquiring and retaining customers.'],
    ['Vanity metric', 'A metric that looks good but does not guide decisions.'],
    ['Pivot', 'A strategic change based on learning.'],
    ['RAG', 'Retrieval-augmented generation: AI grounded in external knowledge sources.'],
    ['Agent', 'An AI system that can take steps or use tools toward a goal.'],
    ['Eval', 'A test suite for AI system performance.'],
    ['Hallucination', 'AI-generated false or unsupported output.']
  ]
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function renderCards(items, target, className, template) {
  $(target).innerHTML = items.map((item) => `<article class="${className}">${template(item)}</article>`).join('');
}

function renderModels() {
  renderCards(data.models, '#model-grid', 'model-card', (m) => `
    <span class="tag">${m.tag}</span>
    <h3>${m.title}</h3>
    <p>${m.body}</p>
  `);
}

function renderStages() {
  const list = $('#stage-list');
  list.innerHTML = data.stages.map((stage, index) => `
    <button class="stage-button" type="button" role="tab" aria-selected="${index === 0}" data-stage="${index}">
      ${index + 1}. ${stage.name}
    </button>
  `).join('');
  $$('.stage-button').forEach((button) => {
    button.addEventListener('click', () => selectStage(Number(button.dataset.stage)));
  });
  selectStage(0);
}

function selectStage(index) {
  $$('.stage-button').forEach((button) => button.setAttribute('aria-selected', button.dataset.stage === String(index)));
  const s = data.stages[index];
  $('#stage-detail').innerHTML = `
    <p class="eyebrow">Stage ${index + 1}</p>
    <h3>${s.name}</h3>
    <p>${s.goal}</p>
    <div class="detail-grid">
      <div><strong>Evidence to seek</strong><ul>${s.evidence.map((x) => `<li>${x}</li>`).join('')}</ul></div>
      <div><strong>Common traps</strong><ul>${s.traps.map((x) => `<li>${x}</li>`).join('')}</ul></div>
      <div><strong>Exercise</strong><p>${s.exercise}</p></div>
      <div><strong>Founder question</strong><p>What is the highest-uncertainty assumption at this stage, and what customer behavior would prove or disprove it?</p></div>
    </div>
  `;
}

function renderMethods() {
  renderCards(data.methods, '#method-grid', 'method-card', (m) => `
    <span class="tag">${m.tag.split(' ')[0]}</span>
    <h3>${m.name}</h3>
    <p><strong>Use:</strong> ${m.when}</p>
    <p><strong>Beware:</strong> ${m.risk}</p>
  `);
  $('#method-filter').addEventListener('change', updateMethodRecommendation);
  updateMethodRecommendation();
}

function updateMethodRecommendation() {
  const value = $('#method-filter').value;
  const matches = data.methods.filter((m) => m.tag.includes(value)).slice(0, 4);
  $('#method-recommendation').innerHTML = `
    <strong>Recommended focus:</strong>
    <p>${matches.map((m) => m.name).join(' · ')}</p>
    <p>${matches[0]?.when ?? 'Choose a situation to see the best methodology.'}</p>
  `;
}

function renderAI() {
  $('#ai-grid').innerHTML = data.ai.map((item) => `
    <article class="ai-card">
      <span class="ai-icon">${item.icon}</span>
      <div><h3>${item.title}</h3><p>${item.body}</p></div>
    </article>
  `).join('');
}

function renderSkills() {
  renderCards(data.skills, '#skill-grid', 'skill-card', (s) => `
    <span class="tag">${s.tag}</span>
    <h3>${s.title}</h3>
    <p>${s.body}</p>
  `);
}

function renderExercises() {
  $('#exercise-grid').innerHTML = data.exercises.map((e) => `
    <article class="exercise-card">
      <h3>${e.title}<span>${e.stage}</span></h3>
      <p>${e.body}</p>
    </article>
  `).join('');
}

function renderWeeks() {
  const saved = JSON.parse(localStorage.getItem('startup-os-weeks') || '[]');
  $('#week-grid').innerHTML = data.weeks.map((week, index) => `
    <article class="week-card">
      <label>
        <input type="checkbox" data-week="${index}" ${saved.includes(index) ? 'checked' : ''} />
        <span>
          <small>Week ${index + 1}</small>
          <h3>${week.title}</h3>
          <p><strong>Deliverable:</strong> ${week.deliverable}</p>
        </span>
      </label>
    </article>
  `).join('');
  $$('#week-grid input').forEach((box) => box.addEventListener('change', updateProgress));
  updateProgress();
}

function updateProgress() {
  const completed = $$('#week-grid input:checked').map((box) => Number(box.dataset.week));
  localStorage.setItem('startup-os-weeks', JSON.stringify(completed));
  const percent = (completed.length / data.weeks.length) * 100;
  $('#progress-fill').style.width = `${percent}%`;
  $('#progress-label').textContent = `${completed.length} of ${data.weeks.length} weeks complete`;
}

function renderGlossary(filter = '') {
  const needle = filter.trim().toLowerCase();
  const terms = data.glossary.filter(([term, def]) => `${term} ${def}`.toLowerCase().includes(needle));
  $('#glossary-grid').innerHTML = terms.map(([term, def]) => `
    <article class="glossary-card"><h3>${term}</h3><p>${def}</p></article>
  `).join('') || '<p>No matching terms found.</p>';
}

function setupGlossary() {
  renderGlossary();
  $('#glossary-search').addEventListener('input', (event) => renderGlossary(event.target.value));
}

function setupDiagnostic() {
  const form = $('#diagnostic-form');
  const saved = JSON.parse(localStorage.getItem('startup-os-diagnostic') || '{}');
  Object.entries(saved).forEach(([name, value]) => {
    const input = form.elements[name];
    if (input) input.value = value;
  });
  const update = () => {
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const score = Object.values(values).reduce((sum, value) => sum + Number(value), 0);
    localStorage.setItem('startup-os-diagnostic', JSON.stringify(values));
    $('#diagnostic-score').textContent = `${score} / 30`;
  };
  form.addEventListener('input', update);
  update();
}

function setupNotes() {
  const render = () => {
    const notes = JSON.parse(localStorage.getItem('startup-os-notes') || '[]');
    $('#notes-list').innerHTML = notes.map((note) => `
      <article class="note-item">
        <time>${new Date(note.date).toLocaleString()}</time>
        <p>${note.text.replace(/[<>]/g, '')}</p>
      </article>
    `).join('');
  };
  $('#note-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = $('#note-input');
    const text = input.value.trim();
    if (!text) return;
    const notes = JSON.parse(localStorage.getItem('startup-os-notes') || '[]');
    notes.unshift({ text, date: new Date().toISOString() });
    localStorage.setItem('startup-os-notes', JSON.stringify(notes.slice(0, 20)));
    input.value = '';
    render();
  });
  render();
}

function setupNav() {
  const toggle = $('.nav-toggle');
  const links = $('#nav-links');
  toggle.addEventListener('click', () => {
    const open = !links.classList.contains('open');
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  $$('#nav-links a').forEach((link) => link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

renderModels();
renderStages();
renderMethods();
renderAI();
renderSkills();
renderExercises();
renderWeeks();
setupGlossary();
setupDiagnostic();
setupNotes();
setupNav();
