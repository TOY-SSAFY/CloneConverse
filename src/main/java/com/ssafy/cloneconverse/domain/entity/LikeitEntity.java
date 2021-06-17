package com.ssafy.cloneconverse.domain.entity;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@Entity
@Table(name = "likeit")
public class LikeitEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 30, nullable = false)
    private String userid;

    @Column(length = 100, nullable = false)
    private String item;


    @Builder
    public LikeitEntity(Long id, String userid, String item) {
        this.id = id;
        this.userid = userid;
        this.item = item;
    }
}
