package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.dto.ShoesDto;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailRepository {
    Object getShoesDetail(ShoesDto param);
}
