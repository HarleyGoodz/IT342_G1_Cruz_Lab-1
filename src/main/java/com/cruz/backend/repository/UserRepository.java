package com.cruz.backend.repository;

import java.util.Optional;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
import com.cruz.backend.entity.User;
 
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmailAddress(String emailAddress);
    Optional<User> findByFullname(String fullname);
}
