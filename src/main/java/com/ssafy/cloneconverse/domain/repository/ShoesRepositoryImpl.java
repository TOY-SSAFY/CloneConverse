package com.ssafy.cloneconverse.domain.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.QueryResults;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.cloneconverse.domain.entity.*;
import com.ssafy.cloneconverse.dto.*;
import com.ssafy.cloneconverse.util.SaveUtil;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.ssafy.cloneconverse.domain.entity.QShoes.shoes;
import static com.ssafy.cloneconverse.domain.entity.QShoesColor.shoesColor;
import static com.ssafy.cloneconverse.domain.entity.QShoesColorSize.shoesColorSize;
import static com.ssafy.cloneconverse.domain.entity.QShoesGender.shoesGender;
@Repository
public class ShoesRepositoryImpl implements ShoesRepository{
    private final JPAQueryFactory jpaQueryFactory;
    private final SaveUtil saveUtil;

    public ShoesRepositoryImpl(JPAQueryFactory jpaQueryFactory, SaveUtil saveUtil) {
        this.jpaQueryFactory = jpaQueryFactory;
        this.saveUtil = saveUtil;
    }

    static public Map<Integer, Boolean> filterSizes;
    @Override
    public Shoes findById(Long shoes_id) {
        return jpaQueryFactory
                .select(shoes)
                .from(shoes)
                .where(shoes.id.eq(shoes_id))
                .fetchOne();
    }

    @Override
    public Object getShoesFilterList(FilterDto filterDto, int pagingSize) {
        filterSizes = new HashMap<>();
        for (Integer size: filterDto.getSize()) {
            filterSizes.put(size, true);
        }
        jpaQueryFactory.selectFrom(shoesColor).leftJoin(shoesColor.shoesColorSizes, shoesColorSize).fetchJoin();
        QueryResults<Shoes> shoesQueryResults = jpaQueryFactory.selectDistinct(shoes)
                .from(shoes)
                .leftJoin(shoes.shoesColors, shoesColor)
                .leftJoin(shoes.shoesGenders, shoesGender)
                .fetchJoin()
                .where(genderEq(filterDto.getGender())
                        , colorEq(filterDto.getColor())
                        , typeEq(filterDto.getType())
                        , silhouetteEq(filterDto.getSilhouette()))
                .orderBy(shoes.shoesReleaseDate.desc())
                .offset((filterDto.getPage() - 1) * pagingSize).limit(pagingSize)
                .fetchResults();
        return saveUtil.saveShoesDto(shoesQueryResults.getResults(), shoesQueryResults.getTotal());
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

