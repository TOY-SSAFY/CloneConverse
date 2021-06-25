package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.domain.entity.ShoesColor;
import com.ssafy.cloneconverse.domain.entity.Wishlist;
import com.ssafy.cloneconverse.domain.entity.WishlistShoesColor;
import com.ssafy.cloneconverse.domain.repository.MemberRepository;
import com.ssafy.cloneconverse.domain.repository.ShoesColorRepository;
import com.ssafy.cloneconverse.domain.repository.WishlistRepository;
import com.ssafy.cloneconverse.domain.repository.WishlistShoesColorRepository;
import com.ssafy.cloneconverse.dto.WishlistDto;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@Service
public class WishlistService {
    private final MemberRepository memberRepository;
    private final WishlistShoesColorRepository wishlistShoesColorRepository;
    private final WishlistRepository wishlistRepository;
    private final ShoesColorRepository shoesColorRepository;

    public WishlistService(MemberRepository memberRepository, WishlistShoesColorRepository wishlistShoesColorRepository, WishlistRepository wishlistRepository, ShoesColorRepository shoesColorRepository) {
        this.memberRepository = memberRepository;
        this.wishlistShoesColorRepository = wishlistShoesColorRepository;
        this.wishlistRepository = wishlistRepository;
        this.shoesColorRepository = shoesColorRepository;
    }

    // 조회
    @Transactional
    public Set<WishlistDto> getWishList(String email) {
        Member member = memberRepository.findByEmail(email).get();
        Wishlist wishlist = member.getWishlist();
        if (wishlist == null) return null;
        Set<WishlistDto> items = new HashSet<>();
        wishlist.getWishList().forEach(i -> {
            WishlistDto dto = new WishlistDto(i.getId(), i.getShoesColor());
            items.add(dto);
        });
        return items;
    }

    // 삭제
    @Transactional
    public void deleteWishlist(Long id) {
        wishlistShoesColorRepository.deleteById(id);
    }

    // 추가
    @Transactional
    public void addWishList(String email, Long shoesColorId) {
        Member member = memberRepository.findByEmail(email).get();
        Wishlist wishlist = member.getWishlist();
        ShoesColor shoescolor = shoesColorRepository.findById(shoesColorId).get();
        if (wishlist == null) {
            wishlist = member.addWishlist();
            wishlistRepository.save(wishlist);
        }
        WishlistShoesColor wishlistShoesColor = new WishlistShoesColor();
        wishlistShoesColor.setShoesColor(shoescolor);
        wishlistShoesColor.setWishlist(wishlist);
        if (wishlistShoesColorRepository.checkCount(shoescolor.getId(), wishlist.getId()) == 0) {
            wishlistShoesColorRepository.save(wishlistShoesColor);
            wishlist.addWishlistShoesColor(wishlistShoesColor);
            wishlistRepository.save(wishlist);
        }
    }
}
