let start;
let len;
let timer;

self.onmessage = (event) => {
  if (event.data.command === 'start') {
    start = event.data.start;
    len = event.data.len;
    timer = setInterval(() => {
      const time = len - (Date.now() - start);
      if (time <= 0) {
        console.log(time, 222)
        clearInterval(timer);
        self.postMessage({ time: 0 });
      } else {
        self.postMessage({ time });
      }
    }, 10);
  } else if (event.data.command === 'stop') {
    clearInterval(timer);
  }
};