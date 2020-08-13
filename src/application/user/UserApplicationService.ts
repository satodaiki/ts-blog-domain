import IUserRepository from "@/domain/models/user/IUserRepository";

class UserApplicationService {
    private readonly userRepository: IUserRepository;
    
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public signUp() {
    }
    
    public login() {
    }
    
    public logout() {
    }

    public loginGuest() {
    }
}

export default UserApplicationService;