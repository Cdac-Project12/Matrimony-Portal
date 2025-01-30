package com.matrimony.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.matrimony.Dao.UserDao;
import com.matrimony.Entity.User;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserDao userDao;
	
	
	public User addUser(User user) {
		return userDao.save(user);
	}
	
	public ResponseEntity<?> login(User loginRequest) {
		System.out.println(loginRequest.getEmail());
        Optional<User> userOpt = userDao.findByEmail(loginRequest.getEmail());

        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found with the provided email.");
        }

        User user = userOpt.get();

        // Password comparison (Consider using hashing like BCrypt for secure comparison)
        if (!loginRequest.getPassword().equals(user.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid credentials. Please check your password.");
        }

        // If login is successful, return the user object or a success response
        return ResponseEntity.ok(user);
    }
}
