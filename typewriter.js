const sentence = 'hello there from lighthouse labs';

const typewriter = (message) => {
  delay = 0
  message += '\n';
  for (const char of message) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay)
    delay += 50;
  }
}

typewriter(sentence);
