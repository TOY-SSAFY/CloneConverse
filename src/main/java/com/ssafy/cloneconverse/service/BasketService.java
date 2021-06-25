package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.entity.*;
import com.ssafy.cloneconverse.domain.repository.*;
import com.ssafy.cloneconverse.dto.BasketDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class BasketService {
    @Autowired
    private BasketRepository basketRepository;
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private ShoesRepository shoesRepository;
    @Autowired
    private ShoesColorRepository shoesColorRepository;
    @Autowired
    private ShoesColorSizeRepository shoesColorSizeRepository;
    @Autowired
    private BasketItemRepository basketItemRepository;

    @Transactional
    public void addItem(Long member_id, Long shoes_id, String color_id, Integer size_id, Integer quantity){
        Optional<Member> memberEntity = memberRepository.findById(member_id);
        Member member = memberEntity.get();

        Shoes shoes = shoesRepository.findById(shoes_id);
        ShoesColor shoescolor = shoesColorRepository.findShoesColor(shoes.getId(), color_id).get();
        ShoesColorSize shoesColorSize = shoesColorSizeRepository.findShoesColorSize(shoescolor.getId(), size_id).get();

        Basket basket = member.getBasket();
        if(basket == null) {
            basket = member.addBasket();
            basketRepository.save(basket);
        }

        BasketItem basketItem = new BasketItem();
        basketItem.setItem(shoesColorSize);
        basketItem.setQuantity(quantity);
        basketItem.setBasket(member.getBasket());

        System.out.println(basket.getId());
        Set<BasketItem> baskets = basket.getBasketList();

        if(basketItemRepository.checkCount(shoesColorSize.getId(), basket.getId()) == 0){
            basketItemRepository.save(basketItem);
            baskets.add(basketItem);
            basket.setBasketList(baskets);
            basketRepository.save(basket);
        }
        else {
            BasketItem item = basketItemRepository.checkItem(shoesColorSize.getId(), basket.getId()).get();
            updateItem(item.getId(), shoes_id, color_id, size_id, quantity + item.getQuantity());
        }
//        throw new IllegalArgumentException("이미 장바구니에 담긴 상품입니다.");
    }

    @Transactional
    public void deleteItem(Long id){
        Optional<BasketItem> basketEntity = basketItemRepository.findById(id);
        basketEntity.ifPresent(selectItem ->{
            Basket basket = selectItem.getBasket();
            Set<BasketItem> baskets = basket.getBasketList();
            basketItemRepository.delete(selectItem);
            baskets.remove(selectItem);
            basketRepository.save(basket);
        });
    }

    @Transactional
    public void updateItem(Long id, Long shoes_id, String color_id, Integer size_id, Integer quantity){
        Optional<BasketItem> basketEntity = basketItemRepository.findById(id);

        basketEntity.ifPresent(selectItem -> {
            Shoes shoes = shoesRepository.findById(shoes_id);
            Optional<ShoesColor> shoescolorEntity = shoesColorRepository.findShoesColor(shoes.getId(), color_id);
            ShoesColorSize shoesColorSize = shoesColorSizeRepository.findShoesColorSize(shoescolorEntity.get().getId(), size_id).get();

            Basket basket = selectItem.getBasket();
            Set<BasketItem> baskets = basket.getBasketList();

            baskets.remove(selectItem);

            selectItem.setItem(shoesColorSize);
            selectItem.setQuantity(quantity);
            selectItem.setBasket(selectItem.getBasket());

            basketItemRepository.save(selectItem);

            baskets.add(selectItem);
            basket.setBasketList(baskets);
            basketRepository.save(basket);

//            else throw new IllegalArgumentException("이미 장바구니에 담긴 상품입니다.");
        });
    }

    public Object allItems(Long member_id){
        Optional<Member> memberEntity = memberRepository.findById(member_id);
        Member member = memberEntity.get();
        Basket basket = member.getBasket();
        if(basket == null) return null;
        Set<BasketItem> items = basket.getBasketList();

        List<BasketDto> list = new ArrayList<>();
        items.forEach(i-> {
            BasketDto temp = new BasketDto(i.getId(), i.getItem(), i.getQuantity());
            list.add(temp);
        });
        return list;
    }

    public void allDelete(Long member_id){
        Member member = memberRepository.findById(member_id).get();
        Basket basket = member.getBasket();
        Set<BasketItem> baskets = basket.getBasketList();
        baskets.forEach(i -> {
            basketItemRepository.delete(i);
        });
        basket.getBasketList().clear();
        basketRepository.save(basket);
    }
}
