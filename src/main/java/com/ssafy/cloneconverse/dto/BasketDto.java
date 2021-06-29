package com.ssafy.cloneconverse.dto;

import com.ssafy.cloneconverse.domain.entity.Basket;
import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.domain.entity.ShoesColorSize;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class BasketDto {
    private Long id;
    private ItemDto item;
    private Integer quantity;

    @Builder
    public BasketDto(Long id, ItemDto item, Integer quantity) {
        this.id = id;
        this.item = item;
        this.quantity = quantity;
    }
}
