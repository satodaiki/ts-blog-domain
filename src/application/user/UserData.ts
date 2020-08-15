import User from "@/domain/models/user/User";

class UserData {
    private _id: string;
    private _name: string;

    constructor(source: User) {
        this._id = source.id.value;
        this._name = source.name.value;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
}

export default UserData;