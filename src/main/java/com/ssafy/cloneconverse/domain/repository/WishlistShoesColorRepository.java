package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.WishlistShoesColor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface WishlistShoesColorRepository extends JpaRepository<WishlistShoesColor, Long> {
    @Query(value = "select count(*) from wishlist_shoes_color where shoes_color_id = :shoes_color_id and wishlist_id = :wishlist_id", nativeQuery = true)
    Long checkCount(@Param("shoes_color_id") Long shoes_color_id, @Param("wishlist_id") Long wishlist_id);
}
