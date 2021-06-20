package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.Member;

public interface MemberRepository2 {
    Member findByEmail(String email);
}
