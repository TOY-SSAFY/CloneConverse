package com.ssafy.cloneconverse.controller;

import com.ssafy.cloneconverse.domain.entity.Member;
import com.ssafy.cloneconverse.dto.MemberDto;
import com.ssafy.cloneconverse.service.AuthorityService;
import com.ssafy.cloneconverse.service.MemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;
    private final AuthorityService authorityService;

    public MemberController(MemberService memberService, AuthorityService authorityService) {
        this.memberService = memberService;
        this.authorityService = authorityService;
    }

    //  회원가입
    @PostMapping("/join")
    public void join(@RequestBody MemberDto memberDto) {
        memberService.joinMember(memberDto);
    }

    @PostMapping("/update")
    public void update(@RequestBody MemberDto param){
        memberService.updateMember(param);
    }

    @GetMapping("/read")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Member> readMember(){
        return ResponseEntity.ok(authorityService.getMyMemberWithAuthorities().get());
    }

    @GetMapping("/read/{email}")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<Member> readMember(@PathVariable String email){
        return ResponseEntity.ok(authorityService.getMemberWithAuthorities(email).get());
    }

    @PostMapping("/delete")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public void deleteMember(@RequestBody MemberDto param){
        memberService.deleteMember(param);
    }
}