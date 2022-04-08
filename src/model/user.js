export class UserModel {
    constructor(
        id = 0,
        firstName = "",
        lastName = "",
        avatarURL = "https://thecinetalk.com/wp-content/uploads/2021/07/4rf9n506ymr21.jpg") {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.avatarURL = avatarURL
    }
}