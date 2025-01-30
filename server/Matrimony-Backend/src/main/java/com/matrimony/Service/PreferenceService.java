package com.matrimony.Service;

import com.matrimony.Dto.ApiResponse;
import com.matrimony.Dto.PreferencesDto;
import com.matrimony.Entity.Preferences;

public interface PreferenceService {

	Preferences savePreferences(PreferencesDto preferencesDTO, Long id);

}
