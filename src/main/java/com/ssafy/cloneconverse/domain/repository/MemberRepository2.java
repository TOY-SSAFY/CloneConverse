package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.Member;

//Query DSL 환경 test
public interface MemberRepository2 {
    Member findByEmail(String email);
}
