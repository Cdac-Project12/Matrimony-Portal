package com.matrimony.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matrimony.Dao.PreferencesDao;
import com.matrimony.Dao.UserDao;
import com.matrimony.Dto.ApiResponse;
import com.matrimony.Dto.PreferencesDto;
import com.matrimony.Dto.UserRegisterDto;
import com.matrimony.Entity.Preferences;
import com.matrimony.Entity.User;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PreferenceServiceImpl implements PreferenceService {
	
	@Autowired
	private PreferencesDao preferenceDao;
	
	@Autowired
	private UserDao userDao;

	@Override
	public Preferences savePreferences(PreferencesDto preferencesDTO,Long id) {
		User user = userDao.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Preferences preferences = new Preferences();
        preferences.setAge(preferencesDTO.getAge());
        preferences.setLocation(preferencesDTO.getLocation());
        preferences.setReligion(preferencesDTO.getReligion());
        preferences.setCaste(preferencesDTO.getCaste());
        preferences.setEducation(preferencesDTO.getEducation());
        preferences.setProfession(preferencesDTO.getProfession());
        preferences.setGender(preferencesDTO.getGender());
        preferences.setUser(user);

        return preferenceDao.save(preferences);
    }
	
	
	@Override
	public List<UserRegisterDto> findMatchingUsers(Long userId) {
	    Preferences preferences = preferenceDao.findByUserId(userId);
	    if (preferences == null) {
	        throw new RuntimeException("Preferences not found for user");
	    }

	    List<Preferences> matchingPreferences = preferenceDao.findByAgeAndLocationAndReligionAndCasteAndEducationAndProfessionAndGender(
	            preferences.getAge(),
	            preferences.getLocation(),
	            preferences.getReligion(),
	            preferences.getCaste(),
	            preferences.getEducation(),
	            preferences.getProfession(),
	            preferences.getGender()
	    );

	    return matchingPreferences.stream()
	            .map(pref -> {
	                User user = pref.getUser();
	                UserRegisterDto userDto = new UserRegisterDto();
	                userDto.setId(user.getId());
	                userDto.setFirstName(user.getFirstName());
	                userDto.setLastName(user.getLastName());
	                userDto.setAge(user.getAge());
	                userDto.setLocation(user.getAddress());
	                userDto.setProfession(user.getProfession());
	                return userDto;
	            })
	            .collect(Collectors.toList());
	}
}

	


