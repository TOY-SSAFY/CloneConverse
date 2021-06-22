package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.Likeit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeitRepository extends JpaRepository<Likeit, Long> {
}
