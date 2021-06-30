package com.ssafy.cloneconverse.util;

import com.ssafy.cloneconverse.domain.entity.*;
import com.ssafy.cloneconverse.dto.*;
import org.springframework.stereotype.Component;

import java.util.*;

import static com.ssafy.cloneconverse.domain.repository.ShoesRepositoryImpl.filterSizes;

@Component
public class SaveUtil {
    public SaveUtil() {
    }

    public Object saveShoesDto(List<Shoes> fetch, long total) {
        Map<String, Object> map = new HashMap<>();
        List<ShoesDto> result = new ArrayList<>();
        for (Shoes shoes : fetch) {
            List<ShoesGenderDto> shoesGenders = new ArrayList<>();
            List<ShoesColorDto> shoesColors = new ArrayList<>();
            List<ShoesStateDto> shoesStates = new ArrayList<>();
            List<ShoesColorSizeDto> shoesColorSizes = new ArrayList<>();
            boolean satisfyConditions = false;
            for (ShoesGender shoesGender : shoes.getShoesGenders()) {
                shoesGenders.add(ShoesGenderDto.builder().id(shoesGender.getId()).gender(shoesGender.getGender().getId()).build());
            }
            for (ShoesColor shoesColor : shoes.getShoesColors()) {
                shoesColors.add(ShoesColorDto.builder().id(shoesColor.getId()).color(shoesColor.getColor().getId()).imagePath(shoesColor.getImagePath()).imageName(shoesColor.getImageName()).build());
                Map<Integer, Integer> sizeAndStock = new TreeMap<>((s1, s2)-> s1 - s2);
                boolean sizeInFilter = false;
                for (ShoesColorSize shoesColorSize : shoesColor.getShoesColorSizes()) {
                    if(filterSizes.isEmpty() || filterSizes.containsKey(shoesColorSize.getSize().getId())) {
                        sizeInFilter = true;
                        break;
                    }
                }
                if(sizeInFilter){
                    for (ShoesColorSize shoesColorSize : shoesColor.getShoesColorSizes()) {
                            sizeAndStock.put(shoesColorSize.getSize().getId(), shoesColorSize.getStock());
                    }
                    shoesColorSizes.add(ShoesColorSizeDto.builder()
                            .color(shoesColor.getColor().getId())
                            .sizeAndStock(sizeAndStock)
                            .build());
                    satisfyConditions = true;
                }
            }
            for (ShoesState shoesState : shoes.getShoesStates()) {
                shoesStates.add(ShoesStateDto.builder().id(shoesState.getId()).state(shoesState.getState().getId()).build());
            }
            if(satisfyConditions) {
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
        }
        map.put("total", total);
        map.put("shoesList", result);
        return map;
    }
}
