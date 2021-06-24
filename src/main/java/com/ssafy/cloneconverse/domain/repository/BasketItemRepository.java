package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.BasketItem;
import com.ssafy.cloneconverse.domain.entity.ShoesColorSize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface BasketItemRepository extends JpaRepository<BasketItem, Long> {
    @Query(value = "select count(*) from basket_item where shoes_color_size_id = :shoes_color_size_id and basket_id = :basket_id", nativeQuery = true)
    Long checkCount(@Param("shoes_color_size_id") Long shoes_color_size_id, @Param("basket_id") Long basket_id);

    @Query(value = "select * from basket_item where shoes_color_size_id = :shoes_color_size_id and basket_id = :basket_id", nativeQuery = true)
    Optional<BasketItem> checkItem(@Param("shoes_color_size_id") Long shoes_color_size_id, @Param("basket_id") Long basket_id);
}
