package com.ssafy.cloneconverse.domain.repository;

import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.cloneconverse.domain.entity.*;
import com.ssafy.cloneconverse.dto.ShoesDto;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
        QShoesState ss = QShoesState.shoesState;
        QShoesColorSize scs = QShoesColorSize.shoesColorSize;
        List<Tuple> fetch = jpaQueryFactory.selectDistinct(ss, scs)
                .from(sc, ss, scs)
                .innerJoin(sc.shoes, s)
                .innerJoin(ss.shoes, s)
                .innerJoin(scs.shoesColor, sc)
                .orderBy(s.shoesReleaseDate.desc())
                .offset(page - 1).limit(pagingSize)
                .fetch();
        for (Tuple tuple : fetch) {
            ShoesState shoesState = tuple.get(ss);
            ShoesColorSize shoesColorSize = tuple.get(scs);
            ShoesColor shoesColor = shoesColorSize.getShoesColor();
            Shoes shoes = shoesColor.getShoes();

            result.add(ShoesDto.builder()
                    .shoesName(shoes.getShoesName())
                    .shoesType(shoes.getShoesType())
                    .shoesSilhouette(shoes.getShoesSilhouette())
                    .shoesCategory(shoes.getShoesCategory())
                    .shoesPrice(shoes.getShoesPrice())
                    .shoesReleaseDate(shoes.getShoesReleaseDate())
                    .imagePath(shoesColor.getImagePath())
                    .imageName(shoesColor.getImageName())
                    .shoesColorId(shoesColor.getId())
                    .color(shoesColor.getColor().getId())
                    .state(shoesState.getState().getId())
                    .stock(shoesColorSize.getStock())
                    .build());
        }
        return result;
    }

    @Override
    public Shoes findById(Long shoes_id) {
        QShoes s = QShoes.shoes;
        List<Shoes> shoes = jpaQueryFactory.select(s).from(s).where(s.id.eq(shoes_id)).fetch();
        return shoes.get(0);
    }
}
