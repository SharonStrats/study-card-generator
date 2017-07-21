export class User {
    constructor(private uname: String, private email: String, private password: String) {
    }
}

export class Login {
    constructor(private email: String, private password: String) {
    }
}