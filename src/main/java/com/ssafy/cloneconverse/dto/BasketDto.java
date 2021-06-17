package com.ssafy.cloneconverse.dto;

import com.ssafy.cloneconverse.domain.entity.BasketEntity;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class BasketDto {
    private Long id;
    private String item;
    private String userid;

    public BasketEntity toEntity(){
        return BasketEntity.builder()
                .id(id)
                .item(item)
                .userid(userid)
                .build();
    }

    @Builder
    public BasketDto(Long id, String userid, String item) {
        this.id = id;
        this.userid = userid;
        this.item = item;
    }
}
