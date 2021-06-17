package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.entity.BasketEntity;
import com.ssafy.cloneconverse.domain.repository.BasketRespository;
import com.ssafy.cloneconverse.dto.BasketDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class BasketService {
    @Autowired
    private BasketRespository basketRespository;

    @Transactional
    public Long addItem(BasketDto basketDto){
        return basketRespository.save(basketDto.toEntity()).getId();
    }

    @Transactional
    public void deleteItem(Long id){
        Optional<BasketEntity> basketEntity = basketRespository.findById(id);
        basketEntity.ifPresent(selectItem ->{
            basketRespository.delete(selectItem);
        });
    }

    @Transactional
    public Optional<BasketEntity> updateItem(BasketDto basketDto, Long id){
        Optional<BasketEntity> basketEntity = basketRespository.findById(id);

        basketEntity.ifPresent(selectItem -> {
            selectItem.setItem(basketDto.getItem());
            selectItem.setUserid(basketDto.getUserid());
            basketRespository.save(selectItem);
        });

        return basketEntity;
    }

    public List<BasketEntity> allItems(){
        return basketRespository.findAll();
    }

}
