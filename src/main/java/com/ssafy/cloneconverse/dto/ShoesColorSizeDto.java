package com.ssafy.cloneconverse.dto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@Builder
public class ShoesColorSizeDto {
    private Long shoes_id;
    private String color;
    Map<Integer, Integer> sizeAndStock;
}
