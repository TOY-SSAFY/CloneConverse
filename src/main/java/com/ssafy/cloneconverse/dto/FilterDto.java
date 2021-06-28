package com.ssafy.cloneconverse.dto;

import com.ssafy.cloneconverse.domain.entity.Gender;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class FilterDto {
    private List<String> gender = new ArrayList<>();
    private List<String> type = new ArrayList<>();
    private List<String> color = new ArrayList<>();
    private List<String> size = new ArrayList<>();
    private List<String> silhouette = new ArrayList<>();
    private Integer page;
}
