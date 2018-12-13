CREATE TABLE mall_detail_show_img(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    shid  INT,
    img_url VARCHAR(255)
);
INSERT INTO mall_detail_show_img VALUES(null,103,"http://127.0.0.1:3000/img/details/gushi2.png");
INSERT INTO mall_detail_show_img VALUES(null,103,"http://127.0.0.1:3000/img/details/gushi1.webp");

CREATE TABLE mall_detail_spec(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    spid  INT,
    spec VARCHAR(8)
);
INSERT INTO mall_detail_spec VALUES(null,103,"颜色");
INSERT INTO mall_detail_spec VALUES(null,9,"规格");
INSERT INTO mall_detail_spec VALUES(null,18,"颜色");


CREATE TABLE mall_detail_css(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    csid  INT,
    span VARCHAR(255)
);
INSERT INTO mall_detail_css VALUES(null,103,"粉色");
INSERT INTO mall_detail_css VALUES(null,103,"蓝色");


CREATE TABLE mall_detail_p_c(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    pcid  INT,
    price DOUBLE(10,2),
    count VARCHAR(255)
);
INSERT INTO mall_detail_p_c VALUES(null,103,"149","3");
INSERT INTO mall_detail_p_c VALUES(null,103,"149","9");
