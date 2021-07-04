package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.ShoesColor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ShoesColorRepository extends JpaRepository<ShoesColor, Long> {
    @Query(value = "select * from shoes_color where shoes_id = :shoes_id and color_id = :color_id", nativeQuery = true)
    Optional<ShoesColor> findShoesColor(@Param("shoes_id") Long shoes_id, @Param("color_id") String color_id);
}
