package com.matrimony.Service;




import org.springframework.stereotype.Service;

import com.matrimony.Dto.ApiResponse;
import com.matrimony.Dto.AuthRequest;
import com.matrimony.Dto.UserLoginDto;
import com.matrimony.Dto.UserRegisterDto;
import com.matrimony.Entity.User;

import jakarta.transaction.Transactional;


public interface UserService {
	User signIn(AuthRequest dto);

	ApiResponse addUser(UserRegisterDto user);

	

}
