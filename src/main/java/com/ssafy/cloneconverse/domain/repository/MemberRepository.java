package com.ssafy.cloneconverse.domain.repository;

import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.dto.MemberDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);
    void save(MemberDto param);
}
