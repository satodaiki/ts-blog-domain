import * as uuid from "uuid";
import UserId from "@/domain/models/user/UserId";
import UserName from "@/domain/models/user/UserName";
import UserEmail from "@/domain/models/user/UserEmail";
import UserPassword from "@/domain/models/user/UserPassword";
import UserCreateDate from "@/domain/models/user/UserCreateDate";

class User {
    public readonly id: UserId;
    private _name: UserName;
    private _email: UserEmail;
    private _password: UserPassword;
    private _createDate: UserCreateDate;
    
    constructor(name: UserName, email: UserEmail, password: UserPassword) {
        this.id = new UserId(uuid.v4());
        this._name = name;
        this._email = email;
        this._password = password;
        this._createDate = new UserCreateDate(new Date());
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }
}

export default User;