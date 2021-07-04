package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.Member;
import org.springframework.stereotype.Repository;

@Repository
public interface EtcRepository {
    Boolean shoesInWishList(Member member, Long shoesColorId);
}
