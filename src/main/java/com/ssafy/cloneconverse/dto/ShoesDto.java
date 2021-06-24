package com.ssafy.cloneconverse.dto;

import com.ssafy.cloneconverse.domain.entity.Color;
import com.ssafy.cloneconverse.domain.entity.Shoes;
import com.ssafy.cloneconverse.domain.entity.ShoesColor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ShoesDto {
    private String shoesName;
    private String shoesType;
    private String shoesSilhouette;
    private String shoesCategory;
    private Integer shoesPrice;
    private LocalDateTime shoesReleaseDate;
    private String imagePath;
    private String imageName;
    private Long shoesColorId;
    private String color;
    private String state;
    private Integer stock;
}
