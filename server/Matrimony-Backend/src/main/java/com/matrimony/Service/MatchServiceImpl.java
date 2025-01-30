package com.matrimony.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matrimony.Dao.MatchDao;
import com.matrimony.Dao.PreferencesDao;
import com.matrimony.Dto.PreferencesDto;
import com.matrimony.Dto.UserRegisterDto;
import com.matrimony.Entity.Preferences;
import com.matrimony.Entity.User;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class MatchServiceImpl implements MatchService {
	
	@Autowired
	private MatchDao matchDao;
	@Autowired
	private PreferencesDao preferencesDao;
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public List<UserRegisterDto> getMatches(PreferencesDto preferencesDTO) {
		// TODO Auto-generated method stub
		List<User> matchedUsers = matchDao.findMatchesByPreferences(
	            preferencesDTO.getAge(),
	           
	            preferencesDTO.getCaste(),
	            preferencesDTO.getGender(),
	            preferencesDTO.getLocation(),
	            preferencesDTO.getProfession(),
	            preferencesDTO.getReligion()
	        );
		 return matchedUsers.stream()
	                .map(user -> modelMapper.map(user, UserRegisterDto.class))
	                .collect(Collectors.toList());
	}
	
	@Override
	public List<UserRegisterDto> getMatchesByUserId(Long userId) {
	    // Fetch Preferences entity from the database
	    Preferences preferences = preferencesDao.findByUserId(userId);
	    
	    if (preferences == null) {
	        return Collections.emptyList(); // Return an empty list if preferences are not set
	    }

	    // Convert Preferences entity to PreferencesDto
	    PreferencesDto preferencesDTO = modelMapper.map(preferences, PreferencesDto.class);

	    // Fetch matching users based on preferences
	    List<User> matchedUsers = matchDao.findMatchesByPreferences(
	        preferencesDTO.getAge(),
	        preferencesDTO.getCaste(),
	        preferencesDTO.getGender(),
	        preferencesDTO.getLocation(),
	        preferencesDTO.getProfession(),
	        preferencesDTO.getReligion()
	    );

	    // Convert matched User entities to UserRegisterDto
	    return matchedUsers.stream()
	            .map(user -> modelMapper.map(user, UserRegisterDto.class))
	            .collect(Collectors.toList());
	}

}
	
	
	


//	public List<User> getMatches(Long userId) {
//		// TODO Auto-generated method stub
//		return null;
//	}
	
	

//	@Override
//	public List<User> findMatches(Long userId) {
//		 Preferences preferences = preferencesRepository.findByUserId(userId);
//
//	        return userRepository.findByAgeBetweenAndLocationAndReligion(
//	            preferences.getMinAge(),
//	            preferences.getMaxAge(),
//	            preferences.getPreferredLocation(),
//	            preferences.getPreferredReligion()
//	        );
//		return null;
//	}

