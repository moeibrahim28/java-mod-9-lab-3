package com.example.spring.bootangularhttp;

class User {
    public String firstName;
    public boolean isOnline = false;

    public User(String firstName) {
        this.firstName = firstName;
    }

    public User(String firstName, boolean isOnline) {
        this.firstName = firstName;
        this.isOnline = isOnline;
    }
}