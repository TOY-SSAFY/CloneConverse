package com.ssafy.cloneconverse.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "basket")
public class Basket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "basket_id")
    private Long id;

    @JsonIgnore
    @OneToMany(mappedBy = "basket")
    private Set<BasketItem> basketList = new HashSet<>();

    public Basket() {
    }

    @Builder
    public Basket(Long id, Set<BasketItem> basketList) {
        this.id = id;
        this.basketList = basketList;
    }
}
