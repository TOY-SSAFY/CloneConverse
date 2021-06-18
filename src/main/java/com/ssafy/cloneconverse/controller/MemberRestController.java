package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.dto.MemberDto;
import com.ssafy.cloneconverse.service.MemberService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin
@RestController
public class MemberRestController {

    private final MemberService memberService;

    public MemberRestController(MemberService memberService) {
        this.memberService = memberService;
    }

    // 회원가입
    @PostMapping("/join")
    public Long join(@RequestBody MemberDto memberDto) {
        return memberService.joinMember(memberDto);
    }

    // 로그인
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> param) {
        return memberService.login(param);
    }
}