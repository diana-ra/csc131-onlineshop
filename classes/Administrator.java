public class Administrator {
    // Fields
    private String adminName;
    private String email;

    // Constructor
    public Administrator(String adminName, String email) {
        this.adminName = adminName;
        this.email = email;
    }

    // Getter & Setter Methods
    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
