package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "gender")
public class Gender {
    @Id
    @Column(name = "gender_id")
    private String id;

    public Gender() {}
    public Gender(String id) {
        this.id = id;
    }
}
