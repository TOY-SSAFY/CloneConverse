package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "shoes_color")
public class ShoesColor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shoes_color_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "shoes_id")
    private Shoes shoes;

    @ManyToOne
    @JoinColumn(name = "color_id")
    private Color color;

    @Column(length = 30, name = "image_path")
    private String imagePath;

    @Column(length = 30, name = "image_name")
    private String imageName;

    public ShoesColor() {}
    public ShoesColor(Shoes shoes, Color color, String imagePath, String imageName) {
        this.shoes = shoes;
        this.color = color;
        this.imagePath = imagePath;
        this.imageName = imageName;
    }
}
