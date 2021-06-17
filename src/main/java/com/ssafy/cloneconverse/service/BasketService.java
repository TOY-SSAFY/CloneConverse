package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.entity.BasketEntity;
import com.ssafy.cloneconverse.domain.repository.BasketRepository;
import com.ssafy.cloneconverse.dto.BasketDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class BasketService {
    @Autowired
    private BasketRepository basketRepository;

    @Transactional
    public Long addItem(BasketDto basketDto){
        return basketRepository.save(basketDto.toEntity()).getId();
    }

    @Transactional
    public void deleteItem(Long id){
        Optional<BasketEntity> basketEntity = basketRepository.findById(id);
        basketEntity.ifPresent(selectItem ->{
            basketRepository.delete(selectItem);
        });
    }

    @Transactional
    public Optional<BasketEntity> updateItem(BasketDto basketDto, Long id){
        Optional<BasketEntity> basketEntity = basketRepository.findById(id);

        basketEntity.ifPresent(selectItem -> {
            selectItem.setItem(basketDto.getItem());
            selectItem.setUserid(basketDto.getUserid());
            basketRepository.save(selectItem);
        });

        return basketEntity;
    }

    public List<BasketEntity> allItems(){
        return basketRepository.findAll();
    }

}
