package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(mappedBy = "shoes")
    List<ShoesGender> shoesGenders = new ArrayList<>();

    @OneToMany(mappedBy = "shoes")
    List<ShoesColor> shoesColors = new ArrayList<>();

    @OneToMany(mappedBy = "shoes")
    List<ShoesState> shoesStates = new ArrayList<>();

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
