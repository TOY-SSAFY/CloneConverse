package com.ssafy.cloneconverse.dto;

import com.ssafy.cloneconverse.domain.entity.*;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.ArrayList;
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
    private List<ShoesGender> shoesGenders;
    private List<ShoesColor> shoesColors;
    private List<ShoesState> shoesStates;
}
