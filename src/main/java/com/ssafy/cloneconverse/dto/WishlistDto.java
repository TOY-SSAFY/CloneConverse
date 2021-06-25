package com.ssafy.cloneconverse.dto;

import com.ssafy.cloneconverse.domain.entity.ShoesColor;
import lombok.Getter;

@Getter
public class WishlistDto {
    private Long id;
    private ShoesColor shoesColor;

    public WishlistDto(String email, ShoesColor shoesColor) {
        this.shoesColor = shoesColor;
    }

    public WishlistDto(Long id) {
        this.id = id;
    }

    public WishlistDto(Long id, ShoesColor shoesColor) {
        this.id = id;
        this.shoesColor = shoesColor;
    }
}
