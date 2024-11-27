const db = require('./db');

class User {
    // Constructor
    constructor(userID, password, loginStatus, registerDate) {
        this.userID = userID;
        this.password = password;
        this.loginStatus = loginStatus;
        this.registerDate = new Date(registerDate);
    }

    // Getter & Setter Methods
    getUserID() {
        return this.userID;
    }

    setUserID(userID) {
        this.userID = userID;
    }

    setPassword(password) {
        this.password = password;
    }

    getLoginStatus() {
        return this.loginStatus;
    }

    setLoginStatus(loginStatus) {
        this.loginStatus = loginStatus;
    }

    getRegisterDate() {
        return this.registerDate;
    }

    // Custom Methods
    static verifyLogin(email, password) {
        return new Promise((resolve, reject) => {
            db.get(
                'SELECT * FROM Users WHERE email = ? AND password = ?',
                [email, password],
                (err, row) => {
                    if (err) {
                        return reject(err);
                    }
                    if (row) {
                        db.run('UPDATE Users SET loginStatus = 1 WHERE email = ?', [email], (updateErr) => {
                            if (updateErr) {
                                return reject(updateErr);
                            }
                            resolve(true);
                        });
                    } else {
                        resolve(false);
                    }
                }
            );
        });
    }

    static logout(email) {
        return new Promise((resolve, reject) => {
            db.run('UPDATE Users SET loginStatus = 0 WHERE email = ?', [email], (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(true);
            });
        });
    }
}