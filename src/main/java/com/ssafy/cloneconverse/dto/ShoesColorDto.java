package com.ssafy.cloneconverse.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ShoesColorDto {
    private Long id;
    private String imagePath;
    private String imageName;
}
