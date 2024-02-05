const express = require('express')
const app = express()
let timeSecond = 15;

const numberOfQuestions = 100;

function generateRandomNumber() {
  return Math.floor(Math.round(Math.random() * (numberOfQuestions - 1)));
}

let rNumber = generateRandomNumber();

setInterval(()=>{
  timeSecond--;
  if(timeSecond<1){
    rNumber = generateRandomNumber()
    timeSecond = 15;
    
}
},1000)

// socket.io setup

const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, { pingInterval: 2000, pingTimeout: 5000});


const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html') 
})

const players = {

}


io.on('connection', (socket) => {
  
  console.log('a user connected');
  players[socket.id] = {
    playerPoints: 0
  }

  io.emit("updatePlayers", players)

  socket.on('score', (points) => {
players[socket.id].playerPoints = points;
console.log(players)
rNumber = generateRandomNumber()
timeSecond = 15;
  })


  socket.on('disconnect', (reason) => {
    console.log(reason)
    delete players[socket.id]
    io.emit('uptadePlayers', players)
  })

  console.log(players)
});

const randomQuestion = obj => {
  const randProp = Object.keys(obj)[(rNumber) | 0];
  return obj[randProp].question;
}

const randomImage = obj => {
  const randProp = Object.keys(obj)[(rNumber) | 0];
  return obj[randProp].img;
}

const randomAnswer = obj => {
  const randProp = Object.keys(obj)[(rNumber) | 0];
  return obj[randProp].answer;
}

const randomAnswer0 = obj => {
  const randProp = Object.keys(obj)[(rNumber) | 0];
  return obj[randProp].answer0;
}

const randomAnswer1 = obj => {
  const randProp = Object.keys(obj)[(rNumber) | 0];
  return obj[randProp].answer1;
}

const randomAnswer2 = obj => {
  const randProp = Object.keys(obj)[(rNumber) | 0];
  return obj[randProp].answer2;
}

const randomAnswer3 = obj => {
  const randProp = Object.keys(obj)[(rNumber) | 0];
  return obj[randProp].answer3;
}




const qAnime = "Que anime é esse ?";
const qFilme = "Que filme é esse ?";

const allQuestions = {
    q1: {
        question: qAnime,
        img: "../Images/demonSlayer.png",
        answer: "DEMON SLAYER",
        answer0: "KIMETSU NO YAIBA"
        }
    ,
    q2: {
        question: qFilme,
        img: "../Images/society.jpg",
        answer: "SNOW SOCIETY",
        answer0: "A SOCIEDADE DA NEVE"
        }
    ,
    q3: {
        question: "De que país é essa bandeira ?",
        img: "../Images/guatemalaa.jpg",
        answer: "GUATEMALA"
        }
    ,
    q4: {
        question: "De que país é essa bandeira ?",
        img: "../Images/guiana_francesa.jpg",
        answer: "GUIANA FRANCESA",
        answer0: "FRENCH GUIANA"
        }
    ,
    q5: {
        question: qFilme,
        img: "../Images/taxi driver.webp",
        answer: "TAXI DRIVER"
        }
    ,
    q6: {
        question: "De quem é esse álbum ?",
        img: "../Images/TameImpala.jpeg",
        answer: "TAME IMPALA"
        }
    ,
    q7: {
        question: qFilme,
        img: "../Images/1917.webp",
        answer: "1917"
        }
    ,
    q8: {
        question: qFilme,
        img: "../Images/aQuietPlace.webp",
        answer: "A QUIET PLACE",
        answer0: "UM LUGAR SILENCIOSO"
        }
    ,
    q9: {
        question: qFilme,
        img: "../Images/arrival.jpg",
        answer: "ARRIVAL", 
        answer0: "A CHEGADA"
        }
    ,
    q10: {
        question: qFilme,
        img: "../Images/babyDriver.jpg",
        answer: "BABY DRIVER",
        answer0: "EM RITMO DE FUGA"
        }
    ,
    q11: {
        question: qFilme,
        img: "../Images/coraline.webp",
        answer: "CORALINE"
        }
    ,
    q12: {
        question: qFilme,
        img: "../Images/drive.jpg",
        answer: "DRIVE"
        }
    ,
    q13: {
        question: qFilme,
        img: "../Images/dune.webp",
        answer: "DUNE",
        answer0: "DUNA"
        }
    ,
    q14: {
        question: qFilme,
        img: "../Images/eliteSquad.jpg",
        answer: "ELITE SQUAD",
        answer0: "TROPA DE ELITE"
        }
    ,
    q15: {
        question: qFilme,
        img: "../Images/encantation.jfif",
        answer: "ENCANTATION",
        answer0: "MARCAS DA MALDIÇÃO"
        }
    ,
    q16: {
        question: qFilme,
        img: "../Images/fantasticMrFox.jpg",
        answer: "FANTASTIC MR FOX",
        answer0: "O FANTÁSTICO SR RAPOSO",
        answer1:"FANTASTIC MR. FOX",
        answer2:"O FANTÁSTICO SR. RAPOSO",
        answer3:"O FANTASTICO SR. RAPOSO"
        }
    ,
    q17: {
        question: qFilme,
        img: "../Images/fightclub.jpg",
        answer: "FIGHT CLUB", 
        answer0: "CLUBE DA LUTA"
        }
    ,
    q18: {
        question: qFilme,
        img: "../Images/greenBook.webp",
        answer: "GREEN BOOK"
        }
    ,
    q19: {
        question: qFilme,
        img: "../Images/inglouriousBasterds.jpg",
        answer: "INGLORIOUS BASTERDS",
        answer0: "BASTARDOS INGLÓRIOS"
        }
    ,
    q20: {
        question: qFilme,
        img: "../Images/joker.jpg",
        answer: "JOKER", 
        answer0: "CORINGA",
        answer1: "JOKER 2019"
        }
    ,
    q21: {
        question: qFilme,
        img: "../Images/knivesOut.webp",
        answer: "KNIVES OUT",
        answer0: "ENTRE FACAS E SEGREDOS"
        }
    ,
    q22: {
        question: qFilme,
        img: "../Images/nobody.jpg",
        answer: "NOBODY",
        answer0: "ANÔNIMO"
        }
    ,
    q23: {
        question: qFilme,
        img: "../Images/nope.jpg",
        answer: "NOPE",
        answer0: "NÃO! NÃO OLHE!",
        answer1: "NÃO NÃO OLHE",
        answer2: "NÃO OLHE",
        answer3: "NOPE!"
        }
    ,
    q24: {
        question: qFilme,
        img: "../Images/oppenheimer.webp",
        answer: "OPPENHEIMER"
        }
    ,
    q25: {
        question: qFilme,
        img: "../Images/pearl.jpeg",
        answer: "PEARL"
        }
    ,
    q26: {
        question: qFilme,
        img: "../Images/knivesOut.webp",
        answer: "KNIVES OUT"
        }
    ,
    q27: {
        question: qFilme,
        img: "../Images/prey.webp",
        answer: "PREY",
        answer0:"O PREDADOR",
        answer1:"PREDADOR"
        }
    ,
    q28: {
        question: qFilme,
        img: "../Images/pulpFiction.webp",
        answer: "PULP FICTION"
        }
    ,
    q29: {
        question: qFilme,
        img: "../Images/pussInBoots.png",
        answer:"GATO DE BOTAS 2",
        answer0:"PUSS IN BOOTS 2",
        answer1:"GATO DE BOTAS 2 O ÚLTIMO PEDIDO",
        answer2:"PUSS IN BOOTS THE LAST WISH",
        answer3:"GATO DE BOTAS O ÚLTIMO PEDIDO"
        }
    ,
    q30: {
        question: qFilme,
        img: "../Images/scottPilgrim.webp",
        answer: "SCOTT PILGRIM",
        answer0: "SCOTT PILGRIM CONTRA O MUNDO",
        answer1: "SCOTT PILGRIM VS THE WORLD",
        answer2: "SCOTT PILGRIM VS. THE WORLD"
        }
    ,
    q31: {
        question: qFilme,
        img: "../Images/spiderManAcrossTheSpiderVerse.jpg",
        answer: "SPIDER MAN ACROSS THE SPIDERVERSE",
        answer0: "HOMEM ARANHA ATRAVÉS DO ARANHAVERSO",
        answer1: "HOMEM ARANHA ATRAVES DO ARANHAVERSO",
        answer2: "SPIDER MAN ACROSS THE SPIDER VERSE"
        }
    ,
    q32: {
        question: qFilme,
        img: "../Images/theCreator.jpg",
        answer: "THE CREATOR",
        answer0: "RESISTÊNCIA"
        }
    ,
    q33: {
        question: qFilme,
        img: "../Images/theGrandHotelBudapest.webp",
        answer: "THE GRAND HOTEL BUDAPEST",
        answer0: "O GRANDE HOTEL BUDAPESTE"
        }
    ,
    q34: {
        question: qFilme,
        img: "../Images/theMenu.jpg",
        answer: "THE MENU",
        answer0:"O MENU",
        answer1:"MENU"
        }
    ,
    q35: {
        question: qFilme,
        img: "../Images/thePlatform.webp",
        answer: "THE PLATFORM",
        answer0:"O POÇO",
        answer1:"POÇO"
        }
    ,
    q36: {
        question: qFilme,
        img: "../Images/theWhale.jpg",
        answer: "THE WHALE", 
        answer0:"A BALEIA",
        answer1:"BALEIA"
        }
    ,
    q37: {
        question: qFilme,
        img: "../Images/up.jpg",
        answer: "UP",
        answer0: "UP ALTAS AVENTURAS"
        }
    ,
    q38: {
        question: qFilme,
        img: "../Images/theWitch.webp",
        answer: "THE WITCH",
        answer0: "A BRUXA"
        }
    ,
    q39: {
        question: qFilme,
        img: "../Images/us.webp",
        answer: "US",
        answer0: "NÓS",
        answer1: "NOS"
        }
    ,
    q40: {
        question: qFilme,
        img: "../Images/x.webp",
        answer: "X",
        answer0: "X A MARCA DA MORTE"
        }
    ,
    q41: {
        question: qAnime,
        img: "../Images/86.jpg",
        answer: "86"
        }
    ,
    q42: {
        question: qAnime,
        img: "../Images/angelBeats.webp",
        answer: "ANGEL BEATS"
        }
    ,
    q43: {
        question: qAnime,
        img: "../Images/angelsOfDeath.jpg",
        answer: "ANGELS OF DEATH"
        }
    ,
    q44: {
        question: qAnime,
        img: "../Images/attackOnTitan.jpg",
        answer: "ATTACK ON TITAN",  
        answer0: "SHINGEKI NO KYOJIN",
        answer1: "AOT"
        }
    ,
    q45: {
        question: qAnime,
        img: "../Images/beyondTheBoundary.webp",
        answer: "BEYOND THE BOUNDARY"
        }
    ,
    q46: {
        question: qAnime,
        img: "../Images/bocchiTheRock.jpg",
        answer: "BOCCHI THE ROCK"
        }
    ,
    q47: {
        question: qAnime,
        img: "../Images/bungoStrayDogs.png",
        answer: "BUNGO STRAY DOGS"
        }
    ,
    q48: {
        question: qAnime,
        img: "../Images/callOfTheNight.jpg",
        answer: "CALL OF THE NIGHT"
        }
    ,
    q49: {
        question: qAnime,
        img: "../Images/chainsawMan.jpg",
        answer: "CHAINSAWMAN",
        answer0: "CHAINSAW MAN"
        }
    ,
    q50: {
        question: qAnime,
        img: "../Images/charlotte.png",
        answer: "CHARLOTTE"
        }
    ,
    q51: {
        question: qAnime,
        img: "../Images/classroomOfTheElite.webp",
        answer: "CLASSROOM OF THE ELITE", 
        answer0: "CLASSROOM OF ELITE"
        }
    ,
    q52: {
        question: qAnime,
        img: "../Images/cowboyBepop.jpg",
        answer: "COWBOYBEPOP",
        answer0: "COWBOY BEPOP"
        }
    ,
    q53: {
        question: qAnime,
        img: "../Images/cyberpunkEdgerunners.jpg",
        answer: "CYBERPUNK EDGERUNNERS"
        }
    ,
    q54: {
        question: qAnime,
        img: "../Images/deathNote.jfif",
        answer: "DEATH NOTE"
        }
    ,
    q55: {
        question: qAnime,
        img: "../Images/devilManCryBaby.jpg",
        answer: "DEVIL MAN CRY BABY",   
        answer0:"DEVILMAN CRY BABY",
        answer1:"DEVILMAN CRYBABY",
        answer2:"DEVIL MAN CRYBABY"
        }
    ,
    q56: {
        question: qAnime,
        img: "../Images/erased.jpg",
        answer: "ERASED"
        }
    ,
    q57: {
        question: qAnime,
        img: "../Images/evangelion.png",
        answer: "EVANGELION"
        }
    ,
    q58: {
        question: qAnime,
        img: "../Images/fireForce.png",
        answer: "FIRE FORCE"
        }
    ,
    q59: {
        question: qAnime,
        img: "../Images/fullMetalAlchemist.png",
        answer: "FULL METAL ALCHEMIST",
        answer0: "FULLMETAL ALCHEMIST"
        }
    ,
    q60: {
        question: qAnime,
        img: "../Images/girlsLastTour.png",
        answer: "GIRLS LAST TOUR"
        }
    ,
    q61: {
        question: qAnime,
        img: "../Images/greatPretender.webp",
        answer: "GREAT PRETENDER"
        }
    ,
    q62: {
        question: qAnime,
        img: "../Images/howlsMovingCastle.jpg",
        answer: "HOWLS MOVING CASTLE",
        answer0: "HOWL'S MOVING CASTLE"
        }
    ,
    q63: {
        question: qAnime,
        img: "../Images/hunterxhunter.jpg",
        answer: "HXH",
        answer0: "HUNTERXHUNTER",
        answer1: "HUNTER X HUNTER"
        }
    ,
    q64: {
        question: qAnime,
        img: "../Images/iWantToEatYourPancreas.jpg",
        answer: "I WANT TO EAT YOUR PANCREAS"
        }
    ,
    q65: {
        question: qAnime,
        img: "../Images/jujutsuKaisen.jpg",
        answer: "JUJUTSU KAISEN"
        }
    ,
    q66: {
        question: qAnime,
        img: "../Images/kakegurui.png",
        answer: "KAKEGURUI"
        }
    ,
    q67: {
        question: qAnime,
        img: "../Images/killLaKill.webp",
        answer: "KILL LA KILL"
        }
    ,
    q68: {
        question: qAnime,
        img: "../Images/kinosJourney.jpg",
        answer: "KINOS JOURNEY",
        answer0: "KINO'S JOURNEY"
        }
    ,
    q69: {
        question: qAnime,
        img: "../Images/littleWitchAcademia.png",
        answer: "LITTLE WITCH ACADEMIA"
        }
    ,
    q70: {
        question: qAnime,
        img: "../Images/lycorisRecoil.webp",
        answer: "LYCORIS RECOIL"
        }
    ,
    q71: {
        question: qAnime,
        img: "../Images/madeInAbyss.png",
        answer: "MADE IN ABYSS"
        }
    ,
    q72: {
        question: qAnime,
        img: "../Images/madokaMagica.jfif",
        answer: "PUELLA MAGI MADOKA MAGICA",
        answer0: "MADOKA MAGICA"
        }
    ,
    q73: {
        question: qAnime,
        img: "../Images/magi.jpe",
        answer: "MAGI: THE LABYRINTH OF MAGIC",
        answer0: "MAGI",
        answer1: "MAGI THE LABYRINTH OF MAGIC"
        }
    ,
    q74: {
        question: qAnime,
        img: "../Images/monster.jpg",
        answer: "MONSTER"
        }
    ,
    q75: {
        question: qAnime,
        img: "../Images/mushokuTensei.png",
        answer: "MUSHOKU TENSEI"
        }
    ,
    q76: {
        question: qAnime,
        img: "../Images/noGameNoLife.png",
        answer: "NO GAME NO LIFE"
        }
    ,
    q77: {
        question: qAnime,
        img: "../Images/oddTaxi.jpg",
        answer: "ODD TAXI"
        }
    ,
    q78: {
        question: qAnime,
        img: "../Images/onePunchMan.jpg",
        answer: "ONE PUNCH MAN"
        }
    ,
    q79: {
        question: qAnime,
        img: "../Images/princessMononoke.webp",
        answer: "PRINCESS MONONOKE",
        answer0: "PRINCESA MONONOKE"
        }
    ,
    q80: {
        question: qAnime,
        img: "../Images/promisedNeverland.jpg",
        answer: "PROMISED NEVERLAND"
        }
    ,
    q81: {
        question: qAnime,
        img: "../Images/reZero.png",
        answer:"RE ZERO",
        answer0: "REZERO"
        }
    ,
    q82: {
        question: qAnime,
        img: "../Images/silentVoice.webp",
        answer: "SILENT VOICE", 
        answer0: "A VOZ DO SILÊNCIO",
        answer1: "KOE NO KATACHI"
        }
    ,
    q83: {
        question: qAnime,
        img: "../Images/spyFamily.jpg",
        answer: "SPY X FAMILY",
        answer0: "SPY FAMILY"
        }
    ,
    q84: {
        question: qAnime,
        img: "../Images/steinsGate.webp",
        answer: "STEINS GATE"
        }
    ,
    q85: {
        question: qAnime,
        img: "../Images/summerTimeRendering.png",
        answer: "SUMMER TIME RENDERING"
        }
    ,
    q86: {
        question: qAnime,
        img: "../Images/swordArtOnline.jpg",
        answer: "SWORD ART ONLINE",
        answer0: "SAO"
        }
    ,
    q87: {
        question: qAnime,
        img: "../Images/taktOpDestiny.jpg",
        answer: "TAKT OP DESTINY"
        }
    ,
    q88: {
        question: qAnime,
        img: "../Images/terrorInResonance.jpg",
        answer: "TERROR IN RESONANCE"
        }
    ,
    q89: {
        question: qAnime,
        img: "../Images/tokyoRevengers.jpg",
        answer: "TOKYO REVENGERS"
        }
    ,
    q90: {
        question: qAnime,
        img: "../Images/towerOfGod.jpg",
        answer: "TOWER OF GOD"
        }
    ,
    q91: {
        question: qAnime,
        img: "../Images/towerOfGod1.jpg",
        answer: "TOWER OF GOD"
        }
    ,
    q92: {
        question: qAnime,
        img: "../Images/toYourEternity.jpg",
        answer: "TO YOUR ETERNITY"
        }
    ,
    q93: {
        question: qAnime,
        img: "../Images/vinlandSaga.jpg",
        answer: 'VINLAND SAGA'
        }
    ,
    q94: {
        question: qAnime,
        img: "../Images/violetEvergarden.png",
        answer: "VIOLET EVERGARDEN"
        }
    ,
    q95: {
        question: qAnime,
        img: "../Images/wonderEggPriority.png",
        answer: "WONDER EGG PRIORITY"
        }
    ,
    q96: {
        question: qAnime,
        img: "../Images/wonderEggPriority1.jpg",
        answer: "WONDER EGG PRIORITY"
        }
    ,
    q97: {
        question: qAnime,
        img: "../Images/wonderEggPriority2.webp",
        answer: "WONDER EGG PRIORITY"
        }
    ,
    q98: {
        question: qAnime,
        img: "../Images/x.webp",
        answer: "X",
        answer0: "X A MARCA DA MORTE"
        }
    ,
    q99: {
        question: qAnime,
        img: "../Images/yourLieInApril.jpg",
        answer: "YOUR LIE IN APRIL"
        }
    ,
    q100: {
        question: qAnime,
        img: "../Images/yourLieInApril1.png",
        answer: "YOUR LIE IN APRIL"
        }
    ,
    }

    
    setInterval(() => {
      io.emit("fds", timeSecond)
      io.emit("r", randomQuestion(allQuestions), randomImage(allQuestions), randomAnswer(allQuestions), randomAnswer0(allQuestions), randomAnswer1(allQuestions),randomAnswer2(allQuestions),randomAnswer3(allQuestions))
    },15)
    
    server.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    
    console.log("server loaded")

