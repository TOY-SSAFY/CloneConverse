-- join() 테스트 정보 생성=============================
INSERT INTO authority (authority_name) VALUES ('ROLE_USER');
INSERT INTO authority (authority_name) VALUES ('ROLE_ADMIN');

-- getShoesList() 테스트 정보 생성===================== 
INSERT INTO shoes (shoes_id , shoes_category, shoes_name, shoes_price,shoes_release_date, shoes_silhouette, shoes_type) VALUES (1, '2', '3', '4', '2021-06-23', '6', '7');
INSERT INTO color (color_id) VALUES ('red');
INSERT INTO shoes_color (shoes_color_id, image_name, image_path, color_id, shoes_id) VALUES (1, 'imageName', 'imagePath', 'red', 1);
INSERT INTO shoes_color (shoes_color_id, image_name, image_path, color_id, shoes_id) VALUES (2, '이름.jpg', 'c/ssafy/', 'red', 1);