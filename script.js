const countries = [
  { name: "Canada", aliases: ["canada"], flag: "🇨🇦", region: "North America", capital: "Ottawa", population: "About 41.5 million", language: "English and French", cities: ["Toronto", "Montreal", "Vancouver", "Calgary"], player: "Alphonso Davies", map: { x: 24, y: 24 } },
  { name: "Mexico", aliases: ["mexico", "méxico"], flag: "🇲🇽", region: "North America", capital: "Mexico City", population: "About 132 million", language: "Spanish", cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"], player: "Santiago Gimenez", map: { x: 22, y: 45 } },
  { name: "United States", aliases: ["united states", "usa", "us", "america"], flag: "🇺🇸", region: "North America", capital: "Washington, D.C.", population: "About 340 million", language: "English", cities: ["New York City", "Los Angeles", "Chicago", "Houston"], player: "Christian Pulisic", map: { x: 27, y: 36 } },
  { name: "Japan", aliases: ["japon", "japan"], flag: "🇯🇵", region: "Asia", capital: "Tokyo", population: "About 123 million", language: "Japanese", cities: ["Tokyo", "Osaka", "Yokohama", "Kyoto"], player: "Takefusa Kubo", map: { x: 84, y: 35 } },
  { name: "New Zealand", aliases: ["new zealand", "nz"], flag: "🇳🇿", region: "Oceania", capital: "Wellington", population: "About 5.3 million", language: "English and Maori", cities: ["Auckland", "Wellington", "Christchurch", "Hamilton"], player: "Chris Wood", map: { x: 89, y: 82 } },
  { name: "Iran", aliases: ["iran"], flag: "🇮🇷", region: "Asia", capital: "Tehran", population: "About 91 million", language: "Persian", cities: ["Tehran", "Mashhad", "Isfahan", "Shiraz"], player: "Mehdi Taremi", map: { x: 64, y: 39 } },
  { name: "Argentina", aliases: ["argentina"], flag: "🇦🇷", region: "South America", capital: "Buenos Aires", population: "About 46 million", language: "Spanish", cities: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"], player: "Lionel Messi", map: { x: 34, y: 78 } },
  { name: "Uzbekistan", aliases: ["uzbekistan"], flag: "🇺🇿", region: "Asia", capital: "Tashkent", population: "About 37 million", language: "Uzbek", cities: ["Tashkent", "Samarkand", "Namangan", "Andijan"], player: "Eldor Shomurodov", map: { x: 68, y: 35 } },
  { name: "Jordan", aliases: ["jordan"], flag: "🇯🇴", region: "Asia", capital: "Amman", population: "About 11 million", language: "Arabic", cities: ["Amman", "Zarqa", "Irbid", "Aqaba"], player: "Musa Al-Taamari", map: { x: 59, y: 43 } },
  { name: "South Korea", aliases: ["south korea", "korea"], flag: "🇰🇷", region: "Asia", capital: "Seoul", population: "About 52 million", language: "Korean", cities: ["Seoul", "Busan", "Incheon", "Daegu"], player: "Son Heung-min", map: { x: 81, y: 36 } },
  { name: "Australia", aliases: ["australia"], flag: "🇦🇺", region: "Oceania", capital: "Canberra", population: "About 27 million", language: "English", cities: ["Sydney", "Melbourne", "Brisbane", "Perth"], player: "Jackson Irvine", map: { x: 82, y: 72 } },
  { name: "Brazil", aliases: ["brasil", "brazil"], flag: "🇧🇷", region: "South America", capital: "Brasilia", population: "About 213 million", language: "Portuguese", cities: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador"], player: "Vinicius Junior", map: { x: 35, y: 62 } },
  { name: "Ecuador", aliases: ["ecuador"], flag: "🇪🇨", region: "South America", capital: "Quito", population: "About 18 million", language: "Spanish", cities: ["Quito", "Guayaquil", "Cuenca", "Santo Domingo"], player: "Moises Caicedo", map: { x: 29, y: 57 } },
  { name: "Paraguay", aliases: ["paraguay"], flag: "🇵🇾", region: "South America", capital: "Asuncion", population: "About 6.9 million", language: "Spanish and Guarani", cities: ["Asuncion", "Ciudad del Este", "San Lorenzo", "Luque"], player: "Miguel Almiron", map: { x: 35, y: 69 } },
  { name: "Uruguay", aliases: ["uruguay"], flag: "🇺🇾", region: "South America", capital: "Montevideo", population: "About 3.4 million", language: "Spanish", cities: ["Montevideo", "Salto", "Paysandu", "Maldonado"], player: "Federico Valverde", map: { x: 36, y: 76 } },
  { name: "Colombia", aliases: ["colombia"], flag: "🇨🇴", region: "South America", capital: "Bogota", population: "About 52 million", language: "Spanish", cities: ["Bogota", "Medellin", "Cali", "Barranquilla"], player: "Luis Diaz", map: { x: 31, y: 53 } },
  { name: "Morocco", aliases: ["morocco"], flag: "🇲🇦", region: "Africa", capital: "Rabat", population: "About 38 million", language: "Arabic and Amazigh", cities: ["Casablanca", "Rabat", "Marrakesh", "Fes"], player: "Achraf Hakimi", map: { x: 50, y: 43 } },
  { name: "Tunisia", aliases: ["tunisia"], flag: "🇹🇳", region: "Africa", capital: "Tunis", population: "About 12 million", language: "Arabic", cities: ["Tunis", "Sfax", "Sousse", "Kairouan"], player: "Ellyes Skhiri", map: { x: 53, y: 42 } },
  { name: "Egypt", aliases: ["egipto", "egypt"], flag: "🇪🇬", region: "Africa", capital: "Cairo", population: "About 112 million", language: "Arabic", cities: ["Cairo", "Alexandria", "Giza", "Luxor"], player: "Mohamed Salah", map: { x: 58, y: 43 } },
  { name: "Algeria", aliases: ["algeria"], flag: "🇩🇿", region: "Africa", capital: "Algiers", population: "About 47 million", language: "Arabic and Amazigh", cities: ["Algiers", "Oran", "Constantine", "Annaba"], player: "Riyad Mahrez", map: { x: 52, y: 45 } },
  { name: "Ghana", aliases: ["ghana"], flag: "🇬🇭", region: "Africa", capital: "Accra", population: "About 35 million", language: "English", cities: ["Accra", "Kumasi", "Tamale", "Sekondi-Takoradi"], player: "Mohammed Kudus", map: { x: 52, y: 56 } },
  { name: "Cape Verde", aliases: ["cape verde", "cabo verde"], flag: "🇨🇻", region: "Africa", capital: "Praia", population: "About 0.6 million", language: "Portuguese", cities: ["Praia", "Mindelo", "Santa Maria", "Assomada"], player: "Ryan Mendes", map: { x: 45, y: 51 } },
  { name: "Qatar", aliases: ["qatar"], flag: "🇶🇦", region: "Asia", capital: "Doha", population: "About 3 million", language: "Arabic", cities: ["Doha", "Al Rayyan", "Al Wakrah", "Umm Salal"], player: "Akram Afif", map: { x: 62, y: 45 } },
  { name: "Saudi Arabia", aliases: ["saudi arabia"], flag: "🇸🇦", region: "Asia", capital: "Riyadh", population: "About 34 million", language: "Arabic", cities: ["Riyadh", "Jeddah", "Mecca", "Medina"], player: "Salem Al-Dawsari", map: { x: 61, y: 48 } },
  { name: "Senegal", aliases: ["senegal"], flag: "🇸🇳", region: "Africa", capital: "Dakar", population: "About 19 million", language: "French", cities: ["Dakar", "Touba", "Thies", "Saint-Louis"], player: "Sadio Mane", map: { x: 47, y: 54 } },
  { name: "South Africa", aliases: ["south africa"], flag: "🇿🇦", region: "Africa", capital: "Pretoria, Cape Town, and Bloemfontein", population: "About 64 million", language: "11 official languages", cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria"], player: "Ronwen Williams", map: { x: 59, y: 74 } },
  { name: "Ivory Coast", aliases: ["ivory coast", "cote d'ivoire", "côte d'ivoire"], flag: "🇨🇮", region: "Africa", capital: "Yamoussoukro", population: "About 32 million", language: "French", cities: ["Abidjan", "Yamoussoukro", "Bouake", "Daloa"], player: "Franck Kessie", map: { x: 51, y: 56 } },
  { name: "England", aliases: ["england"], flag: "🏴", region: "Europe", capital: "London", population: "About 57 million", language: "English", cities: ["London", "Manchester", "Birmingham", "Liverpool"], player: "Harry Kane", map: { x: 49, y: 28 } },
  { name: "France", aliases: ["france"], flag: "🇫🇷", region: "Europe", capital: "Paris", population: "About 68 million", language: "French", cities: ["Paris", "Marseille", "Lyon", "Toulouse"], player: "Kylian Mbappe", map: { x: 51, y: 33 } },
  { name: "Croatia", aliases: ["croatia"], flag: "🇭🇷", region: "Europe", capital: "Zagreb", population: "About 3.9 million", language: "Croatian", cities: ["Zagreb", "Split", "Rijeka", "Osijek"], player: "Luka Modric", map: { x: 54, y: 35 } },
  { name: "Portugal", aliases: ["portugal"], flag: "🇵🇹", region: "Europe", capital: "Lisbon", population: "About 10.5 million", language: "Portuguese", cities: ["Lisbon", "Porto", "Braga", "Coimbra"], player: "Cristiano Ronaldo", map: { x: 48, y: 38 } },
  { name: "Norway", aliases: ["norway"], flag: "🇳🇴", region: "Europe", capital: "Oslo", population: "About 5.6 million", language: "Norwegian", cities: ["Oslo", "Bergen", "Trondheim", "Stavanger"], player: "Erling Haaland", map: { x: 52, y: 22 } },
  { name: "Germany", aliases: ["germany", "deutschland"], flag: "🇩🇪", region: "Europe", capital: "Berlin", population: "About 84 million", language: "German", cities: ["Berlin", "Hamburg", "Munich", "Cologne"], player: "Jamal Musiala", map: { x: 53, y: 30 } },
  { name: "Netherlands", aliases: ["netherlands", "holland"], flag: "🇳🇱", region: "Europe", capital: "Amsterdam", population: "About 18 million", language: "Dutch", cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"], player: "Virgil van Dijk", map: { x: 51, y: 29 } },
  { name: "Switzerland", aliases: ["switzerland"], flag: "🇨🇭", region: "Europe", capital: "Bern", population: "About 9 million", language: "German, French, Italian, and Romansh", cities: ["Zurich", "Geneva", "Basel", "Bern"], player: "Granit Xhaka", map: { x: 52, y: 34 } },
  { name: "Scotland", aliases: ["scotland"], flag: "🏴", region: "Europe", capital: "Edinburgh", population: "About 5.5 million", language: "English, Scots, and Scottish Gaelic", cities: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee"], player: "Scott McTominay", map: { x: 49, y: 25 } },
  { name: "Spain", aliases: ["spain", "españa", "espana"], flag: "🇪🇸", region: "Europe", capital: "Madrid", population: "About 49 million", language: "Spanish", cities: ["Madrid", "Barcelona", "Valencia", "Seville"], player: "Lamine Yamal", map: { x: 49, y: 38 } },
  { name: "Austria", aliases: ["austria"], flag: "🇦🇹", region: "Europe", capital: "Vienna", population: "About 9.2 million", language: "German", cities: ["Vienna", "Graz", "Linz", "Salzburg"], player: "David Alaba", map: { x: 54, y: 33 } },
  { name: "Belgium", aliases: ["belgium"], flag: "🇧🇪", region: "Europe", capital: "Brussels", population: "About 12 million", language: "Dutch, French, and German", cities: ["Brussels", "Antwerp", "Ghent", "Bruges"], player: "Kevin De Bruyne", map: { x: 51, y: 30 } },
  { name: "Panama", aliases: ["panama"], flag: "🇵🇦", region: "North America", capital: "Panama City", population: "About 4.5 million", language: "Spanish", cities: ["Panama City", "San Miguelito", "Tocumen", "David"], player: "Adalberto Carrasquilla", map: { x: 29, y: 50 } },
  { name: "Curacao", aliases: ["curacao", "curaçao"], flag: "🇨🇼", region: "North America", capital: "Willemstad", population: "About 0.16 million", language: "Papiamento, Dutch, and English", cities: ["Willemstad", "Sint Michiel", "Barber", "Tera Kora"], player: "Leandro Bacuna", map: { x: 31, y: 47 } },
  { name: "Haiti", aliases: ["haiti"], flag: "🇭🇹", region: "North America", capital: "Port-au-Prince", population: "About 12 million", language: "Haitian Creole and French", cities: ["Port-au-Prince", "Cap-Haitien", "Gonaives", "Les Cayes"], player: "Duckens Nazon", map: { x: 30, y: 46 } },
  { name: "Bosnia and Herzegovina", aliases: ["bosnia", "bosnia and herzegovina"], flag: "🇧🇦", region: "Europe", capital: "Sarajevo", population: "About 3.2 million", language: "Bosnian, Croatian, and Serbian", cities: ["Sarajevo", "Banja Luka", "Tuzla", "Zenica"], player: "Edin Dzeko", map: { x: 55, y: 35 } },
  { name: "Sweden", aliases: ["sweden"], flag: "🇸🇪", region: "Europe", capital: "Stockholm", population: "About 10.6 million", language: "Swedish", cities: ["Stockholm", "Gothenburg", "Malmo", "Uppsala"], player: "Alexander Isak", map: { x: 53, y: 24 } },
  { name: "Turkey", aliases: ["turkey", "turkiye", "türkiye"], flag: "🇹🇷", region: "Europe and Asia", capital: "Ankara", population: "About 86 million", language: "Turkish", cities: ["Istanbul", "Ankara", "Izmir", "Bursa"], player: "Hakan Calhanoglu", map: { x: 58, y: 38 } },
  { name: "Czech Republic", aliases: ["czech republic", "czechia"], flag: "🇨🇿", region: "Europe", capital: "Prague", population: "About 10.9 million", language: "Czech", cities: ["Prague", "Brno", "Ostrava", "Plzen"], player: "Patrik Schick", map: { x: 53, y: 32 } },
  { name: "DR Congo", aliases: ["dr congo", "democratic republic of the congo", "congo"], flag: "🇨🇩", region: "Africa", capital: "Kinshasa", population: "About 112 million", language: "French", cities: ["Kinshasa", "Lubumbashi", "Mbuji-Mayi", "Kisangani"], player: "Yoane Wissa", map: { x: 57, y: 62 } },
  { name: "Iraq", aliases: ["iraq"], flag: "🇮🇶", region: "Asia", capital: "Baghdad", population: "About 46 million", language: "Arabic and Kurdish", cities: ["Baghdad", "Mosul", "Basra", "Erbil"], player: "Aymen Hussein", map: { x: 61, y: 41 } },
];

const questionTypes = [
  {
    key: "capital",
    prompt: (country) => `What is the capital of ${country.name}?`,
    answer: (country) => country.capital,
    hint: (country) => `Use the region: ${country.name} is in ${country.region}. Eliminate capitals from other regions first.`,
    lesson: (country) => `${country.capital} is the capital of ${country.name}. Link the country and capital together as one pair when you study.`,
  },
  {
    key: "language",
    prompt: (country) => `What language is listed for ${country.name}?`,
    answer: (country) => country.language,
    hint: (country) => `Think about nearby countries and history, not only the continent. ${country.name} is in ${country.region}.`,
    lesson: (country) => `${country.name} is listed with ${country.language}. Language questions are easier when you connect geography with history.`,
  },
  {
    key: "population",
    prompt: (country) => `What is the approximate population of ${country.name}?`,
    answer: (country) => country.population,
    hint: (country) => `Compare scale: is ${country.name} a very large country, medium-sized, or small?`,
    lesson: (country) => `${country.name} is listed at ${country.population}. For population, learn the rough size instead of memorizing exact digits.`,
  },
  {
    key: "city",
    prompt: (country) => `Which city is one of the major cities in ${country.name}?`,
    answer: (country) => country.cities[0],
    hint: (country) => `One option belongs with the same country as ${country.capital}, but it is not always the capital.`,
    lesson: (country) => `${country.cities[0]} is a major city in ${country.name}. Try remembering one capital and one major non-capital city per country.`,
  },
  {
    key: "region",
    prompt: (country) => `What region is ${country.name} in?`,
    answer: (country) => country.region,
    hint: (country) => `Think about which other World Cup countries are nearby before choosing.`,
    lesson: (country) => `${country.name} is in ${country.region}. Region questions are map questions: group nearby countries together.`,
  },
  {
    key: "player",
    prompt: (country) => `Who is the main player listed for ${country.name}?`,
    answer: (country) => country.player,
    hint: (country) => `Eliminate players you already connect strongly with other national teams.`,
    lesson: (country) => `${country.player} is the main player listed for ${country.name}. Connect player names to flags, not just clubs.`,
  },
];

const input = document.querySelector("#country-input");
const searchButton = document.querySelector("#search-button");
const helperText = document.querySelector("#helper-text");
const emptyState = document.querySelector("#empty-state");
const quickPicks = document.querySelector("#quick-picks");
const mapScene = document.querySelector("#map-scene");
const mapLabel = document.querySelector("#map-label");
const result = document.querySelector("#country-result");
const showAnswerButton = document.querySelector("#show-answer");
const quizAnswer = document.querySelector("#quiz-answer");
const levelElement = document.querySelector("#level");
const scoreElement = document.querySelector("#score");
const livesElement = document.querySelector("#lives");
const timerElement = document.querySelector("#timer");
const sessionTimerElement = document.querySelector("#session-timer");
const streakElement = document.querySelector("#streak");
const rewardElement = document.querySelector("#reward");
const progressElement = document.querySelector("#progress");
const questionText = document.querySelector("#question-text");
const answerOptions = document.querySelector("#answer-options");
const startSessionButton = document.querySelector("#start-session");
const newQuestionButton = document.querySelector("#new-question");
const hintButton = document.querySelector("#hint-button");
const restartSessionButton = document.querySelector("#restart-session");
const submitScoreButton = document.querySelector("#submit-score");
const submitScoreInlineButton = document.querySelector("#submit-score-inline");
const focusExitButton = document.querySelector("#focus-exit");
const feedback = document.querySelector("#feedback");
const playerForm = document.querySelector("#player-form");
const playerNameInput = document.querySelector("#player-name");
const playerHelper = document.querySelector("#player-helper");
const focusModeInput = document.querySelector("#focus-mode");
const leaderboardList = document.querySelector("#leaderboard-list");
const leaderboardStatus = document.querySelector("#leaderboard-status");
const refreshLeaderboardButton = document.querySelector("#refresh-leaderboard");
const loadMoreScoresButton = document.querySelector("#load-more-scores");

let audioContext;
let selectedCountry = countries[0];
let currentQuestion;
let level = 1;
let score = 0;
let triesLeft = 3;
let streak = 0;
let answered = true;
let hintUsed = false;
let questionDeck = [];
let lastQuestionTypeKey = "";
let lastQuestionCountryName = "";
let secondsLeft = 15;
let timerId;
let sessionSecondsLeft = 180;
let sessionTimerId;
let sessionStarted = false;
let sessionEnded = false;
let playerName = localStorage.getItem("geolearning.playerName") || "";
let totalQuestions = 0;
let correctAnswers = 0;
let bestStreak = 0;
let scoreSubmitted = false;
let leaderboardScores = [];
let visibleScoreCount = 7;
let focusWasActive = false;

const questionTimeLimit = 15;
const questionsPerSession = 10;
const sessionTimeLimit = 180;
const hintPenalty = 6;
const wrongPenalty = 4;
const failedQuestionPenalty = 12;
const timeoutPenalty = 15;
const localScoresKey = "geolearning.localScores";
const initialLeaderboardCount = 7;
const leaderboardPageSize = 7;
const maxSpeedBonus = 4;
const config = window.GEOLEARNING_CONFIG || {};
const hasSupabase = Boolean(config.supabaseUrl && config.supabaseAnonKey);

function normalize(text) {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function cleanPlayerName(name) {
  return name.replace(/[^a-zA-Z0-9 _.-]/g, "").trim().slice(0, 20);
}

function setPlayerName(name) {
  playerName = cleanPlayerName(name) || "Explorer";
  localStorage.setItem("geolearning.playerName", playerName);
  playerNameInput.value = playerName;
  playerHelper.textContent = `Playing as ${playerName}.`;
  updateGameStatus();
}

function getLocalScores() {
  try {
    return JSON.parse(localStorage.getItem(localScoresKey)) || [];
  } catch {
    return [];
  }
}

function saveLocalScore(entry) {
  const scores = [entry, ...getLocalScores()]
    .sort((a, b) => b.score - a.score || b.level - a.level)
    .slice(0, 50);
  localStorage.setItem(localScoresKey, JSON.stringify(scores));
  return scores;
}

function formatScoreDate(value) {
  if (!value) {
    return "Just now";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  return date.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function findCountry(query) {
  const cleanQuery = normalize(query);
  return countries.find((country) =>
    country.aliases.some((alias) => normalize(alias) === cleanQuery),
  );
}

function playUnravelSound() {
  const BrowserAudioContext = window.AudioContext || window.webkitAudioContext;
  if (!BrowserAudioContext) {
    return;
  }

  audioContext ||= new BrowserAudioContext();
  const now = audioContext.currentTime;
  const notes = [760, 620, 520, 410, 340];

  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = now + index * 0.035;

    oscillator.type = index % 2 === 0 ? "triangle" : "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.72, start + 0.12);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.08, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.16);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.18);
  });
}

function renderCountry(country) {
  selectedCountry = country;
  mapScene.style.setProperty("--pin-x", `${country.map.x}%`);
  mapScene.style.setProperty("--pin-y", `${country.map.y}%`);
  mapScene.classList.add("has-selection");
  mapLabel.textContent = country.name;

  document.querySelector("#region").textContent = country.region;
  document.querySelector("#country-name").textContent = country.name;
  document.querySelector("#flag").textContent = country.flag;
  document.querySelector("#capital").textContent = country.capital;
  document.querySelector("#population").textContent = country.population;
  document.querySelector("#language").textContent = country.language;
  document.querySelector("#player").textContent = country.player;
  document.querySelector("#quiz-question").textContent =
    `Quick question: who is the main player listed for ${country.name}?`;
  quizAnswer.textContent = country.player;
  quizAnswer.classList.add("hidden");

  const citiesList = document.querySelector("#cities");
  citiesList.innerHTML = "";
  country.cities.forEach((fact) => {
    const item = document.createElement("li");
    item.textContent = fact;
    citiesList.append(item);
  });

  emptyState.classList.add("hidden");
  result.classList.remove("hidden");
  helperText.classList.remove("error");
  helperText.textContent = "Study the card, then answer the challenge.";
}

function hideAnswerCountry() {
  mapScene.style.setProperty("--pin-x", "50%");
  mapScene.style.setProperty("--pin-y", "50%");
  mapScene.classList.remove("has-selection");
  mapLabel.textContent = "Hidden during challenge";
  emptyState.classList.remove("hidden");
  result.classList.add("hidden");
  emptyState.querySelector("h2").textContent = "Challenge mode";
  emptyState.querySelector("p").textContent =
    "The country card is hidden while you answer. Use memory, hints, and the answer choices.";
  helperText.classList.remove("error");
  helperText.textContent = "Challenge mode hides the country card until the answer is revealed.";
}

function searchCountry() {
  playUnravelSound();

  if (currentQuestion && !answered) {
    helperText.classList.add("error");
    helperText.textContent = "Finish the current challenge before opening study mode.";
    return;
  }

  const country = findCountry(input.value);

  if (!country) {
    helperText.classList.add("error");
    helperText.textContent =
      "I do not have that country yet. Try one of the World Cup country buttons.";
    return;
  }

  stopTimer();
  renderCountry(country);
  feedback.textContent =
    "Study mode changed the card. The challenge will keep mixing all countries.";
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getWrongAnswers(type, country) {
  const correct = type.answer(country);
  const pool = countries
    .filter((candidate) => candidate.name !== country.name)
    .map((candidate) => type.answer(candidate))
    .filter((answer, index, answers) => answer !== correct && answers.indexOf(answer) === index);

  return shuffle(pool).slice(0, 3);
}

async function fetchLeaderboard() {
  if (!hasSupabase) {
    leaderboardStatus.textContent = "Local leaderboard. Configure Supabase for online competition.";
    leaderboardScores = getLocalScores();
    visibleScoreCount = initialLeaderboardCount;
    renderLeaderboard();
    return;
  }

  leaderboardStatus.textContent = "Loading online leaderboard...";
  try {
    const response = await fetch(
      `${config.supabaseUrl}/rest/v1/scores?select=player_name,score,level,best_streak,total_questions,correct_answers,created_at&order=score.desc,level.desc,created_at.asc&limit=50`,
      {
        headers: {
          apikey: config.supabaseAnonKey,
          Authorization: `Bearer ${config.supabaseAnonKey}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Leaderboard request failed: ${response.status}`);
    }

    const scores = await response.json();
    leaderboardScores = scores.map((entry) => ({
      playerName: entry.player_name,
      score: entry.score,
      level: entry.level,
      bestStreak: entry.best_streak,
      totalQuestions: entry.total_questions,
      correctAnswers: entry.correct_answers,
      createdAt: entry.created_at,
    }));
    visibleScoreCount = initialLeaderboardCount;
    renderLeaderboard();
    leaderboardStatus.textContent = "Online leaderboard loaded.";
  } catch (error) {
    console.error(error);
    leaderboardStatus.textContent = "Online leaderboard failed. Showing local scores.";
    leaderboardScores = getLocalScores();
    visibleScoreCount = initialLeaderboardCount;
    renderLeaderboard();
  }
}

function renderLeaderboard() {
  leaderboardList.innerHTML = "";
  const visibleScores = leaderboardScores.slice(0, visibleScoreCount);

  if (leaderboardScores.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "No scores yet. Finish a session to be first.";
    leaderboardList.append(empty);
    loadMoreScoresButton.classList.add("hidden");
    return;
  }

  visibleScores.forEach((entry) => {
    const item = document.createElement("li");
    const name = document.createElement("strong");
    const details = document.createElement("span");
    const date = document.createElement("time");
    const accuracy =
      entry.totalQuestions > 0
        ? Math.round((entry.correctAnswers / entry.totalQuestions) * 100)
        : 0;
    name.textContent = entry.playerName;
    details.textContent = `${entry.score} pts · L${entry.level} · ${entry.bestStreak} streak · ${accuracy}%`;
    date.textContent = formatScoreDate(entry.createdAt);
    if (entry.createdAt) {
      date.dateTime = entry.createdAt;
    }
    item.append(name, details, date);
    leaderboardList.append(item);
  });

  loadMoreScoresButton.classList.toggle(
    "hidden",
    visibleScoreCount >= leaderboardScores.length,
  );
}

async function submitScore() {
  if (!sessionEnded || scoreSubmitted || totalQuestions === 0) {
    leaderboardStatus.textContent =
      totalQuestions === 0
        ? "Answer at least one question before submitting."
        : !sessionEnded
          ? "Finish the timed session before submitting."
          : "Score already submitted.";
    return;
  }

  if (!playerName) {
    setPlayerName(playerNameInput.value);
  }

  const entry = {
    playerName,
    score,
    level,
    bestStreak,
    totalQuestions,
    correctAnswers,
    createdAt: new Date().toISOString(),
  };

  saveLocalScore(entry);
  scoreSubmitted = true;
  updateGameStatus();

  if (!hasSupabase) {
    leaderboardStatus.textContent = "Score saved locally. Add Supabase config to publish online.";
    await fetchLeaderboard();
    return;
  }

  leaderboardStatus.textContent = "Submitting score...";
  try {
    const response = await fetch(`${config.supabaseUrl}/rest/v1/scores`, {
      method: "POST",
      headers: {
        apikey: config.supabaseAnonKey,
        Authorization: `Bearer ${config.supabaseAnonKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        player_name: entry.playerName,
        score: entry.score,
        level: entry.level,
        best_streak: entry.bestStreak,
        total_questions: entry.totalQuestions,
        correct_answers: entry.correctAnswers,
      }),
    });

    if (!response.ok) {
      throw new Error(`Submit failed: ${response.status}`);
    }

    leaderboardStatus.textContent = "Score submitted online.";
    await fetchLeaderboard();
  } catch (error) {
    console.error(error);
    leaderboardStatus.textContent = "Online submit failed. Score saved locally.";
    await fetchLeaderboard();
  }

  updateGameStatus();
}

function buildQuestionDeck() {
  questionDeck = shuffle(
    countries.flatMap((country) =>
      questionTypes.map((type) => ({
        country,
        type,
      })),
    ),
  );
}

function drawQuestion() {
  if (questionDeck.length === 0) {
    buildQuestionDeck();
  }

  const variedIndex = questionDeck.findIndex(
    (item) =>
      item.country.name !== lastQuestionCountryName &&
      item.type.key !== lastQuestionTypeKey,
  );
  const fallbackIndex = questionDeck.findIndex(
    (item) => item.country.name !== lastQuestionCountryName,
  );
  const index = variedIndex >= 0 ? variedIndex : fallbackIndex >= 0 ? fallbackIndex : 0;
  const [question] = questionDeck.splice(index, 1);

  lastQuestionCountryName = question.country.name;
  lastQuestionTypeKey = question.type.key;
  return question;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function startSessionTimer() {
  if (sessionTimerId || sessionEnded) {
    return;
  }

  sessionSecondsLeft = sessionTimeLimit;
  sessionTimerId = setInterval(() => {
    sessionSecondsLeft -= 1;
    updateGameStatus();

    if (sessionSecondsLeft <= 0) {
      endSession("Time is up. Submit your score to the leaderboard.");
    }
  }, 1000);
}

function stopSessionTimer() {
  clearInterval(sessionTimerId);
  sessionTimerId = undefined;
}

function startTimer() {
  clearInterval(timerId);
  secondsLeft = questionTimeLimit;
  updateGameStatus();

  timerId = setInterval(() => {
    secondsLeft -= 1;
    updateGameStatus();

    if (secondsLeft <= 0) {
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}

function resetSession() {
  stopTimer();
  stopSessionTimer();
  level = 1;
  score = 0;
  triesLeft = 3;
  streak = 0;
  answered = true;
  hintUsed = false;
  currentQuestion = undefined;
  secondsLeft = questionTimeLimit;
  sessionSecondsLeft = sessionTimeLimit;
  sessionStarted = false;
  sessionEnded = false;
  totalQuestions = 0;
  correctAnswers = 0;
  bestStreak = 0;
  scoreSubmitted = false;
  buildQuestionDeck();
  answerOptions.innerHTML = "";
  questionText.textContent = playerName
    ? "Ready. Start the session when you are prepared."
    : "Enter a nickname, then start the challenge.";
  feedback.textContent = "Session not started yet. No timer is running.";
  hideAnswerCountry();
  updateGameStatus();
}

function startSession() {
  if (!playerName) {
    const cleanedName = cleanPlayerName(playerNameInput.value);
    if (!cleanedName) {
      playerHelper.textContent = "Choose a nickname before starting.";
      playerNameInput.focus();
      updateGameStatus();
      return;
    }
    setPlayerName(cleanedName);
  }

  if (sessionStarted && !sessionEnded) {
    return;
  }

  sessionStarted = true;
  sessionEnded = false;
  scoreSubmitted = false;
  createQuestion();
}

function createQuestion() {
  if (!sessionStarted) {
    questionText.textContent = playerName
      ? "Ready. Start the session when you are prepared."
      : "Enter a nickname, then start the challenge.";
    updateGameStatus();
    return;
  }

  if (sessionEnded) {
    updateGameStatus();
    return;
  }

  if (totalQuestions >= questionsPerSession) {
    endSession("Session complete. Submit your score to the leaderboard.");
    return;
  }

  startSessionTimer();

  const { country, type } = drawQuestion();
  hideAnswerCountry();
  answered = false;
  hintUsed = false;
  triesLeft = 3;
  const correctAnswer = type.answer(country);
  const options = shuffle([correctAnswer, ...getWrongAnswers(type, country)]);

  currentQuestion = { country, type, correctAnswer };
  questionText.textContent = type.prompt(country);
  answerOptions.innerHTML = "";
  feedback.textContent = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option, button));
    answerOptions.append(button);
  });

  startTimer();
  updateGameStatus();
}

function getLearningMessage(prefix) {
  return `${prefix} Correct answer: ${currentQuestion.correctAnswer}. ${currentQuestion.type.lesson(currentQuestion.country)}`;
}

function checkAnswer(answer, button) {
  if (answered || !currentQuestion) {
    return;
  }

  playUnravelSound();

  if (answer === currentQuestion.correctAnswer) {
    answered = true;
    stopTimer();
    const speedBonus = Math.ceil((Math.max(0, secondsLeft) / questionTimeLimit) * maxSpeedBonus);
    totalQuestions += 1;
    correctAnswers += 1;
    streak += 1;
    const earnedPoints = 10 + level * 2 + streak + speedBonus;
    bestStreak = Math.max(bestStreak, streak);
    score += earnedPoints;
    level += 1;
    button.classList.add("correct");
    feedback.textContent = `Correct. +${earnedPoints} points, including +${speedBonus} speed bonus. Reward unlocked: ${getReward()}`;
    renderCountry(currentQuestion.country);
    createRewardBurst();
    updateGameStatus();
    maybeCompleteSession();
    return;
  }

  triesLeft -= 1;
  streak = 0;
  score = Math.max(0, score - wrongPenalty);
  button.classList.add("wrong");
  button.disabled = true;

  if (triesLeft <= 0) {
    answered = true;
    stopTimer();
    totalQuestions += 1;
    score = Math.max(0, score - failedQuestionPenalty);
    level = Math.max(1, level - 1);
    feedback.textContent = getLearningMessage(
      `Penalty: -${wrongPenalty + failedQuestionPenalty} points and back one level.`,
    );
    renderCountry(currentQuestion.country);
    maybeCompleteSession();
  } else {
    feedback.textContent = `Not quite. -${wrongPenalty} points. You have ${triesLeft} ${triesLeft === 1 ? "try" : "tries"} left.`;
  }

  updateGameStatus();
}

function handleTimeout() {
  if (answered || !currentQuestion) {
    return;
  }

  answered = true;
  stopTimer();
  streak = 0;
  triesLeft = 0;
  totalQuestions += 1;
  score = Math.max(0, score - timeoutPenalty);
  level = Math.max(1, level - 1);
  feedback.textContent = getLearningMessage(
    `Time ran out. Penalty: -${timeoutPenalty} points and back one level.`,
  );
  answerOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    if (button.textContent === currentQuestion.correctAnswer) {
      button.classList.add("correct");
    }
  });
  renderCountry(currentQuestion.country);
  updateGameStatus();
  maybeCompleteSession();
}

function maybeCompleteSession() {
  if (totalQuestions < questionsPerSession && sessionSecondsLeft > 0) {
    return;
  }

  endSession("Session complete. Submit your score to the leaderboard.");
}

function endSession(message) {
  if (sessionEnded) {
    return;
  }

  sessionEnded = true;
  stopTimer();
  stopSessionTimer();
  answered = true;
  questionText.textContent = message;
  answerOptions.innerHTML = "";
  feedback.textContent = `Final score: ${score} points. Correct answers: ${correctAnswers}/${totalQuestions}.`;
  updateGameStatus();
}

function getReward() {
  const rewards = ["Cloud badge", "Map spark", "Explorer star", "Captain flag", "World Cup boost"];
  return rewards[level % rewards.length];
}

function createRewardBurst() {
  const burst = document.createElement("span");
  burst.className = "reward-burst";
  burst.textContent = "+";
  mapScene.append(burst);
  setTimeout(() => burst.remove(), 900);
}

function showHint() {
  if (!currentQuestion || answered || hintUsed) {
    return;
  }

  hintUsed = true;
  score = Math.max(0, score - hintPenalty);
  feedback.textContent = `Hint (-${hintPenalty} points): ${currentQuestion.type.hint(currentQuestion.country)}`;
  updateGameStatus();
}

function updateGameStatus() {
  levelElement.textContent = level;
  scoreElement.textContent = `${score} pts`;
  livesElement.textContent = `${triesLeft} ${triesLeft === 1 ? "try" : "tries"}`;
  timerElement.textContent = `${secondsLeft}s`;
  timerElement.classList.toggle("warning", secondsLeft <= 8 && !answered);
  sessionTimerElement.textContent = formatTime(Math.max(0, sessionSecondsLeft));
  sessionTimerElement.classList.toggle("warning", sessionSecondsLeft <= 30 && !sessionEnded);
  streakElement.textContent = `${streak} streak`;
  rewardElement.textContent = streak > 0 ? `Reward: ${getReward()}` : "Reward: none yet";
  progressElement.textContent = `${totalQuestions}/${questionsPerSession}`;
  startSessionButton.disabled = sessionStarted && !sessionEnded;
  newQuestionButton.disabled = !sessionStarted || !answered || sessionEnded;
  hintButton.disabled = answered || hintUsed || sessionEnded;
  restartSessionButton.disabled =
    !sessionStarted && totalQuestions === 0 && score === 0 && !currentQuestion;
  submitScoreButton.disabled = !sessionEnded || scoreSubmitted || totalQuestions === 0;
  submitScoreInlineButton.disabled = submitScoreButton.disabled;
  submitScoreInlineButton.classList.toggle(
    "hidden",
    !sessionEnded || scoreSubmitted || totalQuestions === 0,
  );
  const focusActive = Boolean(focusModeInput.checked && sessionStarted && !scoreSubmitted);
  document.body.classList.toggle("game-focus-active", focusActive);
  focusExitButton.classList.toggle("hidden", !focusActive);
  if (focusActive && !focusWasActive) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  focusWasActive = focusActive;
}

function buildQuickPicks() {
  countries.forEach((country) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${country.flag} ${country.name}`;
    button.dataset.country = country.name;
    quickPicks.append(button);
  });
}

searchButton.addEventListener("click", searchCountry);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchCountry();
  }
});

buildQuickPicks();

document.querySelectorAll("[data-country]").forEach((button) => {
  button.addEventListener("click", () => {
    input.value = button.dataset.country;
    searchCountry();
  });
});

showAnswerButton.addEventListener("click", () => {
  playUnravelSound();
  quizAnswer.classList.toggle("hidden");
});

startSessionButton.addEventListener("click", () => {
  playUnravelSound();
  startSession();
});

newQuestionButton.addEventListener("click", () => {
  playUnravelSound();
  stopTimer();
  createQuestion();
});

hintButton.addEventListener("click", () => {
  playUnravelSound();
  showHint();
});

submitScoreButton.addEventListener("click", () => {
  playUnravelSound();
  submitScore();
});

submitScoreInlineButton.addEventListener("click", () => {
  playUnravelSound();
  submitScore();
});

restartSessionButton.addEventListener("click", () => {
  playUnravelSound();
  resetSession();
});

refreshLeaderboardButton.addEventListener("click", () => {
  playUnravelSound();
  fetchLeaderboard();
});

loadMoreScoresButton.addEventListener("click", () => {
  playUnravelSound();
  visibleScoreCount += leaderboardPageSize;
  renderLeaderboard();
});

focusModeInput.addEventListener("change", updateGameStatus);

focusExitButton.addEventListener("click", () => {
  playUnravelSound();
  focusModeInput.checked = false;
  updateGameStatus();
});

playerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setPlayerName(playerNameInput.value);
});

if (playerName) {
  setPlayerName(playerName);
}

renderCountry(selectedCountry);
buildQuestionDeck();
resetSession();
fetchLeaderboard();
