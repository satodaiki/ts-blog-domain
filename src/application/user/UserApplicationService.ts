import IUserRepository from "@/domain/models/user/IUserRepository";
import User from "@/domain/models/user/User";
import UserName from "@/domain/models/user/UserName";
import UserEmail from "@/domain/models/user/UserEmail";
import UserPassword from "@/domain/models/user/UserPassword";
import UserData from "@/application/user/UserData";

class UserApplicationService {
    private readonly userRepository: IUserRepository;
    
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public signUp(name: string, email: string, password: string): UserData {
        const userName = new UserName(name);
        const userEmail = new UserEmail(email);
        const userPassword = new UserPassword(password);
        const user = new User(userName, userEmail, userPassword);

        this.userRepository.save(user);

        return new UserData(user);
    }

    public getAll(): Array<User> | undefined {
        return this.userRepository.findAll();
    }

    public login(email: string, password: string): UserData {
        const users = this.userRepository.findAll();
        if (!users) {
            throw new Error(`There are no users.`);
        }
        const user = users.find(user => user.email.value === email);
        if (!user) {
            throw new Error(`${email}: User does not exist.`);
        }

        if (user.password.value !== new UserPassword(password).value) {
            throw new Error(`Password is incorrect.`);
        }

        return new UserData(user);
    }

    public logout() {
    }
}

export default UserApplicationService;