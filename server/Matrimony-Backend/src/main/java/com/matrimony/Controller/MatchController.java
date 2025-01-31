package com.matrimony.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrimony.Dto.PreferencesDto;
import com.matrimony.Dto.UserRegisterDto;
import com.matrimony.Entity.User;
import com.matrimony.Service.MatchService;

@RestController
@RequestMapping("/user/matches")
@CrossOrigin(origins = "http://localhost:3000")
public class MatchController {
	 @Autowired
	    private MatchService matchService;
	 
	
	

	     // Endpoint to get matches based on PreferencesDTO
	     @PostMapping("/find/{Id}")
	     public List<UserRegisterDto> getMatches(@PathVariable Long Id) {
	         return matchService.getMatches(Id);
	     }
	     
//	     @GetMapping("/{userId}")
//	     public List<UserRegisterDto> getMatches(@PathVariable Long userId) {
//	         return matchService.getMatchesByUserId(userId);
//	     }
//	 

  


	   


}
