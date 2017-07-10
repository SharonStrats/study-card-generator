export class User {
    constructor(private name: String, private email: String, private password: String) {
    }
}

export class Login {
    constructor(private email: String, private password: String) {
    }
}