package com.ssafy.cloneconverse.domain.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.cloneconverse.domain.entity.*;
import com.ssafy.cloneconverse.dto.*;
import com.ssafy.cloneconverse.util.SaveUtil;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

import static com.ssafy.cloneconverse.domain.entity.QShoes.shoes;
import static com.ssafy.cloneconverse.domain.entity.QShoesColor.shoesColor;
import static com.ssafy.cloneconverse.domain.entity.QShoesColorSize.shoesColorSize;
import static com.ssafy.cloneconverse.domain.entity.QShoesState.shoesState;

@Repository
public class DetailRepositoryImpl implements DetailRepository {
    private final JPAQueryFactory jpaQueryFactory;
    private final SaveUtil saveUtil;

    public DetailRepositoryImpl(JPAQueryFactory jpaQueryFactory, SaveUtil saveUtil) {
        this.jpaQueryFactory = jpaQueryFactory;
        this.saveUtil = saveUtil;
    }

    @Override
    public Object getShoesDetail(ShoesDto param) {
        Map filterSizes = new HashMap<>();
        jpaQueryFactory.selectFrom(shoesColor).leftJoin(shoesColor.shoesColorSizes, shoesColorSize).fetchJoin();
        QueryResults<Shoes> shoesQueryResults = jpaQueryFactory
                .selectDistinct(shoes)
                .from(shoes)
                .leftJoin(shoes.shoesColors, shoesColor)
                .leftJoin(shoes.shoesStates, shoesState)
                .fetchJoin()
                .where(shoes.id.eq(param.getId()))
                .fetchResults();
        return saveUtil.saveShoesDto(shoesQueryResults.getResults(), shoesQueryResults.getTotal(), filterSizes);
    }
}
