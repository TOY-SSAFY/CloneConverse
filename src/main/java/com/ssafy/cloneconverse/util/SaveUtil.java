package com.ssafy.cloneconverse.util;

import com.ssafy.cloneconverse.domain.entity.*;
import com.ssafy.cloneconverse.dto.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class SaveUtil {
    public SaveUtil() {
    }

    public List<ShoesDto> saveShoesDto(List<Shoes> fetch) {
        List<ShoesDto> result = new ArrayList<>();
        for (Shoes shoes : fetch) {
            List<ShoesGenderDto> shoesGenders = new ArrayList<>();
            List<ShoesColorDto> shoesColors = new ArrayList<>();
            List<ShoesStateDto> shoesStates = new ArrayList<>();
            List<ShoesColorSizeDto> shoesColorSizes = new ArrayList<>();
            for (ShoesGender shoesGender : shoes.getShoesGenders()) {
                shoesGenders.add(ShoesGenderDto.builder().id(shoesGender.getId()).build());
            }
            for (ShoesColor shoesColor : shoes.getShoesColors()) {
                shoesColors.add(ShoesColorDto.builder().id(shoesColor.getId()).imagePath(shoesColor.getImagePath()).imageName(shoesColor.getImageName()).build());
                Map<Integer, Integer> sizeAndStock = new HashMap<>();
                for (ShoesColorSize shoesColorSize : shoesColor.getShoesColorSizes()) {
                    sizeAndStock.put(shoesColorSize.getSize().getId(), shoesColorSize.getStock());
                }
                shoesColorSizes.add(ShoesColorSizeDto.builder()
                        .color(shoesColor.getColor().getId())
                        .sizeAndStock(sizeAndStock)
                        .build());
            }
            for (ShoesState shoesState : shoes.getShoesStates()) {
                shoesStates.add(ShoesStateDto.builder().id(shoesState.getId()).build());
            }
            result.add(ShoesDto.builder()
                    .id(shoes.getId())
                    .shoesName(shoes.getShoesName())
                    .shoesType(shoes.getShoesType())
                    .shoesSilhouette(shoes.getShoesSilhouette())
                    .shoesCategory(shoes.getShoesCategory())
                    .shoesPrice(shoes.getShoesPrice())
                    .shoesReleaseDate(shoes.getShoesReleaseDate())
                    .shoesGenders(shoesGenders)
                    .shoesColors(shoesColors)
                    .shoesStates(shoesStates)
                    .shoesColorSizes(shoesColorSizes)
                    .build());
        }
        return result;
    }
}
