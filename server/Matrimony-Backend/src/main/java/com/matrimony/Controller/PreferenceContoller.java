package com.matrimony.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.matrimony.Dto.PreferencesDto;
import com.matrimony.Entity.Preferences;
import com.matrimony.Service.PreferenceService;

@RestController
@RequestMapping("/users/preferences")
@CrossOrigin(origins = "http://localhost:3000")
public class PreferenceContoller {
	@Autowired
	private PreferenceService preferenceService;
	
	 @PostMapping("/save/{id}")
	    public ResponseEntity<Preferences> savePreferences(@RequestBody PreferencesDto preferencesDTO,@PathVariable Long id) {
	        Preferences savedPreferences = preferenceService.savePreferences(preferencesDTO,id);
	        return ResponseEntity.ok(savedPreferences);
	    }
	
	

}
