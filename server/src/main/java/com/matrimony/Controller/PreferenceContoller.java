package com.matrimony.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.matrimony.Dto.PreferencesDto;
import com.matrimony.Dto.UserRegisterDto;
import com.matrimony.Entity.Preferences;
import com.matrimony.Entity.User;
import com.matrimony.Service.PreferenceService;

@RestController
@RequestMapping("/user/preferences")
@CrossOrigin(origins = "http://localhost:3000")
public class PreferenceContoller {
	@Autowired
	private PreferenceService preferenceService;
	
	 @PostMapping("/save/{id}")
	    public ResponseEntity<Preferences> savePreferences(@RequestBody PreferencesDto preferencesDTO,@PathVariable Long id) {
	        Preferences savedPreferences = preferenceService.savePreferences(preferencesDTO,id);
	        return ResponseEntity.ok(savedPreferences);
	    }
	 
//	 
//	 @GetMapping("/matches/{userId}")
//	    public ResponseEntity<?> getMatchingUsers(@PathVariable Long userId) {
//	        List<UserRegisterDto> matchingUsers = preferenceService.findMatchingUsers(userId);
//	        return ResponseEntity.ok(matchingUsers);
//	    }
//	
//	

}
