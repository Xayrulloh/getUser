function getUserProperty (number) {
    user = []
    id = []
    email = []
    password = []
    users = []

    for (son = 1; son <= number; son++) {
        user.push(`${son}user`)
    }
    for (son = 1; son <= number; son++) {
        id.push(`${son}${Date.now()}`)
    }
    for (son = 1; son <= number; son++) {
        email.push(`${son}@gmail.com`)
    }
    for (son = 1; son <= number; son++) {
        password.push(`${son}${son}${Date.now()}`)
    }
    for (son = 0; son < number; son++) {
        userr = {
            user: user[son],
            id: id[son],
            email: email[son],
            password: password[son],
        }
        users.push(userr)
    }
    return users
}
let userss = getUserProperty(5)
console.log(userss);