package com.matrimony.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matrimony.Entity.Preferences;

public interface PreferencesDao extends JpaRepository<Preferences, Long>
{
	 Preferences findByUserId(Long userId);

}
