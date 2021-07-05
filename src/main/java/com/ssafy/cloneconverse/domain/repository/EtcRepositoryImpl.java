package com.ssafy.cloneconverse.domain.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.domain.entity.QMember;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.ssafy.cloneconverse.domain.entity.QMember.member;
import static com.ssafy.cloneconverse.domain.entity.QWishlist.wishlist;
import static com.ssafy.cloneconverse.domain.entity.QWishlistShoesColor.wishlistShoesColor;

@Repository
public class EtcRepositoryImpl implements EtcRepository{

    private final JPAQueryFactory jpaQueryFactory;

    public EtcRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public Boolean shoesInWishList(Member member, Long shoesColorId) {
        List<Long> fetch = jpaQueryFactory.select(wishlistShoesColor.id)
                .from(wishlistShoesColor)
                .where(wishlistShoesColor.wishlist.id.in(
                        JPAExpressions.select(wishlist.id)
                                .from(wishlist)
                                .leftJoin(QMember.member)
                                .on(wishlist.id.eq(QMember.member.wishlist.id))
                                .where(memberEq(member.getId()))
                )).fetch();
        return fetch.size() == 0 ? false : true;
    }

    private BooleanExpression memberEq(Long id) {
        return id != null ? member.id.eq(id) : null;
    }
}
