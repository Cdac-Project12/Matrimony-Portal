package com.matrimony.Service;

import java.util.List;

import com.matrimony.Dto.PreferencesDto;
import com.matrimony.Dto.UserRegisterDto;
import com.matrimony.Entity.User;

public interface MatchService {

	List<UserRegisterDto> getMatches(PreferencesDto preferencesDTO);

	 
	
	

}
