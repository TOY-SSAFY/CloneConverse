package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.ShoesColorSize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;

public interface ShoesColorSizeRepository extends JpaRepository<ShoesColorSize, Long> {
    @Query(value = "select * from shoes_color_size where shoes_color_id = :shoes_color_id and size_id = :size_id", nativeQuery = true)
    Optional<ShoesColorSize> findShoesColorSize(@Param("shoes_color_id") Long shoes_color_id, @Param("size_id") Integer size_id);
}
