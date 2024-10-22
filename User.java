import java.util.Date;

public class User {
    // Fields
    private String userID;
    private String password;
    private boolean loginStatus;
    private Date registerDate;

    // Constructor
    public User(String userID, String password, boolean loginStatus, Date registerDate) {
        this.userID = userID;
        this.password = password;
        this.loginStatus = loginStatus;
        this.registerDate = registerDate;
    }

    // Getter & Setter Methods
    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean getLoginStatus() {
        return loginStatus;
    }

    public void setLoginStatus(boolean loginStatus) {
        this.loginStatus = loginStatus;
    }

    public Date getRegisterDate() {
        return registerDate;
    }
}