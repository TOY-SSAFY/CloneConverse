package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "shoes_gender")
public class ShoesGender {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shoes_gender_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "shoes_id")
    private Shoes shoes;

    @ManyToOne
    @JoinColumn(name="gender_id")
    private Gender gender;

    public ShoesGender() {}
    public ShoesGender(Shoes shoes, Gender gender) {
        this.shoes = shoes;
        this.gender = gender;
    }
}
