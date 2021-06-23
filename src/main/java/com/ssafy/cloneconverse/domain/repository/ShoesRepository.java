package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.dto.ShoesDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoesRepository {
    List<ShoesDto> getShoesList(Integer page, int pagingSize);
}
