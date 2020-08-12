import * as readline from 'readline';
import InMemoryDiaryRepository from '@/repositories/inMemory/InMemoryDiaryRepository';
import DiaryApplicationService from '@/application/diary/DiaryApplicationService';

const diaryService = new DiaryApplicationService(new InMemoryDiaryRepository());

process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log("system start.");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
    if (line === "exit") {
      reader.close();
    } else if (line === "print") {
      const diaryList = diaryService.getAll();
      console.log(diaryList);
    } else {
      diaryService.register(line);
    }
});
reader.on('close', () => {
    console.log("system exit.");
});
