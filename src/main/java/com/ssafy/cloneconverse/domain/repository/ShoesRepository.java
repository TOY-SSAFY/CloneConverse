package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.Shoes;
import com.ssafy.cloneconverse.dto.FilterDto;
import org.springframework.data.jpa.repository.JpaRepository;

//public interface ShoesRepository extends JpaRepository<Shoes, Long> {
import com.ssafy.cloneconverse.dto.ShoesDto;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ShoesRepository {
    List<ShoesDto> getShoesList(Integer page, int pagingSize);
    Shoes findById(Long shoes_id);

    List<ShoesDto> getShoesFilterList(FilterDto filterDto, int pagingSize);
}
