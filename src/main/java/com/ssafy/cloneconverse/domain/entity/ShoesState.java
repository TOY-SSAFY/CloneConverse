package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Getter
@Entity
@Table(name = "shoes_state")
public class ShoesState {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shoes_state_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "shoes_id")
    private Shoes shoes;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="state_id")
    private State state;

    public ShoesState() {}

    public ShoesState(Long id, State state) {
        this(id, null, state);
    }

    public ShoesState(Long id, Shoes shoes, State state) {
        this.id = id;
        this.shoes = shoes;
        this.state = state;
    }

    @Override
    public String toString() {
        return "ShoesState{" +
                "id=" + id +
                ", shoes=" + shoes +
                ", state=" + state +
                '}';
    }
}
