package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Getter
@Entity
@Table(name = "shoes_color_size")
public class ShoesColorSize {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shoes_color_size_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "shoes_color_id")
    private ShoesColor shoesColor;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "size_id")
    private Size size;

    @Column(name = "stock")
    private Integer stock;

    public ShoesColorSize() {}


    public ShoesColorSize(Long id, ShoesColor shoesColor, Size size, Integer stock) {
        this.id = id;
        this.shoesColor = shoesColor;
        this.size = size;
        this.stock = stock;
    }

    @Override
    public String toString() {
        return "ShoesColorSize{" +
                "id=" + id +
                ", shoesColor=" + shoesColor +
                ", size=" + size +
                ", stock=" + stock +
                '}';
    }
}
