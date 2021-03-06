package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.entity.*;
import com.ssafy.cloneconverse.domain.repository.*;
import com.ssafy.cloneconverse.dto.BasketDto;
import com.ssafy.cloneconverse.dto.ItemDto;
import org.springframework.beans.factory.annotation.Autowired;
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
    public void addItem(Member member, Long shoes_id, String color_id, Integer size_id, Integer quantity){
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
        List<BasketItem> baskets = basket.getBasketList();

        if(basketItemRepository.checkCount(shoesColorSize.getId(), basket.getId()) == 0){
            basketItemRepository.save(basketItem);
            baskets.add(basketItem);
            baskets.sort(new Comparator<BasketItem>() {
                @Override
                public int compare(BasketItem o1, BasketItem o2) {
                    return (int)(o1.getId() - o2.getId());
                }
            });
            basket.setBasketList(baskets);
            basketRepository.save(basket);
        }
        else {
            BasketItem item = basketItemRepository.checkItem(shoesColorSize.getId(), basket.getId()).get();
            updateItem(item.getId(), shoes_id, color_id, size_id, quantity + item.getQuantity());
        }
//        throw new IllegalArgumentException("?????? ??????????????? ?????? ???????????????.");
    }

    @Transactional
    public void deleteItem(Long id){
        Optional<BasketItem> basketEntity = basketItemRepository.findById(id);
        basketEntity.ifPresent(selectItem ->{
            Basket basket = selectItem.getBasket();
            List<BasketItem> baskets = basket.getBasketList();
            basketItemRepository.delete(selectItem);
            baskets.remove(selectItem);
            baskets.sort(new Comparator<BasketItem>() {
                @Override
                public int compare(BasketItem o1, BasketItem o2) {
                    return (int)(o1.getId() - o2.getId());
                }
            });
            basketRepository.save(basket);
        });
    }

    @Transactional
    public void updateItem(Long id, Long shoes_id, String color_id, Integer size_id, Integer quantity){
        Optional<BasketItem> basketEntity = basketItemRepository.findById(id);

        basketEntity.ifPresent(selectItem -> {
            Shoes shoes = shoesRepository.findById(shoes_id);
            if(shoes == null) try {
                throw new IllegalAccessException("?????? ???????????????");
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
            Optional<ShoesColor> shoescolorEntity = shoesColorRepository.findShoesColor(shoes.getId(), color_id);
            System.out.println(shoescolorEntity);
            if(shoescolorEntity == null) try {
                throw new IllegalAccessException("?????? ???????????????");
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }

            ShoesColorSize shoesColorSize = shoesColorSizeRepository.findShoesColorSize(shoescolorEntity.get().getId(), size_id).get();
            if(shoesColorSize == null)try {
                throw new IllegalAccessException("?????? ??????????????????");
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
            Basket basket = selectItem.getBasket();
            List<BasketItem> baskets = basket.getBasketList();

            baskets.remove(selectItem);

            selectItem.setItem(shoesColorSize);
            selectItem.setQuantity(quantity);
            selectItem.setBasket(selectItem.getBasket());

            basketItemRepository.save(selectItem);

            baskets.add(selectItem);
            basket.setBasketList(baskets);
            basketRepository.save(basket);

//            else throw new IllegalArgumentException("?????? ??????????????? ?????? ???????????????.");
        });
    }

    public Object allItems(Member member){
        Basket basket = member.getBasket();
        if(basket == null) return null;
        List<BasketItem> items = basket.getBasketList();

        List<BasketDto> list = new ArrayList<>();
        items.forEach(i-> {
            Shoes shoes = i.getItem().getShoesColor().getShoes();
            ShoesColor color = i.getItem().getShoesColor();
            ItemDto item = new ItemDto(shoes.getId(), shoes.getShoesName(), color.getId(), color.getColor().getId(), color.getImagePath(), color.getImageName(), shoes.getShoesPrice(), i.getItem().getSize().getId(), i.getItem().getStock(), i.getQuantity());
            BasketDto temp = new BasketDto(i.getId(), item, i.getQuantity());
            list.add(temp);
        });
        return list;
    }

    public void allDelete(Member member){
        Basket basket = member.getBasket();
        List<BasketItem> baskets = basket.getBasketList();
        baskets.forEach(i -> {
            basketItemRepository.delete(i);
        });
        basket.getBasketList().clear();
        basketRepository.save(basket);
    }
}
