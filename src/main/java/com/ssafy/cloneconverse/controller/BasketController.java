package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.configuration.response.ErrorResponse;
import com.ssafy.cloneconverse.domain.entity.Basket;
import com.ssafy.cloneconverse.dto.BasketDto;
import com.ssafy.cloneconverse.service.BasketService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/basket")
public class BasketController {

    private final BasketService basketService;

    public BasketController(BasketService basketService) {
        this.basketService = basketService;
    }

    // 장바구니 추가
    @PostMapping("/add")
    public Object addItem(@RequestParam Long member_id, @RequestParam Long shoes_id, @RequestParam String color_id, @RequestParam Integer size_id, @RequestParam Integer quantity) {
        basketService.addItem(member_id, shoes_id, color_id, size_id, quantity);
        return 1;
    }

    // 장바구니 삭제
    @PostMapping("/delete")
    public Object  deleteItem(@RequestParam Long id) {
        basketService.deleteItem(id);
        return 1;
    }

    // 장바구니 수정
    @PostMapping("/update")
    public Object updateItem(@RequestParam Long item_id, @RequestParam Long shoes_id, @RequestParam String color_id, @RequestParam Integer size_id, @RequestParam Integer quantity){
        basketService.updateItem(item_id, shoes_id, color_id, size_id, quantity);
        return 1;
    }

    // 장바구니 조회
    @GetMapping("/list")
    public Object allItems(@RequestParam Long member_id){
        Map<String, Object> map = new HashMap<>();
        map.put("basket", basketService.allItems(member_id));
        return map;
    }

}
