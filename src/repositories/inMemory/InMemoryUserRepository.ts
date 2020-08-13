import IUserRepository from "@/domain/models/user/IUserRepository";
import UserId from "@/domain/models/user/UserId";
import User from "@/domain/models/user/User";

class InMemoryUserRepository implements IUserRepository {

    private users = new Array<User>();

    find(id: UserId): User | undefined {
        return this.users.find(user => user.id === id);
    }
    findAll(): Array<User> | undefined {
        return this.users;
    }
    save(user: User): void {
        this.users.push(user);
    }
    delete(id: UserId): void {
        const targetIndex: number = this.users.findIndex(user => user.id === id);
        this.users.splice(targetIndex, 1);
    }
}