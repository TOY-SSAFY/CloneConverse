package com.ssafy.cloneconverse.service;

import com.ssafy.cloneconverse.domain.Role;
import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.domain.repository.MemberRepository;
import com.ssafy.cloneconverse.dto.MemberDto;
import com.ssafy.cloneconverse.util.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class MemberService implements UserDetailsService {
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private PasswordEncoder passwordEncoder;
//    @Autowired
//    private MemberRepository2 memberRepository2;

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    public String passwordEncoder(String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
    }
    @Transactional
    public Long joinMember(MemberDto memberDto) {
        memberDto.setPassword(passwordEncoder(memberDto.getPassword()));
        return memberRepository.save(memberDto.toEntity()).getId();
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Member> memberEntityWrapper = memberRepository.findByEmail(email);
        Member member = memberEntityWrapper.get();
//        QueryDSL 테스트
//        Member member = memberRepository2.findByEmail(email);
        List<GrantedAuthority> authorities = new ArrayList<>();

        if (("admin@example.com").equals(email)) {
            authorities.add(new SimpleGrantedAuthority(Role.ADMIN.getValue()));
        } else {
            authorities.add(new SimpleGrantedAuthority(Role.MEMBER.getValue()));
        }

        return new User(member.getEmail(), member.getPassword(), authorities);
    }

    public String login(Map<String, String> param) {
        UserDetails userDetails = loadUserByUsername(param.get("email"));
        if (!passwordEncoder.matches(param.get("password"), userDetails.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(userDetails.getUsername(), userDetails.getAuthorities());
    }

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
        memberRepository.save(new Member(param.getId(), param.getEmail(), param.getPassword(), param.getName(), param.getPhone(), param.getBday(), param.getGender()));
    }
    public void deleteMember(MemberDto param) {
        memberRepository.delete(memberRepository.findByEmail(param.getEmail()).get());
    }
}
