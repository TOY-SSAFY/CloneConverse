package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.Shoes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoesRepository extends JpaRepository<Shoes, Long> {
}
