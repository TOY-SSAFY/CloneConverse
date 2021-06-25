package com.ssafy.cloneconverse.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "wishlist_shoes_color")
public class WishlistShoesColor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wishlist_shoes_color_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "wishlist_id")
    private Wishlist wishlist;

    @ManyToOne
    @JoinColumn(name = "shoes_color_id")
    private ShoesColor shoesColor;

    @Builder
    public WishlistShoesColor(Long id, Wishlist wishlist, ShoesColor shoesColor) {
        this.id = id;
        this.wishlist = wishlist;
        this.shoesColor = shoesColor;
    }

    public WishlistShoesColor() {

    }
}
