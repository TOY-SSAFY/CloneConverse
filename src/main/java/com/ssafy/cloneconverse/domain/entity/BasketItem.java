package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class BasketItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "basket_id")
    private Basket basket;

    @ManyToOne
    @JoinColumn(name = "shoes_color_size_id")
    private ShoesColorSize item;

    @Column
    private Integer quantity;

    public BasketItem() {};

    public BasketItem(Basket basket, ShoesColorSize item, Integer quantity) {
        this.id = id;
        this.basket = basket;
        this.item = item;
        this.quantity = quantity;
    }

}
