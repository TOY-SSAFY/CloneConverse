package com.ssafy.cloneconverse.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class ItemDto {
    private Long shoesId;
    private String shoesName;
    private String color;
    private String imagePath;
    private String imageName;
    private Integer price;
    private Integer size;
    private Integer stock;
    private Integer quantity;

    public ItemDto(Long shoesId, String shoesName, String color, String imagePath, String imageName, Integer price, Integer size, Integer stock, Integer quantity) {
        this.shoesId = shoesId;
        this.shoesName = shoesName;
        this.color = color;
        this.imagePath = imagePath;
        this.imageName = imageName;
        this.price = price;
        this.size = size;
        this.stock = stock;
        this.quantity = quantity;
    }
}
