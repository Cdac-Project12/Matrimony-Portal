package com.matrimony.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matrimony.Entity.Preferences;

public interface PreferencesDao extends JpaRepository<Preferences, Long>
{
	 Preferences findByUserId(Long userId);
	 
	 List<Preferences> findByAgeAndLocationAndReligionAndCasteAndEducationAndProfessionAndGender(
	            int age, String Location, String religion, String caste,
	            String education, String profession, String gender);
	}


