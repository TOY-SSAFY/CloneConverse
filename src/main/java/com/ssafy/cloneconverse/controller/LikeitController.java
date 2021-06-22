package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.domain.entity.Likeit;
import com.ssafy.cloneconverse.dto.LikeitDto;
import com.ssafy.cloneconverse.service.LikeitService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
//@RequestMapping("/likeit")
public class LikeitController {
    private final LikeitService likeitService;

    public LikeitController(LikeitService likeitService) {
        this.likeitService = likeitService;
    }

    // 위시리스트 추가
    @PostMapping("/likeit")
    public Long addItem(@RequestBody LikeitDto likeitDto) {
        return likeitService.addItem(likeitDto);
    }

    // 위시리스트 조회
    @GetMapping("/likeit")
    public List<Likeit> allItems() {
        return likeitService.allItems();
    }

    // 위시리스트 삭제
    @DeleteMapping("/likeit/{id}")
    public void deleteItem(@PathVariable Long id) {
        likeitService.deleteItem(id);
    }
}
