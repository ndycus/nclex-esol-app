// State
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;
let currentLang = 'en';
let currentQuestions = []; // Filtered list of questions

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    category: document.getElementById('category-screen'),
    medterm: document.getElementById('medterm-screen'),
    anatomy: document.getElementById('anatomy-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    unlock: document.getElementById('unlock-screen')
};

const ui = {
    // Nav
    langSelect: document.getElementById('lang-select'),
    progressBar: document.getElementById('progress-bar'),
    homeBtn: document.getElementById('home-btn'),

    // Welcome
    welcomeTitle: document.getElementById('welcome-title'),
    welcomeDesc: document.getElementById('welcome-desc'),
    startBtn: document.getElementById('start-btn'),
    medTermBtn: document.getElementById('medterm-btn'),
    anatomyBtn: document.getElementById('anatomy-btn'),
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),

    // Category
    categoryTitle: document.getElementById('category-title'),
    categoryCards: document.querySelectorAll('.category-card'),

    // Quiz
    currentQNum: document.getElementById('current-q-num'),
    qLabel: document.getElementById('q-label'),
    topicBadge: document.getElementById('topic-badge'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    feedbackArea: document.getElementById('feedback-area'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackRationale: document.getElementById('feedback-rationale'),
    nextBtn: document.getElementById('next-btn'),

    // Results
    finalScore: document.getElementById('final-score'),
    totalQuestions: document.getElementById('total-questions'),
    resultsTitle: document.getElementById('results-title'),
    restartBtn: document.getElementById('restart-btn'),

    // Unlock
    unlockTitle: document.getElementById('unlock-title'),
    unlockDesc: document.getElementById('unlock-desc'),
    unlockBtn: document.getElementById('unlock-btn'),
    backToHomeBtn: document.getElementById('back-to-home-btn'),
    unlockCodeInput: document.getElementById('unlock-code-input'),
    unlockError: document.getElementById('unlock-error'),

    // Tooltip
    tooltip: document.getElementById('vocab-tooltip'),
    tooltipWord: document.getElementById('tooltip-word'),
    tooltipDef: document.getElementById('tooltip-def'),

    // Lists
    medTermList: document.getElementById('medterm-list'),
    anatomyList: document.getElementById('anatomy-list'),
    medTermTitle: document.getElementById('medterm-title'),
    anatomyTitle: document.getElementById('anatomy-title')
};

// Event Listeners
ui.langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateLanguage();
});

ui.homeBtn.addEventListener('click', () => switchScreen('welcome'));
ui.startBtn.addEventListener('click', () => switchScreen('category'));
ui.medTermBtn.addEventListener('click', showMedTerm);
ui.anatomyBtn.addEventListener('click', showAnatomy);
ui.restartBtn.addEventListener('click', () => switchScreen('category'));
ui.nextBtn.addEventListener('click', nextQuestion);
ui.unlockBtn.addEventListener('click', validateCode);
ui.backToHomeBtn.addEventListener('click', () => switchScreen('welcome'));

// Search
ui.searchBtn.addEventListener('click', performSearch);
ui.searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

// Categories
ui.categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const cat = card.dataset.cat;
        startQuiz(cat);
    });
});

// Init
updateLanguage();

// Functions
function updateLanguage() {
    const t = translations[currentLang];

    // Update Static Text
    ui.welcomeTitle.textContent = t.welcomeTitle;
    ui.welcomeDesc.textContent = t.welcomeDesc;
    ui.startBtn.textContent = t.startBtn;
    ui.medTermBtn.textContent = t.medTermBtn;
    ui.anatomyBtn.textContent = t.anatomyBtn;

    ui.qLabel.textContent = t.questionLabel;
    ui.nextBtn.textContent = t.nextBtn;

    ui.unlockTitle.textContent = t.unlockTitle;
    ui.unlockDesc.textContent = t.unlockDesc;
    ui.unlockBtn.textContent = t.unlockBtn;
    ui.backToHomeBtn.textContent = t.backHome;

    ui.resultsTitle.textContent = t.resultsTitle;
    ui.restartBtn.textContent = t.restartBtn;

    ui.medTermTitle.textContent = t.medTermBtn;
    ui.anatomyTitle.textContent = t.anatomyBtn;

    // Refresh current view if needed
    if (!screens.quiz.classList.contains('hidden')) {
        loadQuestion();
    }
    if (!screens.medterm.classList.contains('hidden')) {
        renderMedTerm();
    }
    if (!screens.anatomy.classList.contains('hidden')) {
        renderAnatomy();
    }
}

function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.remove('hidden');
    screens[screenName].classList.add('active');
}

// --- Search Logic ---
function performSearch() {
    const term = ui.searchInput.value.toLowerCase().trim();
    if (!term) return;

    // Filter questions that match the term in the current language
    currentQuestions = questions.filter(q => {
        const content = q.content[currentLang];
        return content.text.toLowerCase().includes(term) ||
            q.topic.toLowerCase().includes(term);
    });

    if (currentQuestions.length === 0) {
        alert("No questions found for that topic.");
        return;
    }

    startQuiz(null, true); // true = isSearch
}

// --- Quiz Logic ---
function startQuiz(category = 'all', isSearch = false) {
    if (!isSearch) {
        if (category === 'all') {
            currentQuestions = [...questions];
        } else {
            currentQuestions = questions.filter(q => q.category === category);
        }
    }

    if (currentQuestions.length === 0) {
        alert("No questions available in this category yet.");
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    switchScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    isAnswered = false;
    const q = currentQuestions[currentQuestionIndex];
    const content = q.content[currentLang];

    // Reset UI
    ui.feedbackArea.classList.add('hidden');
    ui.feedbackArea.classList.remove('correct', 'wrong');
    ui.optionsContainer.innerHTML = '';

    // Update Progress
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    ui.progressBar.style.width = `${progress}%`;

    // Render Question
    ui.currentQNum.textContent = currentQuestionIndex + 1;
    ui.topicBadge.textContent = q.topic;
    ui.questionText.innerHTML = content.text;

    // Render Options
    content.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        ui.optionsContainer.appendChild(btn);
    });

    // Attach Vocab Listeners
    attachVocabListeners(content.vocab);
}

function checkAnswer(selectedIndex) {
    if (isAnswered) return;
    isAnswered = true;

    const q = currentQuestions[currentQuestionIndex];
    const content = q.content[currentLang];
    const options = ui.optionsContainer.children;
    const isCorrect = selectedIndex === q.correctIndex;
    const t = translations[currentLang];

    // Style Options
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[q.correctIndex].classList.add('correct');

    if (isCorrect) score++;

    // Show Feedback
    ui.feedbackTitle.textContent = isCorrect ? t.correct : t.incorrect;
    ui.feedbackTitle.style.color = isCorrect ? 'var(--success)' : 'var(--danger)';
    ui.feedbackRationale.textContent = content.rationale;

    ui.feedbackArea.className = `feedback-card ${isCorrect ? 'correct' : 'wrong'}`;
    ui.feedbackArea.classList.remove('hidden');
}

function nextQuestion() {
    const isPremium = localStorage.getItem('nclex_premium') === 'true';
    const FREE_LIMIT = 3;

    if (!isPremium && currentQuestionIndex + 1 >= FREE_LIMIT) {
        switchScreen('unlock');
        return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// --- Content Logic ---
function showMedTerm() {
    switchScreen('medterm');
    renderMedTerm();
}

function renderMedTerm() {
    ui.medTermList.innerHTML = '';
    medTerms.forEach(item => {
        const card = document.createElement('div');
        card.className = 'info-card';
        card.innerHTML = `<h3>${item.term}</h3><p>${item.def[currentLang]}</p>`;
        ui.medTermList.appendChild(card);
    });
}

function showAnatomy() {
    switchScreen('anatomy');
    renderAnatomy();
}

function renderAnatomy() {
    ui.anatomyList.innerHTML = '';
    anatomyCards.forEach(item => {
        const card = document.createElement('div');
        card.className = 'anatomy-card';
        // Add Image
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title[currentLang];
        img.className = 'anatomy-img';

        const content = document.createElement('div');
        content.className = 'anatomy-content';
        content.innerHTML = `<h3>${item.title[currentLang]}</h3><p>${item.content[currentLang]}</p>`;

        card.appendChild(img);
        card.appendChild(content);
        ui.anatomyList.appendChild(card);
    });
}

// --- Unlock Logic ---
function validateCode() {
    const code = ui.unlockCodeInput.value.trim().toUpperCase();
    const VALID_CODES = ['NCLEX2025', 'NURSE', 'PASS'];

    if (VALID_CODES.includes(code)) {
        localStorage.setItem('nclex_premium', 'true');
        ui.unlockError.classList.add('hidden');
        alert('Premium Unlocked!');

        // Continue
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            switchScreen('quiz');
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        ui.unlockError.classList.remove('hidden');
        ui.unlockCodeInput.classList.add('shake');
        setTimeout(() => ui.unlockCodeInput.classList.remove('shake'), 500);
    }
}

function showResults() {
    switchScreen('results');
    ui.finalScore.textContent = score;
    ui.totalQuestions.textContent = currentQuestions.length;
    ui.progressBar.style.width = '100%';
}

// --- Vocab Logic ---
function attachVocabListeners(vocabData) {
    if (!vocabData) return;
    const vocabWords = document.querySelectorAll('.vocab-word');

    vocabWords.forEach(word => {
        word.addEventListener('click', (e) => {
            e.stopPropagation();
            const term = word.dataset.word;
            const def = vocabData[term];

            showTooltip(e.target, term, def);
        });
    });

    document.addEventListener('click', () => {
        ui.tooltip.classList.remove('visible');
    });
}

function showTooltip(element, term, def) {
    const rect = element.getBoundingClientRect();

    ui.tooltipWord.textContent = term;
    ui.tooltipDef.textContent = def;

    ui.tooltip.style.top = `${rect.bottom + window.scrollY + 10}px`;
    ui.tooltip.style.left = `${rect.left + window.scrollX}px`;
    ui.tooltip.classList.add('visible');
}
