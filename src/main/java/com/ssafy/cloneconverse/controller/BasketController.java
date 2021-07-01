package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.service.AuthorityService;
import com.ssafy.cloneconverse.service.BasketService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/basket")
public class BasketController {

    private final BasketService basketService;
    private final AuthorityService authorityService;

    public BasketController(BasketService basketService, AuthorityService authorityService) {
        this.basketService = basketService;
        this.authorityService = authorityService;
    }

    // 장바구니 추가
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @PostMapping("/add")
    public Object addItem(@RequestBody Map<String, String> map){
        Member member = authorityService.getMyMemberWithAuthorities().get();
        basketService.addItem(member,
                Long.parseLong(map.get("shoes_id")), map.get("color_id"),
                Integer.parseInt(map.get("size_id")), Integer.parseInt(map.get("quantity")));
        return 1;
    }

    // 장바구니 삭제
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @PostMapping("/delete")
    public Object  deleteItem(@RequestBody Map<String, String> map) {
        basketService.deleteItem(Long.parseLong(map.get("id")));
        return 1;
    }

    // 장바구니 수정
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @PutMapping("/update")
    public Object updateItem(@RequestBody Map<String, String> map){
        basketService.updateItem(Long.parseLong(map.get("item_id")), Long.parseLong(map.get("shoes_id")), map.get("color_id"),
                Integer.parseInt(map.get("size_id")), Integer.parseInt(map.get("quantity")));
        return 1;
    }

    // 장바구니 조회
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @GetMapping("/list")
    public Object allItems(){
        Member member = authorityService.getMyMemberWithAuthorities().get();
        Map<String, Object> map = new HashMap<>();
        map.put("basket", basketService.allItems(member));
        return map;
    }

    // 장바구니 비우기
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @GetMapping("/deleteAll")
    public Object allDelete(){
        Member member = authorityService.getMyMemberWithAuthorities().get();
        basketService.allDelete(member);
        return 1;
    }

}
