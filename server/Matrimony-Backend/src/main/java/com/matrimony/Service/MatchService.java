package com.matrimony.Service;

import java.util.List;

import com.matrimony.Entity.User;

public interface MatchService {

	List<User> findMatches(Long userId);
	
	

}
