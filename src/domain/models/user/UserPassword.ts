class UserPassword {
    private _password: string;
    constructor(password: string) {
        if (password.length === 0) {
            throw new Error('userName cannot be registered with zero length.');
        }
        this._password = password;
    }

    public get password() {
        return this._password;
    }
}

export default UserPassword;