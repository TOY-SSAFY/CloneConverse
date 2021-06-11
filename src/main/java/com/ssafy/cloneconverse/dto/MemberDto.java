package com.ssafy.cloneconverse.dto;

import com.ssafy.cloneconverse.domain.entity.MemberEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class MemberDto {
    private String id;
    private String email;
    private String password;
    private String name;
    private String phone;
    private String bday;
    private String gender;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public MemberEntity toEntity(){
        return MemberEntity.builder()
                .id(id)
                .email(email)
                .password(password)
                .name(name)
                .phone(phone)
                .bday(bday)
                .gender(gender)
                .build();
    }

    @Builder
    public MemberDto(String id, String email, String password, String name, String phone, String bday, String gender) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.bday = bday;
        this.gender = gender;
    }
}