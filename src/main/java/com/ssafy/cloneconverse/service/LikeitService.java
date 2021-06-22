package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.entity.Likeit;
import com.ssafy.cloneconverse.domain.repository.LikeitRepository;
import com.ssafy.cloneconverse.dto.LikeitDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class LikeitService {
    @Autowired
    private LikeitRepository likeitRepository;

    @Transactional
    public Long addItem(LikeitDto likeitDto){
        return likeitRepository.save(likeitDto.toEntity()).getId();
    }

    @Transactional
    public void deleteItem(Long id){
        Optional<Likeit> likeitEntity = likeitRepository.findById(id);
        likeitEntity.ifPresent(selectItem ->{
            likeitRepository.delete(selectItem);
        });
    }

    public List<Likeit> allItems(){
        return likeitRepository.findAll();
    }
}
