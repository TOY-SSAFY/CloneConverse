package com.ssafy.cloneconverse.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
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

    @OneToMany(mappedBy = "basket")
    private List<BasketItem> basketList = new ArrayList<>();

    public Basket() {
    }

    @Builder
    public Basket(Long id, List<BasketItem> basketList) {
        this.id = id;
        this.basketList = basketList;
    }


}
