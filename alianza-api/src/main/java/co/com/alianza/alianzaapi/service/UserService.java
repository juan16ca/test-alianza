package co.com.alianza.alianzaapi.service;

import java.util.List;

import co.com.alianza.alianzaapi.dto.User;

public interface UserService {
    
    public User saveUser(User user);
    public List<User> getAll();
}
