package com.ssafy.cloneconverse.dto;

import com.ssafy.cloneconverse.domain.entity.Shoes;
import com.ssafy.cloneconverse.domain.entity.ShoesColor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class ShoesDto {
    private String shoesName;
    private String shoesType;
    private String shoesSilhouette;
    private String shoesCategory;
    private String shoesPrice;
    private LocalDateTime shoesReleaseDate;
    private String imagePath;
    private String imageName;

    public ShoesDto(Shoes shoes, ShoesColor shoesColor) {
        this(shoes.getShoesName(),
                shoes.getShoesType(),
                shoes.getShoesSilhouette(),
                shoes.getShoesCategory(),
                shoes.getShoesPrice(),
                shoes.getShoesReleaseDate(),
                shoesColor.getImagePath(),
                shoesColor.getImageName());
    }
    public ShoesDto(String shoesName, String shoesType, String shoesSilhouette, String shoesCategory, String shoesPrice, LocalDateTime shoesReleaseDate, String imagePath, String imageName) {
        this.shoesName = shoesName;
        this.shoesType = shoesType;
        this.shoesSilhouette = shoesSilhouette;
        this.shoesCategory = shoesCategory;
        this.shoesPrice = shoesPrice;
        this.shoesReleaseDate = shoesReleaseDate;
        this.imagePath = imagePath;
        this.imageName = imageName;
    }

}
