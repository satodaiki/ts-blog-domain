import UserId from "@/domain/models/user/UserId";
import UserName from "@/domain/models/user/UserName";
import UserEmail from "@/domain/models/user/UserEmail";
import UserPassword from "@/domain/models/user/UserPassword";

class User {
    public readonly id: UserId;
    private _name: UserName;
    private _email: UserEmail;
    private _password: UserPassword;
    
    constructor(id: UserId, name: UserName, email: UserEmail, password: UserPassword) {
        this.id = id;
        this._name = name;
        this._email = email;
        this._password = password;
    }
}

export default User;