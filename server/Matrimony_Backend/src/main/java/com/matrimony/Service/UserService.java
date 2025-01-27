package com.matrimony.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matrimony.Dao.UserDao;
import com.matrimony.Entity.User;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserDao userDao;
	
	public User addUser(User user) {
		return userDao.save(user);
	}
}
