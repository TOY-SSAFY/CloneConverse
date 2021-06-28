package com.ssafy.cloneconverse.domain.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.cloneconverse.domain.entity.*;
import com.ssafy.cloneconverse.dto.FilterDto;
import com.ssafy.cloneconverse.dto.ShoesColorSizeDto;
import com.ssafy.cloneconverse.dto.ShoesDto;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.ssafy.cloneconverse.domain.entity.QShoes.shoes;
import static com.ssafy.cloneconverse.domain.entity.QShoesColor.shoesColor;
import static com.ssafy.cloneconverse.domain.entity.QShoesColorSize.shoesColorSize;
import static com.ssafy.cloneconverse.domain.entity.QShoesState.shoesState;
import static com.ssafy.cloneconverse.domain.entity.QShoesGender.shoesGender;
@Repository
public class ShoesRepositoryImpl implements ShoesRepository{
    private JPAQueryFactory jpaQueryFactory;
    public ShoesRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public List<ShoesDto> getShoesList(Integer page, int pagingSize){
        List<ShoesDto> result = new ArrayList<>();

        jpaQueryFactory.selectFrom(shoesColor).leftJoin(shoesColor.shoesColorSizes, shoesColorSize).fetchJoin().fetch();
        List<Shoes> fetch = jpaQueryFactory
                .selectDistinct(shoes)
                .from(shoes)
                .leftJoin(shoes.shoesColors, shoesColor)
                .leftJoin(shoes.shoesStates, shoesState)
                .fetchJoin()
                .orderBy(shoes.shoesReleaseDate.desc())
                .offset(page - 1).limit(pagingSize)
                .fetch();
        return saveShoesDto(result, fetch);
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
        List<ShoesDto> result = new ArrayList<>();
        jpaQueryFactory.selectFrom(shoesColor).leftJoin(shoesColor.shoesColorSizes, shoesColorSize).fetchJoin().fetch();
        List<Shoes> fetch = jpaQueryFactory.selectDistinct(shoes)
                .from(shoes)
                .leftJoin(shoes.shoesGenders, shoesGender)
                .leftJoin(shoes.shoesColors, shoesColor)
                .fetchJoin()
                .where(genderEq(filterDto.getGender())
                        ,colorEq(filterDto.getColor())
                        ,typeEq(filterDto.getType())
                        ,silhouetteEq(filterDto.getSilhouette()))
                .orderBy(shoes.shoesReleaseDate.desc())
                .offset(filterDto.getPage() - 1).limit(pagingSize)
                .fetch();
        for (Shoes shoes : fetch) {
            System.out.println("shoes = " + shoes);
            for (ShoesColor shoesColor : shoes.getShoesColors()) {
                System.out.println("shoesColor = " + shoesColor);
                for (ShoesColorSize colorSize : shoesColor.getShoesColorSizes()) {
                    System.out.println("colorSize = " + colorSize);
                }
            }
        }
        return saveShoesDto(result, fetch);
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

    private List<ShoesDto> saveShoesDto(List<ShoesDto> result, List<Shoes> fetch) {
        for (Shoes shoes : fetch) {
            List<ShoesGender> shoesGenders = new ArrayList<>();
            List<ShoesColor> shoesColors = new ArrayList<>();
            List<ShoesState> shoesStates = new ArrayList<>();
            List<ShoesColorSizeDto> shoesColorSizes = new ArrayList<>();
            for (ShoesGender shoesGender : shoes.getShoesGenders()) {
                shoesGenders.add(new ShoesGender(shoesGender.getId(), shoesGender.getGender()));
            }
            for (ShoesColor shoesColor : shoes.getShoesColors()) {
                shoesColors.add(new ShoesColor(shoesColor.getId(), shoesColor.getColor(), shoesColor.getImagePath(), shoesColor.getImageName()));
                Map<Integer, Integer> sizeAndStock = new HashMap<>();
                for (ShoesColorSize shoesColorSize : shoesColor.getShoesColorSizes()) {
                    sizeAndStock.put(shoesColorSize.getSize().getId(), shoesColorSize.getStock());
                }
                shoesColorSizes.add(ShoesColorSizeDto.builder()
                                .shoes_id(shoes.getId())
                                .color(shoesColor.getColor().getId())
                                .sizeAndStock(sizeAndStock)
                                .build());
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
                    .shoesColorSizes(shoesColorSizes)
                    .build());
        }
        return result;
    }
}

