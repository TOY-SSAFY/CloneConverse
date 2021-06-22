package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "states")
public class State {

    @Id
    @Column(length = 50, name = "state_id")
    private String id;

    public State() {}
    public State(String id) {
        this.id = id;
    }
}
