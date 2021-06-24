package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "color")
public class Color {

    @Id
    @Column(length = 20, name = "color_id")
    private String id;

    public Color() {}
    public Color(String id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Color{" +
                "id='" + id + '\'' +
                '}';
    }
}
