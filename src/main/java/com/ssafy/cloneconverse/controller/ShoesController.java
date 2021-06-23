package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.dto.MemberDto;
import com.ssafy.cloneconverse.dto.ShoesDto;
import com.ssafy.cloneconverse.service.ShoesService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    // /shoes/시작페이지 넘겨주면 신발 20개씩 가져옴
    @GetMapping("{page}")
    public Object getShoesList(@PathVariable Integer page){
        Map<String, List<ShoesDto>> map = new HashMap<>();
        map.put("shoesList", shoesService.getShoesList(page, pagingSize));
        return map;
    }

}
