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

        List<Shoes> fetch = jpaQueryFactory
                .selectDistinct(s)
                .from(s)
                .leftJoin(s.shoesColors, sc)
                .leftJoin(s.shoesStates, ss)
                .fetchJoin()
                .orderBy(s.shoesReleaseDate.desc())
                .offset(page - 1).limit(pagingSize)
                .fetch();
        for (Shoes shoes : fetch) {
            List<ShoesGender> shoesGenders = new ArrayList<>();
            List<ShoesColor> shoesColors = new ArrayList<>();
            List<ShoesState> shoesStates = new ArrayList<>();
            for (ShoesGender shoesGender : shoes.getShoesGenders()) {
                shoesGenders.add(new ShoesGender(shoesGender.getId(), shoesGender.getGender()));
            }
            for (ShoesColor shoesColor : shoes.getShoesColors()) {
                shoesColors.add(new ShoesColor(shoesColor.getId(), shoesColor.getColor(), shoesColor.getImagePath(), shoesColor.getImageName()));
            }
            for (ShoesState shoesState : shoes.getShoesStates()) {
                shoesStates.add(new ShoesState(shoesState.getId(), shoesState.getState()));
            }
            result.add(ShoesDto.builder()
                    .id(shoes.getId())
                    .shoesName(shoes.getShoesName())
                    .shoesType(shoes.getShoesType())
                    .shoesSilhouette(shoes.getShoesSilhouette())
                    .shoesCategory(shoes.getShoesCategory())
                    .shoesPrice(shoes.getShoesPrice())
                    .shoesReleaseDate(shoes.getShoesReleaseDate())
                    .shoesGenders(shoesGenders)
                    .shoesColors(shoesColors)
                    .shoesStates(shoesStates)
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

