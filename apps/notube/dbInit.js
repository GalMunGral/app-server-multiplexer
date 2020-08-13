function getRandomInt(max = 1000) {
  return Math.floor(Math.random() * max);
}
function getRandomTime() {
  const now = new Date().getTime();
  return new Date(now * Math.random());
}

function getRandomString(wordCount) {
  wordCount = wordCount || Math.floor(Math.random() * 10);
  const charSets = [
    ['a', 'e', 'i', 'o', 'u', 'y', 'ay', 'au', 'aw', 'ai',
      'eu', 'ei', 'oo', 'oa', 'oe', 'oi', 'ou', 'ui', 'ue', 'ij'],
    'bbbcdddfffggghhhjkkkllmmmmnnnnppqrrrssssttttvwwwxyz'
  ];
  let sentence  = '';
  for (let i = 0; i < wordCount; i++) {
    // Generate one word
    const wordLength = Math.floor(Math.random() * 5) + 3;
    let isConsonant = true;
    for (let j = 0; j < wordLength; j++) {
      let charSet = charSets[isConsonant ? 1 : 0]
      let index = Math.floor(Math.random() * charSet.length);
      let char = charSet[index]
      sentence += char;
      isConsonant = !isConsonant;
    }
    sentence += ' ';
  }
  return sentence.trim();
}

function generateComment() {
  return {
    author: getRandomString(2),
    timestamp: getRandomTime(),
    content: getRandomString(40),
    likes: getRandomInt()
  }  
}

function generateDocuments() {
  return Array(7).fill(0).map(() => {
    let document = generateComment();
    if (Math.random() > 0.5) {
      let replyCount = getRandomInt(10) + 1;
      document.replies = Array(replyCount).fill(0).map(() => {
        return generateComment();
      })
    }
    return document;
  })
}

const conn = new Mongo(); // @ localhost:<default port>
db = conn.getDB('test');
if (db.getCollectionNames().includes('comments')) {
  db.comments.remove({});
}
db.comments.insertMany(generateDocuments());
// Test
let cursor = db.comments.find();
while (cursor.hasNext()) {
  printjson(cursor.next());
}
