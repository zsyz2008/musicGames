/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// import { scale, Session, getChordsByProgression, chords } from 'scribbletune/browser';
// import { getToneMonoSynth, samplers } from './sounds';

// console.log(chords())

// const btnStart = document.getElementById('start');
const btnPlay = document.getElementById('play');
const btnReset = document.getElementById('reset');
const btnDrum = document.getElementById('drum');

btnPlay.style.backgroundColor = 'buttonface'

// btnStart.addEventListener('click', () => {
//     Tone.context.resume().then(() => Tone.Transport.start());
// });

window.onload = function(){
    Tone.context.resume().then(() => {
      Tone.Transport.start()
      Tone.getContext().lookAhead = 0
      Tone.Transport.bpm.value = 50;
    });
}

const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/breakbeat.mp3").toDestination();
player.loop = true;
// player.autostart = true;

btnDrum.addEventListener('click', (e) => {
  if(btnDrum.textContent === '播放鼓点'){
    player.start();
    btnDrum.textContent = '停止鼓点'
  }
  else{
    player.stop();
    btnDrum.textContent = '播放鼓点'
  }
});


// const synth = new Tone.Synth().toDestination();
// const seq = new Tone.Sequence((time, note) => {
// 	synth.triggerAttackRelease(note, 0.1, time);
// 	// subdivisions are given as subarrays
// }, ["C4"]);

// const synth = new Tone.PolySynth().toDestination();
// set the attributes across all the voices using 'set'
//synth.set({ detune: -1200 });

// const sampler = new Tone.Sampler({
// 	urls: {
// 		A1: "A1.mp3",
// 		A2: "A2.mp3",
// 	},
// 	baseUrl: "https://tonejs.github.io/audio/casio/",
// 	onload: () => {
// 		sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
// 	}
// }).toDestination();

const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
const synth = new Tone.PolySynth().connect(chorus);

//const plucky = new Tone.PluckSynth().toDestination();


// const session = new Session();
// const kickChannel = session.createChannel({
// 	sample: 'https://scribbletune.com/sounds/kick.wav',
// 	clips: [
// 		{ pattern: 'x' }
// 	]
// });

// const snareChannel = session.createChannel({
// 	sample: 'https://scribbletune.com/sounds/snare.wav',
// 	clips: [
// 		{ pattern: '-x' }
// 	]
// });

// const chChannel = session.createChannel({
// 	sample: 'https://scribbletune.com/sounds/ch.wav',
// 	clips: [
// 		{ pattern: '[xx][xx][xxx][xx]' }
// 	]
// });

// kickChannel.startClip(0);
// snareChannel.startClip(0);
// chChannel.startClip(0);

const tracks = [
  ["C2","C4", "E4", "G4", "B4", "E5"],
  ["C2","C4", "E4", "G4", "B4", "E5"],
  ["B2","D4", "F4", "A4", "C5", "F5"],
  ["A2","D4", "F4", "A4", "C5", "G5"],
  ["G2","D3", "F4", "G4", "B4", "G5"],
  ["G2","D3", "F4", "G4", "B4", "F5"],
  ["F2","A3", "E4", "A4", "C5", "E5"],
  ["G2","B3", "F4", "F4", "G4", "D5"],
  ["A2","C4", "E4", "G4", "A4", "C5"],
  ["A2","C4", "E4", "G4", "A4", "C5"], 
  ["A2","C4", "E4", "G4", "A4", "D5"], 
  ["B2","C4", "E4", "G4", "A4", "E5"],
  ["C2","C4", "E4", "G4", "A4", "E5"],
  ["G2","B3", "D4", "F4", "G4", "D5"],
  ["G2","B3", "D4", "F4", "G4", "D5"],

  ["C2","C4", "E4", "G4", "B4", "E5"],
  ["C2","C4", "E4", "G4", "B4", "E5"],
  ["B2","D4", "F4", "A4", "C5", "F5"],
  ["A2","D4", "F4", "A4", "C5", "G5"],
  ["G2","D3", "F4", "G4", "B4", "G5"],
  ["G2","D3", "F4", "G4", "B4", "F5"],
  ["F2","A3", "E4", "A4", "C5", "E5"],
  ["G2","B3", "F4", "F4", "G4", "D5"],
  ["A2","C4", "E4", "G4", "A4", "C5"],
  ["A2","C4", "E4", "G4", "A4", "C5"], 
  ["A2","C4", "E4", "G4", "A4", "D5"], 
  ["B2","C4", "E4", "G4", "A4", "E5"],
  ["D2","C4", "E4", "F4", "A4", "D5"],
  ["G2","B3", "D4", "F4", "B4", "C5"],
  ["C2","C4", "E4", "G4", "B4", "C5"],

  ["G2","B3", "E4", "G4", "B4", "D5"],
  ["G2","B3", "E4", "G4", "B4", "D5"],
  ["F2","D4", "F4", "A4", "C5", "E5"],
  ["F2","D4", "F4", "A4", "C5", "C5"],
  ["G2","D3", "F4", "G4", "B4", "D5"],
  ["G2","D3", "F4", "G4", "B4", "E5"],
  ["F5"],
  ["G2","B3", "F4", "F4", "G4", "E5"],
  ["A2","C4", "E4", "G4", "A4", "C5"],
  ["A2","C4", "E4", "G4", "A4", "D5"], 
  ["A2","C4", "E4", "G4", "A4", "E5"], 
  ["F5"],
  ["D2","C4", "E4", "F4", "A4", "E5"],
  ["G2","B3", "D4", "F4", "B4", "D5"],
  ["A2","D4", "E4", "G4", "B4", "C5"],
  ["D2","C4", "D4", "F#4", "A4", "D5"],
  ["D2","G3", "B3", "G4"],

  ["C2","C4", "E4", "G4", "B4", "E5"],
  ["C2","C4", "E4", "G4", "B4", "E5"],
  ["B2","D4", "F4", "A4", "C5", "F5"],
  ["A2","D4", "F4", "A4", "C5", "G5"],
  ["G2","D3", "F4", "G4", "B4", "G5"],
  ["G2","D3", "F4", "G4", "B4", "F5"],
  ["F2","A3", "E4", "A4", "C5", "E5"],
  ["G2","B3", "F4", "F4", "G4", "D5"],
  ["A2","C4", "E4", "G4", "A4", "C5"],
  ["A2","C4", "E4", "G4", "A4", "C5"], 
  ["A2","C4", "E4", "G4", "A4", "D5"], 
  ["B2","C4", "E4", "G4", "A4", "E5"],
  ["D2","C4", "E4", "F4", "A4", "D5"],
  ["G2","B3", "D4", "F4", "B4", "C5"],
  ["C2","C4", "E4", "G4", "B4", "C5"],
]  
let activeClipIdx = 0;
let note;
btnPlay.addEventListener('touchstart', (e) => {
   e.preventDefault();
   noteOn();
});

btnPlay.addEventListener('touchend', () => {
  noteOff();
});

btnPlay.addEventListener('mousedown', (e) => {
  e.preventDefault();
  noteOn();
});

btnPlay.addEventListener('mouseup', () => {
 noteOff();
});

// window.addEventListener('keydown', (e) => {
//   e.preventDefault();
//   noteOn();
// });

// window.addEventListener('keyup', () => {
//  noteOff();
// });

function noteOn(){
  note = tracks[activeClipIdx];
  synth.triggerAttack(note);
  btnPlay.style.backgroundColor= 'red'
  //sampler.triggerAttack(note);
}

function noteOff(){
  synth.triggerRelease(note);
  btnPlay.style.backgroundColor = 'buttonface'
  //sampler.triggerAttack(note);
  if(activeClipIdx === tracks.length-1){
    activeClipIdx=0;
  }
  else{
    activeClipIdx++
  }
}

btnReset.addEventListener('click', () => {
  activeClipIdx = 0
})


/***/ })
/******/ ]);