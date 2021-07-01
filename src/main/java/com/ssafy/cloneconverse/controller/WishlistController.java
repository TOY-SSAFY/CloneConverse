package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.service.AuthorityService;
import com.ssafy.cloneconverse.service.WishlistService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@CrossOrigin
@RestController
public class WishlistController {
    private final WishlistService wishlistService;
    private final AuthorityService authorityService;

    public WishlistController(WishlistService wishlistService, AuthorityService authorityService) {
        this.wishlistService = wishlistService;
        this.authorityService = authorityService;
    }

    // 위시리스트 조회 - selectOne
    @GetMapping("/wishlist")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public Object getWishlist() {
        System.out.println("here");
        Member member = authorityService.getMyMemberWithAuthorities().get();
        Map<String, Set> map = new HashMap<>();
        System.out.println("??????????");
        System.out.println(member.getEmail());
        map.put("wishlist", wishlistService.getWishList(member));
        return map;
    }

    // 위시리스트 추가
    @PostMapping("/wishlist")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public Object addWishList(@RequestBody Map<String, String> param) {
        System.out.println("hello");
        Member member = authorityService.getMyMemberWithAuthorities().get();
        String shoesColorId = param.get("shoesColorId");
        wishlistService.addWishList(member, Long.parseLong(shoesColorId));
        return "insert success";
    }

    // 위시리스트 삭제
    @DeleteMapping("/wishlist")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public Object deleteWishlist(@RequestBody Map<String, Long> param) {
        Long id = param.get("id");
        wishlistService.deleteWishlist(id);
        return "delete sucess";
    }
}
