package com.accenture.web.controllers;

import java.security.NoSuchAlgorithmException;

import java.security.Principal;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.web.config.JWTTokenHelper;
import com.accenture.web.entities.Item;
import com.accenture.web.entities.User;
import com.accenture.web.requests.AuthenticationRequest;
import com.accenture.web.responses.LoginResponse;
import com.accenture.web.responses.UserInfo;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	JWTTokenHelper jWTTokenHelper;

	@Autowired
	private UserDetailsService userDetailsService;

	@PostMapping("/auth/login")
	public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest)
			throws InvalidKeySpecException, NoSuchAlgorithmException {

		final Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUserName(),
						authenticationRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		User user = (User) authentication.getPrincipal();
		String jwtToken = jWTTokenHelper.generateToken(user.getUsername());

		LoginResponse response = new LoginResponse();
		response.setToken(jwtToken);

		return ResponseEntity.ok(response);
	}

	@GetMapping("/auth/userinfo")
	public ResponseEntity<?> getUserInfo(Principal user) {
		User userObj = (User) userDetailsService.loadUserByUsername(user.getName());

		UserInfo userInfo = new UserInfo();
		userInfo.setUserName(userObj.getUsername());
		userInfo.setFirstName(userObj.getFirstName());
		userInfo.setLastName(userObj.getLastName());
		userInfo.setRoles(userObj.getAuthorities().toArray());

		return ResponseEntity.ok(userInfo);

	}

}