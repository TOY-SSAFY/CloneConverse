package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.domain.entity.ShoesColor;
import com.ssafy.cloneconverse.dto.WishlistDto;
import com.ssafy.cloneconverse.service.AuthorityService;
import com.ssafy.cloneconverse.service.WishlistService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
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
        Member member = authorityService.getMyMemberWithAuthorities().get();
        Map<String, Object> map = new HashMap<>();
        Set<WishlistDto> wishList = wishlistService.getWishList(member);
        if (wishList != null){
            map.put("total", wishList.size());
        } else{
            map.put("total", 0);
        }
        map.put("wishlist", wishList);
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
    @PostMapping("/check")
    public Object shoesColorInWishList(@RequestBody Map<String, String> param){
        Member member = authorityService.getMyMemberWithAuthorities().get();
        Map<String, Boolean> map = new HashMap<>();
        map.put("inWishlist", wishlistService.shoesInWishList(member, Long.parseLong(param.get("shoesColorId"))));
        return map;
    }

}
