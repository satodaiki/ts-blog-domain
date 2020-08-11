import { v4 as uuidv4 } from 'uuid';
import * as readline from 'readline';
import Diary from '@/domain/models/diary/Diary';
import DiaryId from '@/domain/models/diary/DiaryId';
import DiaryText from '@/domain/models/diary/DiaryText';
import DiaryCreateDate from '@/domain/models/diary/DiaryCreateDate';

let diaries: Array<Diary> = new Array();

process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log("input diary text.");
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
    if (line === "") reader.close();
    const diaryId: DiaryId = new DiaryId(uuidv4());
    const text = new DiaryText(line);
    const now = new DiaryCreateDate(new Date());
    diaries.push(new Diary(diaryId, text, now));
});
reader.on('close', () => {
    console.log(diaries);
});