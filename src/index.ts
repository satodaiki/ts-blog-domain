import * as readline from 'readline';
import InMemoryDiaryRepository from '@/repositories/inMemory/InMemoryDiaryRepository';
import InMemoryUserRepository from '@/repositories/inMemory/InMemoryUserRepository';
import DiaryApplicationService from '@/application/diary/DiaryApplicationService';
import UserApplicationService from '@/application/user/UserApplicationService';
import UserData from '@/application/user/UserData';
import UserId from '@/domain/models/user/UserId';

/** 
 * NOTE: https://note.kiriukun.com/entry/20200313-interactive-cli-example-with-nodejs 
 */
class Main {

  private static diaryService = new DiaryApplicationService(new InMemoryDiaryRepository());
  private static userService = new UserApplicationService(new InMemoryUserRepository());

  public static async main(): Promise<void> {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    let session = new Map<string, any>();

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
      } else if (line === 'user') {
        const line: string | null = await this.prompt('command?');
        if (line === "signup") {
          const name: string | null = await this.prompt('Please enter your name.');
          const email: string | null = await this.prompt('Please enter your email.');
          const password: string | null = await this.prompt('Please enter your password.');
  
          const userData: UserData = this.userService.signUp(name, email, password);
          session.set("userData", userData);
        } else if (line === "print") {
          const userList = this.userService.getAll();
          console.log(userList);
        } else if (line === "login") {
          const email: string | null = await this.prompt('Please enter your email.');
          const password: string | null = await this.prompt('Please enter your password.');

          try {
            const userData = this.userService.login(email, password);
            session.set("userData", userData);
          } catch(err) {
            console.error(err.message);
          }
        } else if (line === "status") {
          const userData: UserData = session.get("userData");
          console.info("current login: ");
          console.info("  id: ", userData.id);
          console.info("  name: ", userData.name);
        }
      } else if (line === 'exit') {
        break;
      } else {
        const userData: UserData = session.get("userData")
        if (!userData) {
          this.diaryService.register(line);
        } else {
          const userId: UserId = new UserId(userData.id);
          this.diaryService.register(line, userId);
        }
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