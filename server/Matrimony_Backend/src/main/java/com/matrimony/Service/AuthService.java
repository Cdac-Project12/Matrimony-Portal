package com.matrimony.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.matrimony.Dao.UserDao;
import com.matrimony.Entity.User;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserDao userDao;

    public ResponseEntity<Object> login(User loginRequest) {
        // Fetch the user based on email
        Optional<User> userOpt = userDao.findByEmail(loginRequest.getEmail());
        
        // Check if user exists
        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        User user = userOpt.get();
        
        // Directly compare the provided password with the stored password
        if (!loginRequest.getPassword().equals(user.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }

        // Return user details (or you can implement JWT token here)
        return ResponseEntity.ok(user);
    }
}
