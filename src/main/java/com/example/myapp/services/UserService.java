package com.example.myapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.myapp.models.User;
import com.example.myapp.repositories.UserRepository;

@RestController
public class UserService{
	@Autowired
	UserRepository rep;
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) rep.findAll();
	}
	
}