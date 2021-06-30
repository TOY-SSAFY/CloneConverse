package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.repository.ShoesRepository;
import com.ssafy.cloneconverse.dto.FilterDto;
import com.ssafy.cloneconverse.dto.ShoesDto;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ShoesService {
    private ShoesRepository shoesRepository;

    public ShoesService(ShoesRepository shoesRepository) {
        this.shoesRepository = shoesRepository;
    }

    public Object getShoesFilterList(@RequestBody FilterDto filterDto, int pagingSize) {
        return shoesRepository.getShoesFilterList(filterDto, pagingSize);
    }
}
