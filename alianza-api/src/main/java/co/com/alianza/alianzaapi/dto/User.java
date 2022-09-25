package co.com.alianza.alianzaapi.dto;

public class User {

    private String sharedKey;
    private String name;
    private String phone;
    private String mail;
    private String dateSave;

    public User(String sharedKey, String name, String phone, String mail, String dateSave) {
        this.sharedKey = sharedKey;
        this.name = name;
        this.phone = phone;
        this.mail = mail;
        this.dateSave = dateSave;
    }

    public String getSharedKey() {
        return sharedKey;
    }

    public void setSharedKey(String sharedKey) {
        this.sharedKey = sharedKey;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getDateSave() {
        return dateSave;
    }

    public void setDateSave(String dateSave) {
        this.dateSave = dateSave;
    }

}
