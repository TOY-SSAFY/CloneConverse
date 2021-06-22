package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.domain.entity.Basket;
import com.ssafy.cloneconverse.dto.BasketDto;
import com.ssafy.cloneconverse.service.BasketService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
    public Long addItem(@RequestBody BasketDto basketDto) {
        return basketService.addItem(basketDto);
    }

    // 장바구니 삭제
    @PostMapping("/delete")
    public void deleteItem(@RequestParam Long id) {
        basketService.deleteItem(id);
    }

    // 장바구니 수정
    @PostMapping("/update")
    public Optional<Basket> updateItem(@RequestBody BasketDto basketDto, @RequestParam Long id){
        return basketService.updateItem(basketDto, id);
    }

    // 장바구니 조회
    @GetMapping("/list")
    public List<Basket> allItems(){
        return basketService.allItems();
    }
}
