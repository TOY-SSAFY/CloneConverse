package com.ssafy.cloneconverse.dto;

import com.ssafy.cloneconverse.domain.entity.LikeitEntity;
import lombok.*;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class LikeitDto {
    private Long id;
    private String item;
    private String userid;

    public LikeitEntity toEntity() {
        return LikeitEntity.builder()
                .id(id)
                .item(item)
                .userid(userid)
                .build();
    }

    @Builder
    public LikeitDto(Long id, String userid, String item) {
        this.id = id;
        this.userid = userid;
        this.item = item;
    }
}
