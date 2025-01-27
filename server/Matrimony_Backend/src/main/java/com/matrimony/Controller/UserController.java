package com.matrimony.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrimony.Entity.User;
import com.matrimony.Service.UserService;
import com.matrimony.Service.AuthService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;

    // Signup API
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signup")
    public ResponseEntity<User> SignUp(@RequestBody User user) {
        return ResponseEntity.ok(userService.addUser(user));
    }

    // Login API
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User loginRequest) {
        // Authenticate the user and return a response
        return authService.login(loginRequest);
    }
}
