import User from '@/domain/models/user/User';
import UserId from '@/domain/models/user/UserId';

interface IUserRepository {
    find(id: UserId): User | undefined;
    findAll(): Array<User> | undefined;
    save(user: User): void;
    delete(id: UserId): void;
}

export default IUserRepository;