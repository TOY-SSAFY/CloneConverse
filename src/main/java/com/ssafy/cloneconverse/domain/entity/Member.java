package com.ssafy.cloneconverse.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collections;
import java.util.Set;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(length = 30, nullable = false, unique = true)
    private String email;

    @JsonIgnore
    @Column(length = 100, nullable = false)
    private String password;

    @Column(length = 20, nullable = false)
    private String name;

    @Column(length = 20, nullable = false)
    private String phone;

    @Column(length = 20, nullable = false)
    private String bday;

    @Column(length = 20, nullable = false)
    private String gender;

    @Column(name = "activated")
    private boolean activated;

    @ManyToMany
    @JoinTable(
            name = "member_authority",
            joinColumns = {@JoinColumn(name = "member_id", referencedColumnName = "member_id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "basket_id")
    private Basket basket;

    //    Member는 하나의 Wishlist만 가질 수 있고, Wishlist 또한 여러 명의 Member가 함께 사용할 수 없다.
//    따라서 일대일 매핑으로 처리한다.
    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "wishlist_id")
    private Wishlist wishlist;

    @Builder
    public Member(Long id, String email, String password, String name, String phone, String bday, String gender) {
        this(id, email, password, name, phone, bday, gender, true, Collections.singleton(Authority.builder().authorityName("ROLE_USER").build()));
    }

    @Builder
    public Member(Long id, String email, String password, String name, String phone, String bday, String gender, boolean activated, Set<Authority> authorities) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.bday = bday;
        this.gender = gender;
        this.activated = activated;
        this.authorities = authorities;
    }

    public Basket addBasket() {
        Basket basket = new Basket();
        this.basket = basket;
        return this.basket;
    }

    // 멤버 한 명당 위시리스트 한 개 만들기
    public Wishlist addWishlist() {
        Wishlist wishlist = new Wishlist();
        this.wishlist = wishlist;
        return this.wishlist;
    }
}