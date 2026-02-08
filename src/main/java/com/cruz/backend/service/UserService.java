package com.cruz.backend.service;

import java.util.Optional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cruz.backend.entity.User;
import com.cruz.backend.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository urepo;
 
    public UserService() {
        super();
    }
 
 
    // CREATE
    public User createUser(User user) {
        // NOTE: currently saving raw password (plaintext).
        // For production, hash with BCrypt and store the hash instead.
        return urepo.save(user);
    }
 
    // FIND BY EMAIL OR FULLNAME (LOGIN)
    public Optional<User> findByEmailOrUsername(String value) {
        Optional<User> user = urepo.findByEmail(value);
 
        if (user.isEmpty()) {
            user = urepo.findByUsername(value);
        }
 
        return user;
    }
 
    // helper to check raw password vs stored value (plaintext comparison here)
    public boolean checkPassword(User user, String rawPassword) {
        if (user == null || rawPassword == null) return false;
        return rawPassword.equals(user.getPassword());
    }
}