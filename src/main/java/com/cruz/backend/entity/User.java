package com.cruz.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
 
@Entity
@Table(name = "users") // matches your MySQL table name
public class User {
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    private String username;
    private String fName;
    private String lName;
    private String email;
    private String password;
 
    public User() {
        super();
    }
 
    public User(Integer id, String username, String fName, String lName, String email, String password) {
        this.id = id;
        this.username = username;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;
    }
 
    public Integer getId() {
        return id;
    }
 
    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
 
    public String getfName() {
        return fName;
    }
 
    public void setfName(String fName) {
        this.fName = fName;
    }
 
    public String getlName() {
        return lName;
    }
 
    public void setlName(String lName) {
        this.lName = lName;
    }
 
    public String getEmail() {
        return email;
    }
 
    public void setEmail(String email) {
        this.email = email;
    }
 
    public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }
 
 
   
}
