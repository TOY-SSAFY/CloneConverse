package com.ssafy.cloneconverse.domain.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.domain.entity.QMember;
import org.springframework.stereotype.Repository;

//Query DSL 환경 test
@Repository
public class MemberRepository2Impl implements MemberRepository2 {

    private JPAQueryFactory jpaQueryFactory;

    @Override
    public Member findByEmail(String email) {
        QMember m = QMember.member;
        return jpaQueryFactory.selectFrom(m).where(m.email.eq(email)).fetchOne();
    }

    public MemberRepository2Impl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }
}
