package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.domain.repository.MemberRepository;
import com.ssafy.cloneconverse.dto.MemberDto;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthorityService authorityService;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, AuthorityService authorityService) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityService = authorityService;
    }

    @Transactional
    public Member joinMember(MemberDto memberDto) {
        memberDto.setPassword(passwordEncoder.encode(memberDto.getPassword()));
        return memberRepository.save(dtoToEntity(memberDto));
    }
    @Transactional
    public MemberDto readMember(MemberDto param) {
        Member member = memberRepository.findByEmail(param.getEmail()).get();
        return new MemberDto(member.getId(), member.getEmail(), member.getPassword(), member.getName(), member.getPhone(), member.getBday(), member.getGender());
    }

    @Transactional
    public Member updateMember(MemberDto param) {
        Member member = memberRepository.findByEmail(param.getEmail()).get();
        // 이거 원래 이렇게 다 체크해줘야함??
        if(param.getId() == null) param.setId(member.getId());
        if(param.getPassword() == null) param.setPassword(member.getPassword());
        else{
            param.setPassword(passwordEncoder.encode(param.getPassword()));
        }
        if(param.getName() == null) param.setName(member.getName());
        if(param.getPhone() == null) param.setPhone(member.getPhone());
        if(param.getBday() == null) param.setBday(member.getBday());
        if(param.getGender() == null) param.setGender(member.getGender());
        return memberRepository.save(new Member(param.getId(), param.getEmail(), param.getPassword(), param.getName(), param.getPhone(), param.getBday(), param.getGender()));
    }
    @Transactional
    public void deleteMember(String email) {
        memberRepository.delete(this.memberRepository.findByEmail(email).get());
    }

    public Member dtoToEntity(MemberDto memberDto){
        return new Member(memberDto.getId(), memberDto.getEmail(), memberDto.getPassword(), memberDto.getName(), memberDto.getPhone(), memberDto.getBday(), memberDto.getGender());
    }
}
