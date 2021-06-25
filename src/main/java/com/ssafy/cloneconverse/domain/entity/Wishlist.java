package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Table(name = "wishlist")
public class Wishlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wishlist_id")
    private Long id;

    @OneToMany(mappedBy = "wishlist", orphanRemoval = true)
    private Set<WishlistShoesColor> wishList = new HashSet<>();

    public void addWishlistShoesColor(WishlistShoesColor wishItem) {
        wishList.add(wishItem);
    }
}
