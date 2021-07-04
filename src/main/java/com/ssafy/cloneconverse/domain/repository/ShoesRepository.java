package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.Shoes;
import com.ssafy.cloneconverse.dto.FilterDto;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoesRepository {
    Shoes findById(Long shoes_id);
    Object getShoesFilterList(FilterDto filterDto, int pagingSize);
}
