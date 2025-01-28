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


@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/signup")
	public ResponseEntity<User> SignUp(@RequestBody User user){
		System.out.println(user.getGender());
		return ResponseEntity.ok(userService.addUser(user));
	}
	
	 @CrossOrigin(origins = "http://localhost:3000")
	    @PostMapping("/login")
	    public ResponseEntity<?> login(@RequestBody User user) {
	        ResponseEntity<?> response = userService.login(user);
	        
	        // If login service provides response, return it directly
	        if (response.getStatusCode().is2xxSuccessful()) {
	            return response;
	        }
	        
	        // Handle unsuccessful login explicitly
	        return ResponseEntity.status(response.getStatusCode()).body(response.getBody());
	    }
}
