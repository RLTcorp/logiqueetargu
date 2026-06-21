// --- Données Exhaustives ---
const chaptersInfo = [
    { id: 2, title: "Ch. 2: Logique non-déductive", desc: "Rationalisme, Induction, Abduction, Logique Juridique." },
    { id: 3, title: "Ch. 3: Rhétorique et Interprétation", desc: "Ambiguïtés, auditoire, valeurs, ex concessis." },
    { id: 4, title: "Ch. 4: Généralisation et Analogie", desc: "Modèle de Toulmin (topique), échantillons, analogies." },
    { id: 5, title: "Ch. 5: La Causalité", desc: "Liens de cause à effet, corrélations, pente glissante." },
    { id: 6, title: "Ch. 6: Pragmatique et Valeurs", desc: "Conséquences pratiques et pressions affectives." },
    { id: 7, title: "Ch. 7: Autorité et Preuve", desc: "Attaques personnelles, pétition de principe, charge de la preuve." }
];

const theories = {
    2: [
        { title: "Le Modèle Rationaliste (Descartes)", content: "Recherche d'une certitude absolue (Cogito), fondation des sciences sur des bases indubitables, utilisation de la déduction logique." },
        { title: "Infaillibilité vs Ampliation", content: "La déduction est infaillible (transfert garanti de la vérité) mais non ampliative (aveugle à la présence de vérité, elle n'ajoute rien aux prémisses)." },
        { title: "Induction & Abduction", content: "L'induction est ampliative (produit de la nouveauté) mais faillible. L'abduction est une forme d'induction consistant à émettre l'hypothèse la plus probable pour expliquer un fait surprenant." },
        { title: "Kalinowski vs Perelman (Logique Juridique)", content: "Kalinowski défend une logique formelle étendue (logique déontique) pour calculer le droit. Perelman s'y oppose : la justice ne se calcule pas, elle requiert un jugement humain (pour qualifier les faits, gérer les antinomies et les vides juridiques)." },
        { title: "Notes de l'Étudiant", content: `<div class="student-note"><strong>⚠️ Notes d'Examen (issues du cours) :</strong><br>
        - "La déduction n'ajoute jamais rien aux prémisses... on ne DECOUVRE JAMAIS RIEN (Question d'exam)."<br>
        - "La certitude déductive garantit la validité mais pas la vérité."<br>
        - "L'induction est faillible. Ne jamais dire à l'examen d'une inférence qu'elle est déraisonnable !"<br>
        - "ATTENTION: à l'exam on peut avoir des arguments déductivement valides mais irrecevables (ex: fausses promesses ou absurdes)."<br>
        - "But de la logique formelle en droit (Kalinowski) : profiter de l'infaillibilité de la déduction pour rendre la justice infaillible."</div>` }
    ],
    3: [
        { title: "Dimension Rhétorique", content: "Un argument est construit pour convaincre un auditoire. Il faut s'adapter à celui-ci (personnaliser le message)." },
        { title: "Argumenter 'Ex Concessis'", content: "Se baser sur les concessions de l'auditoire (ce qu'il admet déjà) pour étendre son adhésion à de nouveaux arguments." },
        { title: "Le rôle des valeurs", content: "Les valeurs partagées par l'auditoire vont teinter notre réception à certains arguments. Un même fait peut être perçu différemment selon le contexte." },
        { title: "Notes de l'Étudiant", content: `<div class="student-note"><strong>⚠️ Notes d'Examen :</strong><br>
        - "Après avoir bien identifié quel est l'auditoire réel, il nous faut personnaliser le message."<br>
        - "Attention: une des questions est 'qu'est-ce que ça signifie ex concessis' : pas juste la traduction mais bien une explication précise."<br>
        - "Les valeurs vont surtout teinter notre jugement dans l'argumentation pratique."<br>
        - "Question d'exam: on aura un argument, on doit le reconnaître et dire quelles sont les questions à se poser pour juger de sa recevabilité (les questions critiques)."</div>` }
    ],
    4: [
        { title: "Les Dangers de l'Induction", content: "L'échantillon doit être suffisamment grand et représentatif. Sinon, risque de généralisation hâtive ou d'échantillonnage biaisé." },
        { title: "Dimension Topique (Modèle de Toulmin)", content: "Un argument 'conductif' possède trois éléments topiques : l'indice de vraisemblance, la garantie implicite, et les réserves implicites." },
        { title: "Notes de l'Étudiant", content: `<div class="student-note"><strong>⚠️ Notes d'Examen :</strong><br>
        - "Question d'Exam: on va y distinguer 3 éléments topiques :<br>
          1) L'indice de vraisemblance (signature de la probabilité de véracité).<br>
          2) La garantie implicite (règle générale sans être parfaitement universelle).<br>
          3) Les réserves implicites (les exceptions qui limitent l'argument)."<br>
        - "En rajoutant la garantie, on n'est pas déductif car cet argument est ampliatif."<br>
        - "Question d'Exam Typique : on vous donnera un argument NON VU AU COURS."</div>` }
    ],
    5: [
        { title: "La Causalité Complexe", content: "Il faut distinguer les corrélations des causalités, et les causes partielles des causes totales." },
        { title: "Erreurs Fréquentes", content: "Cum hoc (en même temps donc à cause de), Post hoc (après donc à cause de). La Pente Glissante (conséquences catastrophiques sans preuve solide)." }
    ],
    6: [
        { title: "Arguments Pragmatiques", content: "Évaluer une thèse ou une action sur la base de ses conséquences concrètes (Argument du coût-bénéfice, du gaspillage, du décisif)." },
        { title: "Pressions", content: "Appel à la force (ad baculum) ou à la récompense (ad carotam) pour biaiser le raisonnement." }
    ],
    7: [
        { title: "Appel à l'Autorité", content: "Pour être valide, l'autorité doit être compétente dans le domaine spécifique, ne pas avoir de conflit d'intérêt, et refléter un consensus." },
        { title: "Charge de la Preuve", content: "Celui qui avance une thèse extraordinaire doit la prouver. L'appel à l'ignorance (ad ignorantiam) est un sophisme fréquent." }
    ]
};

const schemas = [
    // CH 2
    { chap: 2, name: "Déduction", family: "Théorie", def: "Inférence où la vérité des prémisses garantit celle de la conclusion. Infaillible mais non ampliative (on ne découvre rien).", q: "Les prémisses sont-elles vraies et la forme valide ?", ex: ["Tous les hommes sont mortels, Socrate est un homme, donc Socrate est mortel.", "Si A = B et B = C, alors A = C.", "S'il pleut, le sol est mouillé. Il pleut, donc le sol est mouillé."] },
    { chap: 2, name: "Induction", family: "Théorie", def: "Inférence ampliative mais faillible. Permet de généraliser à partir d'observations limitées.", q: "L'échantillon est-il suffisant ?", ex: ["J'ai observé 100 corbeaux noirs, donc tous les corbeaux sont noirs.", "Le soleil s'est levé tous les jours de ma vie, il se lèvera donc demain.", "Les trois premiers chapitres de ce livre sont ennuyeux, donc tout le livre l'est."] },
    { chap: 2, name: "Abduction", family: "Théorie", def: "Inférence ampliative consistant à émettre l'hypothèse la plus probable pour expliquer un fait surprenant.", q: "Est-ce la seule ou la meilleure explication ?", ex: ["L'herbe est mouillée ce matin, il a donc dû pleuvoir cette nuit.", "Le patient a de la fièvre et des plaques rouges, il a sûrement la varicelle.", "La porte a été forcée et les bijoux ont disparu, c'est un cambriolage."] },
    { chap: 2, name: "Modèle de Kalinowski", family: "Logique Juridique", def: "Tentative d'appliquer une logique formelle infaillible (déontique) pour calculer le droit.", q: "Le droit peut-il être un simple calcul mathématique ?", ex: ["L'application d'une peine décidée uniquement par un algorithme strict.", "Si le vol est puni de 5 ans, tout voleur prendra 5 ans, sans aucune exception."] },
    { chap: 2, name: "Modèle de Perelman", family: "Logique Juridique", def: "Opposé au calcul strict. La justice nécessite l'interprétation et le jugement humain face aux antinomies.", q: "La situation nécessite-t-elle une pondération des valeurs ?", ex: ["Un juge qui adapte la loi en fonction de circonstances atténuantes.", "La prise en compte de la jurisprudence pour trancher un cas inédit."] },

    // CH 3
    { chap: 3, name: "Argument ex concessis", family: "Rhétorique", def: "S'appuyer sur les concessions (ce qui est déjà admis) de l'auditoire pour l'amener à une nouvelle conclusion.", q: "L'auditoire a-t-il vraiment admis ces prémisses ?", ex: ["Puisque vous admettez que la santé est prioritaire, vous devez accepter cette mesure sanitaire.", "Vous dites être un fervent écologiste, alors pourquoi prenez-vous l'avion tous les week-ends ?"] },
    { chap: 3, name: "Ambiguïté lexicale", family: "Langage", def: "Un mot est employé avec deux sens différents.", q: "Le terme garde-t-il le même sens partout ?", ex: ["La baguette est magique. Le pain est une baguette. Le pain est magique.", "L'avocat est un fruit délicieux. Maître Dupont est avocat. Maître Dupont est délicieux.", "Il a volé un baiser, c'est donc un voleur qui mérite la prison."] },
    { chap: 3, name: "Ambiguïté syntaxique", family: "Langage", def: "Phrase mal construite portant à confusion.", q: "La structure grammaticale permet-elle une seule interprétation ?", ex: ["J'ai vu un homme avec un télescope.", "Le boucher tue le porc avec le sourire.", "C'est l'histoire d'un fou qui marche sur la tête."] },
    
    // CH 4
    { chap: 4, name: "Généralisation hâtive", family: "Statistiques", def: "Conclure sur un trop petit échantillon.", q: "L'échantillon est-il assez grand ?", ex: ["Deux garagistes m'ont arnaqué, ils sont tous malhonnêtes.", "Mon grand-père fumait deux paquets par jour et a vécu 90 ans, fumer n'est pas si dangereux.", "J'ai rencontré un Italien très bruyant, les Italiens parlent tous fort."] },
    { chap: 4, name: "Échantillonnage biaisé", family: "Statistiques", def: "Échantillon non représentatif de la population.", q: "L'échantillon représente-t-il la diversité du tout ?", ex: ["Sondage sur l'économie réalisé uniquement dans le 16e arrondissement de Paris.", "Demander à la sortie d'une église si les Français croient en Dieu.", "Un sondage sur internet conclut que 100% des gens utilisent internet."] },
    { chap: 4, name: "Fallacia compositionis", family: "Catégories", def: "Attribuer au tout ce qui est vrai de la partie.", q: "Ce qui vaut pour la partie vaut-il pour le groupe ?", ex: ["Chaque brique est légère, donc le mur est léger.", "Tous les joueurs de cette équipe sont des stars, donc l'équipe sera imbattable.", "Les atomes sont invisibles, je suis fait d'atomes, donc je suis invisible."] },
    { chap: 4, name: "Fallacia divisionis", family: "Catégories", def: "Attribuer à la partie ce qui est vrai du tout.", q: "Ce qui vaut pour le tout vaut-il individuellement pour ses parties ?", ex: ["Ce puzzle est de forme carrée, donc chaque pièce du puzzle est carrée.", "La Suisse est un pays riche, donc tous les Suisses sont très riches."] },
    { chap: 4, name: "Argument a pari", family: "Analogie", def: "Traiter de la même manière des cas similaires.", q: "Les cas sont-ils fondamentalement comparables ?", ex: ["On interdit la cigarette au volant, on devrait interdire de manger un sandwich au volant.", "Si on autorise l'alcool à 18 ans, on devrait aussi autoriser le cannabis."] },
    { chap: 4, name: "Argument a fortiori", family: "Analogie", def: "On infère que ce qui vaut pour un cas vaut avec encore plus de force pour un autre.", q: "La gradation entre les cas justifie-t-elle la conclusion ?", ex: ["Si tu as couru un marathon, tu peux bien marcher 10 minutes jusqu'à la boulangerie.", "Si voler un pain est puni par la loi, a fortiori voler un million d'euros l'est aussi."] },

    // CH 5
    { chap: 5, name: "Post hoc ergo propter hoc", family: "Causalité", def: "Conclure à une cause juste par la chronologie.", q: "Est-ce une simple coïncidence temporelle ?", ex: ["Il a mis un t-shirt rouge, son équipe a gagné. Le t-shirt porte chance.", "J'ai pris ce sirop hier et je suis guéri aujourd'hui, le sirop est un remède miracle.", "Le coq chante, puis le soleil se lève. Le chant du coq fait lever le soleil."] },
    { chap: 5, name: "Cum hoc ergo propter hoc", family: "Causalité", def: "Conclure à une cause car événements simultanés.", q: "Y a-t-il une cause commune aux deux ?", ex: ["Quand les ventes de glaces montent, les noyades aussi. Les glaces font noyer (Non: c'est l'été).", "Les enfants avec de grands pieds lisent mieux. (Non: ils sont juste plus âgés).", "Il dort avec ses chaussures et se réveille avec un mal de crâne. Les chaussures donnent mal à la tête."] },
    { chap: 5, name: "Pente glissante", family: "Causalité", def: "Chaîne inévitable vers la catastrophe.", q: "La chaîne d'événements est-elle vraiment inéluctable ?", ex: ["Si on tolère le retard de 5min, ils viendront à 10h, puis l'entreprise fera faillite.", "Si on légalise le mariage pour tous, bientôt on épousera des animaux.", "Si tu ne fais pas tes devoirs, tu vas rater ton année et finir à la rue."] },

    // CH 6
    { chap: 6, name: "Argument par les conséquences", family: "Pragmatique", def: "Évaluer une vérité sur ses effets.", q: "La vérité dépend-elle de l'effet produit ?", ex: ["Cette théorie sur l'univers doit être fausse car elle rendrait la vie absurde.", "Dieu doit exister, car sinon la morale n'aurait aucun sens.", "Il ne peut pas être coupable, car s'il allait en prison, ses enfants seraient orphelins."] },
    { chap: 6, name: "Sophisme ad baculum", family: "Pressions", def: "Appel à la force/menace.", q: "Est-ce un argument ou une menace ?", ex: ["Soit tu valides ce budget, soit je te licencie.", "Tu dois croire en notre religion, sinon tu brûleras en enfer.", "Donne-moi ton goûter ou je te frappe à la récré."] },
    { chap: 6, name: "Sophisme ad misericordiam", family: "Pressions", def: "Appel à la pitié pour biaiser le jugement.", q: "La pitié est-elle pertinente ici ?", ex: ["Ne me donnez pas d'amende, mon chat est malade.", "Donnez-moi une bonne note, j'ai étudié toute la nuit en pleurant.", "Vous devez m'embaucher, sinon je vais perdre ma maison."] },

    // CH 7
    { chap: 7, name: "Argument ad verecundiam", family: "Autorité", def: "S'appuyer sur l'aura d'une autorité non experte en la matière.", q: "L'autorité citée est-elle experte dans CE domaine précis ?", ex: ["Ce shampoing est parfait, c'est Mbappé qui le dit.", "Einstein croyait en Dieu, donc Dieu existe.", "C'est vrai, je l'ai lu sur un blog obscur sur internet."] },
    { chap: 7, name: "Attaque ad hominem", family: "Attaques", def: "Attaque sur la personne au lieu de l'argument.", q: "Le trait attaqué a-t-il un lien avec le sujet ?", ex: ["Tu dis qu'il faut réduire le sucre mais tu es gros.", "Comment peux-tu me parler d'écologie, toi qui roules en gros 4x4 ?", "Les arguments de cet économiste sont faux car il a trompé sa femme."] },
    { chap: 7, name: "Tu quoque", family: "Attaques", def: "Incohérence entre les dires et actes de l'orateur.", q: "Son comportement invalide-t-il la vérité de son propos ?", ex: ["Le pneumologue me dit d'arrêter de fumer, mais lui fume !", "Tu me dis de ne pas mentir, mais tu as menti la semaine dernière.", "Pourquoi devrais-je respecter la limite de vitesse ? Les policiers eux-mêmes la dépassent !"] },
    { chap: 7, name: "Petitio principii", family: "Preuve", def: "Pétition de principe (Raisonnement circulaire).", q: "La conclusion est-elle déjà admise dans la prémisse ?", ex: ["Il dit la vérité car il ne ment jamais.", "La Bible est la parole de Dieu parce qu'elle le dit elle-même.", "Ce livre est passionnant parce qu'il n'est pas ennuyeux."] },
    { chap: 7, name: "Renversement de la charge de la preuve", family: "Preuve", def: "Demander à l'adversaire de prouver que l'on a tort.", q: "A qui incombe la preuve ?", ex: ["Prouve-moi que les extraterrestres n'existent pas !", "Personne n'a prouvé que les fantômes n'existent pas, donc ils existent.", "Si tu ne peux pas expliquer comment l'univers a été créé, c'est que c'est magique."] }
];

// --- Gestion Principale de la Navigation ---
let activeChapter = null;

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
        
        const targetId = e.target.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active-view');
        
        if(targetId === 'modules') goBackTo('module-list');
        if(targetId === 'global-flashcards') { loadGlobalFlashcards(); }
        if(targetId === 'global-quiz') { loadGlobalQuiz(); }
    });
});

// --- Modules : Initialisation ---
const chapterGrid = document.getElementById('chapter-grid');
chaptersInfo.forEach(c => {
    const div = document.createElement('div');
    div.className = 'card glass clickable-card';
    div.innerHTML = `<h3>${c.title}</h3><p>${c.desc}</p>`;
    div.onclick = () => openChapterHub(c.id, c.title);
    chapterGrid.appendChild(div);
});

function goBackTo(viewId) {
    document.getElementById('module-list').classList.add('hidden-view');
    document.getElementById('module-menu').classList.add('hidden-view');
    document.getElementById('module-theorie').classList.add('hidden-view');
    document.getElementById('module-flashcards').classList.add('hidden-view');
    document.getElementById('module-quiz').classList.add('hidden-view');
    document.getElementById(viewId).classList.remove('hidden-view');
}

function openChapterHub(chapId, title) {
    activeChapter = chapId;
    document.getElementById('menu-chapter-title').textContent = title;
    goBackTo('module-menu');
}

function openExercise(type) {
    if(type === 'theorie') {
        loadTheory();
        goBackTo('module-theorie');
    } else if(type === 'flashcards') {
        loadFlashcards();
        goBackTo('module-flashcards');
    } else if(type === 'quiz') {
        loadQuiz();
        goBackTo('module-quiz');
    }
}

// --- Théorie par Chapitre ---
function loadTheory() {
    const content = document.getElementById('theorie-content');
    content.innerHTML = '';
    const ths = theories[activeChapter] || [];
    
    if(ths.length === 0) {
        content.innerHTML = `<p style="color:var(--text-muted);">Contenu théorique en cours de rédaction pour ce chapitre...</p>`;
        return;
    }
    
    ths.forEach(t => {
        content.innerHTML += `
            <article class="glass">
                <h2 style="color: var(--accent); margin-bottom:10px;">${t.title}</h2>
                <p>${t.content}</p>
            </article>
        `;
    });
}

// --- Utilitaire Mélange ---
function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

// --- Flashcards (Chapitre) ---
let chapterFlashcards = [];
let fcIndex = 0;

function loadFlashcards() {
    chapterFlashcards = schemas.filter(s => s.chap === activeChapter);
    fcIndex = 0;
    
    if(chapterFlashcards.length === 0) {
        document.getElementById('fc-empty-msg').classList.remove('hidden-view');
        document.getElementById('fc-wrap').classList.add('hidden-view');
        document.getElementById('fc-controls').classList.add('hidden-view');
    } else {
        document.getElementById('fc-empty-msg').classList.add('hidden-view');
        document.getElementById('fc-wrap').classList.remove('hidden-view');
        document.getElementById('fc-controls').classList.remove('hidden-view');
        updateFcView();
    }
}

function shuffleFlashcards() {
    chapterFlashcards = shuffleArray(chapterFlashcards);
    fcIndex = 0;
    updateFcView();
}

function updateFcView() {
    if(chapterFlashcards.length === 0) return;
    const s = chapterFlashcards[fcIndex];
    document.getElementById('fc-term').textContent = s.name;
    document.getElementById('fc-def').textContent = s.def;
    document.getElementById('fc-questions').textContent = `Questions critiques : ${s.q}`;
    
    const exemplesHTML = Array.isArray(s.ex) ? s.ex.map(e => `- ${e}`).join('<br>') : s.ex;
    document.getElementById('fc-example').innerHTML = `<strong>Exemples :</strong><br><span style="font-style: italic;">${exemplesHTML}</span>`;
    
    document.getElementById('fc-counter').textContent = `${fcIndex + 1}/${chapterFlashcards.length}`;
    
    const fc = document.getElementById('current-flashcard');
    if(fc.classList.contains('is-flipped')) fc.classList.remove('is-flipped');
}

document.getElementById('current-flashcard').addEventListener('click', function() { this.classList.toggle('is-flipped'); });
document.getElementById('fc-next').addEventListener('click', () => { fcIndex = (fcIndex + 1) % chapterFlashcards.length; updateFcView(); });
document.getElementById('fc-prev').addEventListener('click', () => { fcIndex = (fcIndex - 1 + chapterFlashcards.length) % chapterFlashcards.length; updateFcView(); });

// --- Quiz (Chapitre) ---
let chapterQuiz = [];
let quizIndex = 0;
let quizScore = 0;

function loadQuiz() {
    chapterQuiz = schemas.filter(s => s.chap === activeChapter);
    if(chapterQuiz.length < 2) {
        document.getElementById('quiz-empty-msg').classList.remove('hidden-view');
        document.getElementById('quiz-wrap').classList.add('hidden-view');
    } else {
        document.getElementById('quiz-empty-msg').classList.add('hidden-view');
        document.getElementById('quiz-wrap').classList.remove('hidden-view');
        shuffleAndRestartQuiz();
    }
}

function shuffleAndRestartQuiz() {
    chapterQuiz = shuffleArray([...chapterQuiz]);
    quizIndex = 0; quizScore = 0;
    document.getElementById('quiz-score').textContent = `Score: 0`;
    renderQuizQuestion('chapitre');
}

// --- Flashcards (Global) ---
let globalFlashcards = [];
let gfcIndex = 0;

function loadGlobalFlashcards() {
    if(globalFlashcards.length === 0) globalFlashcards = [...schemas];
    updateGfcView();
}
function shuffleGlobalFlashcards() {
    globalFlashcards = shuffleArray(globalFlashcards);
    gfcIndex = 0; updateGfcView();
}
function updateGfcView() {
    const s = globalFlashcards[gfcIndex];
    document.getElementById('gfc-term').textContent = s.name;
    document.getElementById('gfc-def').textContent = s.def;
    document.getElementById('gfc-questions').textContent = `Questions critiques : ${s.q}`;
    
    const exemplesHTML = Array.isArray(s.ex) ? s.ex.map(e => `- ${e}`).join('<br>') : s.ex;
    document.getElementById('gfc-example').innerHTML = `<strong>Exemples :</strong><br><span style="font-style: italic;">${exemplesHTML}</span>`;
    
    document.getElementById('gfc-counter').textContent = `${gfcIndex + 1}/${globalFlashcards.length}`;
    
    const fc = document.getElementById('current-gfc');
    if(fc.classList.contains('is-flipped')) fc.classList.remove('is-flipped');
}
document.getElementById('current-gfc').addEventListener('click', function() { this.classList.toggle('is-flipped'); });
document.getElementById('gfc-next').addEventListener('click', () => { gfcIndex = (gfcIndex + 1) % globalFlashcards.length; updateGfcView(); });
document.getElementById('gfc-prev').addEventListener('click', () => { gfcIndex = (gfcIndex - 1 + globalFlashcards.length) % globalFlashcards.length; updateGfcView(); });

// --- Quiz (Global) ---
let globalQuiz = [];
let gquizIndex = 0;
let gquizScore = 0;

function loadGlobalQuiz() {
    shuffleAndRestartGlobalQuiz();
}

function shuffleAndRestartGlobalQuiz() {
    globalQuiz = shuffleArray([...schemas]); // Toutes les questions possibles
    gquizIndex = 0; gquizScore = 0;
    document.getElementById('gquiz-score').textContent = `Score: 0`;
    renderQuizQuestion('global');
}

// --- Fonction générique de rendu Quiz ---
function renderQuizQuestion(mode) {
    let currentData, cIndex, qPrefix;
    if(mode === 'chapitre') {
        currentData = chapterQuiz; cIndex = quizIndex; qPrefix = 'quiz';
    } else {
        currentData = globalQuiz; cIndex = gquizIndex; qPrefix = 'gquiz';
    }

    const s = currentData[cIndex];
    document.getElementById(`${qPrefix}-progress`).textContent = `Question ${cIndex + 1}/${currentData.length}`;
    
    // Si c'est un tableau, on choisit un exemple au hasard pour la question du quiz
    const randomEx = Array.isArray(s.ex) ? s.ex[Math.floor(Math.random() * s.ex.length)] : s.ex;
    document.getElementById(`${qPrefix}-question`).textContent = `Identifiez le schéma : "${randomEx}"`;
    
    let options = [s.name];
    let attempts = 0;
    while(options.length < 4 && attempts < 100) {
        const randS = schemas[Math.floor(Math.random() * schemas.length)].name;
        if(!options.includes(randS)) options.push(randS);
        attempts++;
    }
    options = shuffleArray(options);
    
    const optionsGrid = document.getElementById(`${qPrefix}-options`);
    optionsGrid.innerHTML = '';
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleQuizAnswer(opt, s.name, btn, mode);
        optionsGrid.appendChild(btn);
    });
    
    document.getElementById(`${qPrefix}-next`).classList.add('hidden');
}

function handleQuizAnswer(selected, correct, btnElement, mode) {
    const qPrefix = mode === 'chapitre' ? 'quiz' : 'gquiz';
    const buttons = document.querySelectorAll(`#${qPrefix}-options .option-btn`);
    buttons.forEach(b => b.disabled = true);
    
    if(selected === correct) {
        btnElement.classList.add('correct');
        if(mode === 'chapitre') quizScore++; else gquizScore++;
        document.getElementById(`${qPrefix}-score`).textContent = `Score: ${mode === 'chapitre' ? quizScore : gquizScore}`;
    } else {
        btnElement.classList.add('wrong');
        buttons.forEach(b => { if(b.textContent === correct) b.classList.add('correct'); });
    }
    document.getElementById(`${qPrefix}-next`).classList.remove('hidden');
}

document.getElementById('quiz-next').addEventListener('click', () => {
    quizIndex++;
    if(quizIndex < chapterQuiz.length) { renderQuizQuestion('chapitre'); } 
    else { finishQuiz('chapitre'); }
});

document.getElementById('gquiz-next').addEventListener('click', () => {
    gquizIndex++;
    if(gquizIndex < globalQuiz.length) { renderQuizQuestion('global'); } 
    else { finishQuiz('global'); }
});

function finishQuiz(mode) {
    const qPrefix = mode === 'chapitre' ? 'quiz' : 'gquiz';
    const currentData = mode === 'chapitre' ? chapterQuiz : globalQuiz;
    const score = mode === 'chapitre' ? quizScore : gquizScore;
    
    document.getElementById(`${qPrefix}-question`).textContent = `Quiz terminé ! Score : ${score}/${currentData.length}.`;
    document.getElementById(`${qPrefix}-options`).innerHTML = '';
    document.getElementById(`${qPrefix}-next`).classList.add('hidden');
}

// --- Encyclopédie globale ---
const schemaListContainer = document.getElementById('schemas-list');
const sortedSchemas = [...schemas].sort((a,b) => a.chap - b.chap);
sortedSchemas.forEach(s => {
    const item = document.createElement('div');
    item.className = 'schema-item';
    item.innerHTML = `
        <div class="schema-header">
            <h3>${s.name} <span class="schema-chap">CH. ${s.chap}</span> <span class="schema-family">${s.family}</span></h3>
            <span style="font-size: 1.5rem; line-height: 1;">+</span>
        </div>
        <div class="schema-body">
            <p style="margin-bottom: 10px; color: var(--text-main);"><strong>Définition :</strong> ${s.def}</p>
            <p class="critical-q"><strong>Questions critiques :</strong> ${s.q}</p>
            <p class="example-text"><strong>Exemples :</strong><br><span style="font-style: italic;">${Array.isArray(s.ex) ? s.ex.map(e => '- ' + e).join('<br>') : s.ex}</span></p>
        </div>
    `;
    item.querySelector('.schema-header').addEventListener('click', () => {
        item.classList.toggle('active');
        item.querySelector('span:last-child').textContent = item.classList.contains('active') ? '−' : '+';
    });
    schemaListContainer.appendChild(item);
});

// --- Atelier Logic ---
document.getElementById('btn-generate-schema').addEventListener('click', () => {
    const randomSchema = schemas[Math.floor(Math.random() * schemas.length)];
    document.getElementById('random-schema-display').innerHTML = `${randomSchema.name}<div style="font-size: 1rem; color: var(--text-muted); font-weight: normal; margin-top: 10px;">Rappel : ${randomSchema.def}</div>`;
    document.querySelectorAll('.textarea-glass').forEach(ta => ta.value = '');
});
