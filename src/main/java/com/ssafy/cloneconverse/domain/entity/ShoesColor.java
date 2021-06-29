package com.ssafy.cloneconverse.domain.entity;

import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.*;

@Getter
@Entity
@Table(name = "shoes_color")
public class ShoesColor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shoes_color_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "shoes_id")
    private Shoes shoes;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "color_id")
    private Color color;

    @Column(name = "image_path")
    private String imagePath;

    @Column(length = 50, name = "image_name")
    private String imageName;

    @OneToMany(mappedBy = "shoesColor")
    List<ShoesColorSize> shoesColorSizes = new ArrayList<>();

    public ShoesColor() {}

    public ShoesColor(Long id, Color color, String imagePath, String imageName) {
        this(id, null, color, imagePath, imageName);
    }

    public ShoesColor(Long id, Shoes shoes, Color color, String imagePath, String imageName) {
        this.id = id;
        this.shoes = shoes;
        this.color = color;
        this.imagePath = imagePath;
        this.imageName = imageName;
    }

    @Override
    public String toString() {
        return "ShoesColor{" +
                "id=" + id +
                ", shoes=" + shoes +
                ", color=" + color +
                ", imagePath='" + imagePath + '\'' +
                ", imageName='" + imageName + '\'' +
                '}';
    }

}
