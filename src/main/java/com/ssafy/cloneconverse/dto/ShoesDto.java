package com.ssafy.cloneconverse.dto;

import com.ssafy.cloneconverse.domain.entity.*;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

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
    private List<ShoesGender> shoesGenders;
    private List<ShoesColor> shoesColors;
    private List<ShoesState> shoesStates;
    // shoesColorId, {size, ...}
    private List<ShoesColorSizeDto> shoesColorSizes;
}
