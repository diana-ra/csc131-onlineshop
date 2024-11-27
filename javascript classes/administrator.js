class Administrator {
    // Constructor
    constructor(adminName, email) {
        this.adminName = adminName;
        this.email = email;
    }

    // Getters & Setters
    getAdminName() {
        return this.adminName;
    }

    setAdminName(adminName) {
        this.adminName = adminName;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }
}