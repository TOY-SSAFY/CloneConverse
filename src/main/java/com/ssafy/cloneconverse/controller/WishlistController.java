package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.service.WishlistService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@CrossOrigin
@RestController
public class WishlistController {
    private final WishlistService wishlistService;

    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    // 위시리스트 조회 - selectOne
    @GetMapping("/wishlist")
    public Object getWishlist(@RequestParam String email) {
        Map<String, Set> map = new HashMap<>();
        map.put("wishlist", wishlistService.getWishList(email));
        return map;
    }

    // 위시리스트 추가
    @PostMapping("/wishlist")
    public Object addWishList(@RequestBody Map<String, String> param) {
        String email = param.get("email");
        String shoesColorId = param.get("shoesColorId");
        wishlistService.addWishList(email, Long.parseLong(shoesColorId));
        return "insert success";
    }

    // 위시리스트 삭제
    @DeleteMapping("/wishlist")
    public Object deleteWishlist(@RequestBody Map<String, Long> param) {
        Long id = param.get("id");
        wishlistService.deleteWishlist(id);
        return "delete sucess";
    }
}
