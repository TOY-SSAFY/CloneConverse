package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.domain.repository.MemberRepository;
import com.ssafy.cloneconverse.dto.MemberDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public MemberDto readMember(MemberDto param) {
        Member member = memberRepository.findByEmail(param.getEmail()).get();
        return new MemberDto(member.getId(), member.getEmail(), member.getPassword(), member.getName(), member.getPhone(), member.getBday(), member.getGender());
    }
    public void updateMember(MemberDto param) {
        Member member = memberRepository.findByEmail(param.getEmail()).get();
        // 이거 원래 이렇게 다 체크해줘야함??
        if(param.getId() == null) param.setId(member.getId());
        if(param.getPassword() == null) param.setPassword(member.getPassword());
        if(param.getName() == null) param.setName(member.getName());
        if(param.getPhone() == null) param.setPhone(member.getPhone());
        if(param.getBday() == null) param.setBday(member.getBday());
        if(param.getGender() == null) param.setGender(member.getGender());
//        memberRepository.save(new Member(param.getId(), param.getEmail(), param.getPassword(), param.getName(), param.getPhone(), param.getBday(), param.getGender()));
    }
    public void deleteMember(MemberDto param) {
        memberRepository.delete(memberRepository.findByEmail(param.getEmail()).get());
    }
}
