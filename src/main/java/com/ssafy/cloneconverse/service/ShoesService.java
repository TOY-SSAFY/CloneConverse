package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.repository.ShoesRepository;
import com.ssafy.cloneconverse.dto.ShoesDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoesService {
    private ShoesRepository shoesRepository;

    public ShoesService(ShoesRepository shoesRepository) {
        this.shoesRepository = shoesRepository;
    }

    public List<ShoesDto> getShoesList(Integer page, int pagingSize) {
        return shoesRepository.getShoesList(page, pagingSize);
    }
}
