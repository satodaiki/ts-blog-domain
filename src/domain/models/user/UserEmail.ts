class UserEmail {
    private _email: string;
    constructor(email: string) {
        if (email.length === 0) {
            throw new Error('userName cannot be registered with zero length.');
        }
        this._email = email;
    }

    public get value() {
        return this._email;
    }
}

export default UserEmail;