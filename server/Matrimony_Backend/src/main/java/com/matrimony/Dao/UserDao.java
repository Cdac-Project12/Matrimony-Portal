package com.matrimony.Dao;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matrimony.Entity.User;


public interface UserDao extends JpaRepository<User, Long>{
	Optional<User> findByEmail(String email); 
}
