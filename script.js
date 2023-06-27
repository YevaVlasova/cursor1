const students = ["Олександр", "Ігор", "Олена", "Ірина", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділити студентів на пари
function getPairs(students) {
  const pairs = [];
  const maleStudents = [];
  const femaleStudents = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i]; // Студент відповідає індексу в масиві
    const lastLetter = student[student.length - 1]; // Виділяю останню літеру в імені
    if (lastLetter === "а" || lastLetter === "я") { // Визначаю чи ім'я закінчується на літери "а" або "я", бо такі закінчення властиві жіночим іменам, і я про це на лекції написала, а якийсь Микола мабуть в паспорт давно не дивився і забув що він насправді Миколай, і після його зауваження я почала колективно з моїм чоловіком перебирати чоловічі імена щоб зрозуміти яке саме чоловіче ім'я мав на увазі Микола коли сказав що "є і чоловічі імена що закінчуються на А"
      femaleStudents.push(student); // Закидую відсортовані жіночі імена в новий масив для них
    } else {
      maleStudents.push(student); // Імена що не підпадають перевірці потрапляють в цей масив
    }
  }

  const minLength = Math.min(maleStudents.length, femaleStudents.length); // Мінімальна к-сть пар студегтів що можна утворити

  for (let i = 0; i < minLength; i++) {
    const pair = [maleStudents[i], femaleStudents[i]]; // За однаковими індексами з цих двох масивів зіставляю студентів у пари
    pairs.push(pair); // Пари закидую у масив "pairs"
  }

  return pairs;
}

const pairs = getPairs(students);
console.log(pairs);

// 2. Зіставити пари з темами проєктів
function assignThemes(pairs, themes) {
  const pairedThemes = [];

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i]; // Витягую пари за індексом з масиву
    const theme = themes[i % themes.length]; // Призначаю теми проєктів для пар студентів, ділю індекс пари на довжину масиву з темами і отримую залишок від ділення що відповідатиме темі
    const pairedTheme = [pair.join(' і '), theme]; // Об'єдную пари студентів і даю їм тему для опрацювання
    pairedThemes.push(pairedTheme); // Отримую масив з масивів 0_о
  }

  return pairedThemes;
}

const pairedThemes = assignThemes(pairs, themes);
console.log(pairedThemes);

// 3. Зіставити оцінки зі студентами за індексом
function assignMarks(students, marks) {
  const studentMarks = [];

  for (let i = 0; i < students.length; i++) {
    const studentMark = ["студента " + students[i] + " за клопітку працю нагороджено оцінкою " + marks[i]]; // Роздаю оцінки
    studentMarks.push(studentMark); // Масив з масивів :)
  }

  return studentMarks;
}

const studentMarks = assignMarks(students, marks);
console.log(studentMarks);

// 4. Поставити кожній парі випадкову оцінку
function generateRandomMark(pairedThemes) {
  const markedPairs = [];

  for (let i = 0; i < pairedThemes.length; i++) {
    const markedPair = [...pairedThemes[i], generateRandomNumber(1, 5)]; // Все те саме що й до цього
    markedPairs.push(markedPair);
  }

  return markedPairs;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Рандомна оцінка, сподіваюсь мою дзшку не так оцінять хахах
}

const markedPairs = generateRandomMark(pairedThemes);
console.log(markedPairs);