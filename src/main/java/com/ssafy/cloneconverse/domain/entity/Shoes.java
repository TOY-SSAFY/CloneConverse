package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@Table(name = "shoes")
public class Shoes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shoes_id")
    private Long id;

    @Column(length = 30, nullable = false, name = "shoes_name")
    private String shoesName;

    @Column(length = 30, nullable = false, name = "shoes_type")
    private String shoesType;

    @Column(length = 30, nullable = false, name = "shoes_silhouette")
    private String shoesSilhouette;

    @Column(length = 30, nullable = false, name = "shoes_category")
    private String shoesCategory;

    @Column(length = 30, nullable = false, name = "shoes_price")
    private Integer shoesPrice;

    @Column(nullable = false, name = "shoes_release_date")
    private LocalDateTime shoesReleaseDate;

//    처음 양방향 매핑 하려다가 색깔에 따른 신발 찾을 때 shoes_colors 테이블에서 시작하면 돼서 단방향
//    @OneToMany(mappedBy = "shoes_colors_id")
//    List<ShoesColors> shoesColors = new ArrayList<>();

    public Shoes() {}

    public Shoes(String shoesName, String shoesType, String shoesSilhouette, String shoesCategory, Integer shoesPrice) {
        this(shoesName, shoesType, shoesSilhouette, shoesCategory, shoesPrice, LocalDateTime.now());
    }

    public Shoes(String shoesName, String shoesType, String shoesSilhouette, String shoesCategory, Integer shoesPrice, LocalDateTime shoesReleaseDate){
        this.shoesName = shoesName;
        this.shoesType = shoesType;
        this.shoesSilhouette = shoesSilhouette;
        this.shoesCategory = shoesCategory;
        this.shoesPrice = shoesPrice;
        this.shoesReleaseDate = shoesReleaseDate;
    }

    @Override
    public String toString() {
        return "Shoes{" +
                "id=" + id +
                ", shoesName='" + shoesName + '\'' +
                ", shoesType='" + shoesType + '\'' +
                ", shoesSilhouette='" + shoesSilhouette + '\'' +
                ", shoesCategory='" + shoesCategory + '\'' +
                ", shoesPrice='" + shoesPrice + '\'' +
                ", shoesReleaseDate=" + shoesReleaseDate +
                '}';
    }
}
