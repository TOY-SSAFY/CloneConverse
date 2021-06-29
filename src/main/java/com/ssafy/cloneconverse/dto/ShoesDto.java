package com.ssafy.cloneconverse.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
public class ShoesDto {
    private Long id;
    private String shoesName;
    private String shoesType;
    private String shoesSilhouette;
    private String shoesCategory;
    private Integer shoesPrice;
    private LocalDateTime shoesReleaseDate;
    private List<ShoesGenderDto> shoesGenders;
    private List<ShoesColorDto> shoesColors;
    private List<ShoesStateDto> shoesStates;
    private List<ShoesColorSizeDto> shoesColorSizes;
}
