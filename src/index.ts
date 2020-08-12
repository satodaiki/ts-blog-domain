import * as readline from 'readline';
import InMemoryDiaryRepository from '@/repositories/inMemory/InMemoryDiaryRepository';
import DiaryApplicationService from '@/application/diary/DiaryApplicationService';

/** 
 * NOTE: https://note.kiriukun.com/entry/20200313-interactive-cli-example-with-nodejs 
 */
class Main {

  private static diaryService = new DiaryApplicationService(new InMemoryDiaryRepository());

  public static async main(): Promise<void> {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    console.log("System start.");
  
    while (true) {
      const line: string | null = await this.prompt('command?');
      if (line === null) continue;

      if (line === 'print') {
        const diaryList = this.diaryService.getAll();
        console.log(diaryList);
      } else if (line === 'delete') {
        const diaryList = this.diaryService.getAll();
        console.log(diaryList);
        const id: string | null = await this.prompt('Which one to erase.');
        if (id === null) continue;
        this.diaryService.delete(id);
        console.log("delete success");
      } else if (line === 'exit') {
        break;
      } else {
        this.diaryService.register(line);
      }
    }
  }

  private static async prompt(msg: string) {
    console.info(msg);
    const answer = await this.question('> ');
    return answer.trim();
  }
  
  private static async question (question: string): Promise<string> {
    const readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return new Promise((resolve) => {
      readlineInterface.question(question, (answer) => {
        resolve(answer);
        readlineInterface.close();
      });
    });
  }
};

(async () => {
  await Main.main();
})();