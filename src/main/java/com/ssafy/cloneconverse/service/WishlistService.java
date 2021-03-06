package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.entity.*;
import com.ssafy.cloneconverse.domain.repository.*;
import com.ssafy.cloneconverse.dto.ItemDto;
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
    private final EtcRepository etcRepository;

    public WishlistService(MemberRepository memberRepository, WishlistShoesColorRepository wishlistShoesColorRepository, WishlistRepository wishlistRepository, ShoesColorRepository shoesColorRepository, EtcRepository etcRepository) {
        this.memberRepository = memberRepository;
        this.wishlistShoesColorRepository = wishlistShoesColorRepository;
        this.wishlistRepository = wishlistRepository;
        this.shoesColorRepository = shoesColorRepository;
        this.etcRepository = etcRepository;
    }

    // ์กฐํ
    @Transactional
    public Set<WishlistDto> getWishList(Member member) {
        Wishlist wishlist = member.getWishlist();
        if (wishlist == null) return null;
        Set<WishlistDto> items = new HashSet<>();
        wishlist.getWishList().forEach(i -> {
            Shoes shoes = i.getShoesColor().getShoes();
            ShoesColor color = i.getShoesColor();
            ItemDto item = new ItemDto(shoes.getId(), shoes.getShoesName(), color.getId(), color.getColor().getId(), color.getImagePath(), color.getImageName(), shoes.getShoesPrice(), 0, 0, 0);
            WishlistDto dto = new WishlistDto(i.getId(), item);
            items.add(dto);
        });
        return items;
    }

    // ์ญ์ 
    @Transactional
    public void deleteWishlist(Long Id) {
        wishlistShoesColorRepository.deleteById(Id);
    }

    // ์ถ๊ฐ
    @Transactional
    public void addWishList(Member member, Long shoesColorId) {
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

    @Transactional
    public Boolean shoesInWishList(Member member, Long shoesColorId){
        return etcRepository.shoesInWishList(member, shoesColorId);
    }
}
