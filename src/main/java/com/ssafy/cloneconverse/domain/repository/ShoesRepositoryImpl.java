package com.ssafy.cloneconverse.domain.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.cloneconverse.domain.entity.*;
import com.ssafy.cloneconverse.dto.*;
import com.ssafy.cloneconverse.util.SaveUtil;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

import static com.ssafy.cloneconverse.domain.entity.QShoes.shoes;
import static com.ssafy.cloneconverse.domain.entity.QShoesColor.shoesColor;
import static com.ssafy.cloneconverse.domain.entity.QShoesColorSize.shoesColorSize;
import static com.ssafy.cloneconverse.domain.entity.QShoesState.shoesState;
import static com.ssafy.cloneconverse.domain.entity.QShoesGender.shoesGender;
@Repository
public class ShoesRepositoryImpl implements ShoesRepository{
    private final JPAQueryFactory jpaQueryFactory;
    private final SaveUtil saveUtil;

    public ShoesRepositoryImpl(JPAQueryFactory jpaQueryFactory, SaveUtil saveUtil) {
        this.jpaQueryFactory = jpaQueryFactory;
        this.saveUtil = saveUtil;
    }

    @Override
    public List<ShoesDto> getShoesList(Integer page, int pagingSize){
        jpaQueryFactory.selectFrom(shoesColor).leftJoin(shoesColor.shoesColorSizes, shoesColorSize).fetchJoin();
        jpaQueryFactory.selectFrom(shoes).leftJoin(shoes.shoesColors, shoesColor).fetchJoin();
        List<Shoes> fetch = jpaQueryFactory
                .selectDistinct(shoes)
                .from(shoes)
                .leftJoin(shoes.shoesStates, shoesState)
                .fetchJoin()
                .orderBy(shoes.shoesReleaseDate.desc())
                .offset(page - 1).limit(pagingSize)
                .fetch();
        return saveUtil.saveShoesDto(fetch);
    }


    @Override
    public Shoes findById(Long shoes_id) {
        return jpaQueryFactory
                .select(shoes)
                .from(shoes)
                .where(shoes.id.eq(shoes_id))
                .fetchOne();
    }

    @Override
    public List<ShoesDto> getShoesFilterList(FilterDto filterDto, int pagingSize) {
        jpaQueryFactory.selectFrom(shoesColor).leftJoin(shoesColor.shoesColorSizes, shoesColorSize).fetchJoin();
        jpaQueryFactory.selectFrom(shoes).leftJoin(shoes.shoesGenders, shoesGender).fetchJoin();
        List<Shoes> fetch = jpaQueryFactory.selectDistinct(shoes)
                .from(shoes)
                .leftJoin(shoes.shoesColors, shoesColor)
                .fetchJoin()
                .where(genderEq(filterDto.getGender())
                        ,colorEq(filterDto.getColor())
                        ,typeEq(filterDto.getType())
                        ,silhouetteEq(filterDto.getSilhouette()))
                .orderBy(shoes.shoesReleaseDate.desc())
                .offset(filterDto.getPage() - 1).limit(pagingSize)
                .fetch();
        return saveUtil.saveShoesDto(fetch);
    }

    private BooleanBuilder silhouetteEq(List<String> silhouette) {
        BooleanBuilder builder = new BooleanBuilder();
        for (String s : silhouette) {
            builder.or(shoes.shoesSilhouette.eq(s));
        }
        return builder;
    }

    private BooleanBuilder typeEq(List<String> type) {
        BooleanBuilder builder = new BooleanBuilder();
        for (String s : type) {
            builder.or(shoes.shoesType.eq(s));
        }
        return builder;
    }

    private BooleanBuilder colorEq(List<String> color) {
        BooleanBuilder builder = new BooleanBuilder();
        for (String s : color) {
            builder.or(shoesColor.color.id.eq(s));
        }
        return builder;
    }

    private BooleanBuilder genderEq(List<String> gender) {
        BooleanBuilder builder = new BooleanBuilder();
        for (String s : gender) {
            builder.or(shoesGender.gender.id.eq(s));
        }
        return builder;
    }


}

