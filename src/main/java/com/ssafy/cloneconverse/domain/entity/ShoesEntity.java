//package com.ssafy.cloneconverse.domain.entity;
//
//import com.fasterxml.jackson.annotation.JsonFormat;
//import lombok.AccessLevel;
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//import javax.persistence.*;
//
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
//@Getter
//@Entity
//@Table(name = "shoes")
//public class ShoesEntity {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "shoes_id")
//    private Long shoesId;
//
//    @Column(length = 30, nullable = false, name = "shoes_name")
//    private String shoesName;
//
//    @Column(length = 30, nullable = false, name = "shoes_type")
//    private String shoesType;
//
//    @Column(length = 30, nullable = false, name = "shoes_silhouette")
//    private String shoesSilhouette;
//
//    @Column(length = 30, nullable = false, name = "shoes_category")
//    private String shoesCategory;
//
//    @Column(length = 30, nullable = false, name = "shoes_price")
//    private String shoesPrice;
//
//    @Column(length = 30, nullable = false, name = "shoes_release_date")
//    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone="Asia/Seoul")
//    private String shoesReleaseDate;
//
//    @Builder
//    public ShoesEntity(Long shoesId, String shoesName, String shoesType, String shoesSilhouette, String shoesCategory, String shoesPrice, String shoesReleaseDate){
//        this.shoesId = shoesId;
//        this.shoesName = shoesName;
//        this.shoesType = shoesType;
//        this.shoesSilhouette = shoesSilhouette;
//        this.shoesCategory = shoesCategory;
//        this.shoesPrice = shoesPrice;
//        this.shoesReleaseDate = shoesReleaseDate;
//    }
//}
