package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.repository.DetailRepository;
import com.ssafy.cloneconverse.dto.MemberDto;
import com.ssafy.cloneconverse.dto.ShoesDto;
import org.springframework.stereotype.Service;

@Service
public class DetailService {
    private DetailRepository detailRepository;

    public DetailService(DetailRepository detailRepository) {
        this.detailRepository = detailRepository;
    }

    public Object getShoesDetail(ShoesDto param){
        return detailRepository.getShoesDetail(param);
    }
}
