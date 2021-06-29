package com.ssafy.cloneconverse.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.Map;

@Getter
@Builder
public class ShoesColorSizeDto {
    private String color;
    Map<Integer, Integer> sizeAndStock;
}
