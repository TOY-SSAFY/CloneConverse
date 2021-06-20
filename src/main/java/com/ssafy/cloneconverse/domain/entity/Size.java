package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "size")
public class Size {

    @Id
    @Column(name = "size_id")
    private Integer id;

    public Size() {}
    public Size(Integer id) {
        this.id = id;
    }
}
