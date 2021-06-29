package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.dto.ShoesDto;
import com.ssafy.cloneconverse.service.DetailService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/detail")
public class DetailController {

    private DetailService detailService;

    public DetailController(DetailService detailService) {
        this.detailService = detailService;
    }

    @PostMapping
    public Object getDetailItem(@RequestBody ShoesDto param) {
        return detailService.getShoesDetail(param);
    }
}
