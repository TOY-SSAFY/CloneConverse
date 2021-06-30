package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.dto.FilterDto;
import com.ssafy.cloneconverse.dto.MemberDto;
import com.ssafy.cloneconverse.dto.ShoesDto;
import com.ssafy.cloneconverse.service.ShoesService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Filter;

@RestController
@RequestMapping("/shoes")
public class ShoesController {

    private final int pagingSize;
    private final ShoesService shoesService;

    public ShoesController(@Value("${paging.size}") int pagingSize, ShoesService shoesService) {
        this.pagingSize = pagingSize;
        this.shoesService = shoesService;
    }


    // 임시 test
    @GetMapping("/test")
    public Object test(){
        return new MemberDto();
    }

    @PostMapping
    public Object getShoesFilterList(@RequestBody FilterDto filterDto){
        return shoesService.getShoesFilterList(filterDto, pagingSize);
    }
}
