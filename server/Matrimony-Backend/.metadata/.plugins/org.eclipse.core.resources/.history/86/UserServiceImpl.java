package com.matrimony.Service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matrimony.CustomExceptions.AuthenticationException;
import com.matrimony.Dao.UserDao;
import com.matrimony.Dto.ApiResponse;
import com.matrimony.Dto.AuthRequest;
import com.matrimony.Dto.UserLoginDto;
import com.matrimony.Dto.UserRegisterDto;
import com.matrimony.Entity.User;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper modelMapper;

	

	@Override
	public User signIn(AuthRequest dto) {
		User userEntity  = userDao.
				findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(() -> 
				new AuthenticationException("Invalid Email or password !!!!!"));
		//user entity : persistent -> dto
		return modelMapper.map(userEntity, User.class);
	}



	@Override
	public ApiResponse addUser(UserRegisterDto user) {
		User userEntity = modelMapper.map(user, User.class);
		User persistentUser = userDao.save(userEntity);
		// TODO Auto-generated method stub
		return new ApiResponse("added new user with is " + persistentUser.getId());
	}

}
