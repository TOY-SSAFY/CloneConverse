package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.dto.MemberDto;
import com.ssafy.cloneconverse.service.MemberService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class MemberRestController {

    private final MemberService memberService;

    public MemberRestController(MemberService memberService) {
        this.memberService = memberService;
    }

    // 회원가입
//    @PostMapping("/join")
//    public ResponseEntity<User> join(@RequestBody MemberDto memberDto) {
//        return ResponseEntity.ok(memberService.joinMember(memberDto));
//    }

    // 로그인
//    @PostMapping("/login")
//    public String login(@RequestBody MemberDto param) {
//        return memberService.login(param);
//    }

    @PostMapping("/update")
    public void update(@RequestBody MemberDto param){
        memberService.updateMember(param);
    }
    @PostMapping("/read")
    public MemberDto readMember(@RequestBody MemberDto param){
        return memberService.readMember(param);
    }
    @PostMapping("/delete")
    public void deleteMember(@RequestBody MemberDto param){
        memberService.deleteMember(param);
    }
}