package co.com.alianza.alianzaapi.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import co.com.alianza.alianzaapi.dto.User;
import co.com.alianza.alianzaapi.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    private static List<User> listUser = new ArrayList<>();

    @Override
    public User saveUser(User user) {

        int position = user.getName().indexOf(" ");

        if (position > 0) {
            user.setSharedKey(
                    user.getName().substring(0, 3).concat(user.getName().substring(position + 1, position + 4)));
        } else {
            user.setSharedKey(user.getName().substring(0, 3));
        }

        listUser.add(user);
        return user;
    }

    @Override
    public List<User> getAll() {
        return listUser;
    }

}
