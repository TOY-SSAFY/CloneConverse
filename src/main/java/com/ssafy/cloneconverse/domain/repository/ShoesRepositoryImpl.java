package com.ssafy.cloneconverse.domain.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.cloneconverse.domain.entity.QShoes;
import com.ssafy.cloneconverse.domain.entity.QShoesColor;
import com.ssafy.cloneconverse.domain.entity.ShoesColor;
import com.ssafy.cloneconverse.dto.ShoesDto;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ShoesRepositoryImpl implements ShoesRepository{
    private JPAQueryFactory jpaQueryFactory;
    public ShoesRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public List<ShoesDto> getShoesList(Integer page, int pagingSize){
        List<ShoesDto> result = new ArrayList<>();
        QShoes s = QShoes.shoes;
        QShoesColor sc = QShoesColor.shoesColor;
        List<ShoesColor> temp = jpaQueryFactory.select(sc)
                .from(sc)
                .innerJoin(sc.shoes, s).fetchJoin()
                .orderBy(s.shoesReleaseDate.desc())
                .offset(page-1).limit(pagingSize)
                .fetch();
        for (ShoesColor shoesColor : temp) {
            result.add(new ShoesDto(shoesColor.getShoes(), shoesColor));
        }
        return result;
    }
}
