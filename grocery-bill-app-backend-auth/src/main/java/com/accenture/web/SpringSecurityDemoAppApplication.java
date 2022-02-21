package com.accenture.web;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.accenture.web.entities.Authority;
import com.accenture.web.entities.User;
import com.accenture.web.repository.UserDetailsRepository;

@SpringBootApplication
public class SpringSecurityDemoAppApplication {

//	@Autowired
//	private PasswordEncoder passwordEncoder;
//
//	@Autowired
//	private UserDetailsRepository userDetailsRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityDemoAppApplication.class, args);
	}

//	@PostConstruct
//	protected void init() {
//
//		List<Authority> authorityList = new ArrayList<>();
//
//		authorityList.add(createAuthority("USER", "User role"));
//		authorityList.add(createAuthority("ADMIN", "Admin role"));
//
//		User user = new User();
//
//		user.setUserName("admin");
//		user.setFirstName("admin");
//		user.setLastName("Macunay");
//
//		user.setPassword(passwordEncoder.encode("admin"));
//		user.setEnabled(true);
//		user.setAuthorities(authorityList);
//
//		userDetailsRepository.save(user);
//
//	}
//
//	private Authority createAuthority(String roleCode, String roleDescription) {
//		Authority authority = new Authority();
//		authority.setRoleCode(roleCode);
//		authority.setRoleDescription(roleDescription);
//		return authority;
//	}

}