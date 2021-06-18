//package com.ssafy.cloneconverse.domain.entity;
//
//import lombok.AccessLevel;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//import javax.persistence.*;
//
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
//@Getter
//@Entity
//@Table(name = "shoesGender")
//public class ShoesGenderEntity {
//
//    @Id
//    @Column(length = 30, name = "shoes_id")
//    @ManyToOne
//    @JoinColumn(name="shoes_id")
//    private ShoesEntity shoesId;
//
//    @Column(length = 30, name = "gender_id")
//    @ManyToOne
//    @JoinColumn(name="gender_id")
//    private GenderEntity genderId;
//
//}
