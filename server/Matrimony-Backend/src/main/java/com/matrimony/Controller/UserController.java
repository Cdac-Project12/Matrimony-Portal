package com.matrimony.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrimony.Dto.AuthRequest;
import com.matrimony.Dto.UserRegisterDto;
import com.matrimony.Entity.User;
import com.matrimony.Service.UserService;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;
	

	
	@PostMapping("/login")
	public ResponseEntity<?> userSignIn(@RequestBody 
			AuthRequest dto) {
		System.out.println("in user sign in " + dto);

		return ResponseEntity.ok(userService.signIn(dto));

	}
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> SignUp(@RequestBody UserRegisterDto user){
		System.out.println(user.getGender());
		return ResponseEntity.ok(userService.addUser(user));
	}
	
	 
//	    @PostMapping("/login")
//	    public ResponseEntity<?> login(@RequestBody User user) {
//	        ResponseEntity<?> response = userService.login(user);
//	        
//	        // If login service provides response, return it directly
//	        if (response.getStatusCode().is2xxSuccessful()) {
//	            return response;
//	        }
	        
//	        // Handle unsuccessful login explicitly
//	        return ResponseEntity.status(response.getStatusCode()).body(response.getBody());
//	    }
}
