package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Getter
@Entity
@Table(name = "shoes_gender")
public class ShoesGender {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shoes_gender_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "shoes_id")
    private Shoes shoes;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="gender_id")
    private Gender gender;

    public ShoesGender() {}

    public ShoesGender(Long id, Gender gender) {
        this(id, null, gender);
    }

    public ShoesGender(Long id, Shoes shoes, Gender gender) {
        this.id = id;
        this.shoes = shoes;
        this.gender = gender;
    }
}
