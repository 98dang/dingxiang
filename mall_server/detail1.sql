USE mall;
CREATE TABLE mall_detail_sweiper_img(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    ewid  INT,
    img_url VARCHAR(255)
);
INSERT INTO mall_detail_sweiper_img VALUES(null,1,"http://127.0.0.1:3000/img/details/um_swi1.jpg");
INSERT INTO mall_detail_sweiper_img VALUES(null,1,"http://127.0.0.1:3000/img/details/um_swi2.jpg");
INSERT INTO mall_detail_sweiper_img VALUES(null,2,"http://127.0.0.1:3000/img/details/pen_swiper1.png");
INSERT INTO mall_detail_sweiper_img VALUES(null,2,"http://127.0.0.1:3000/img/details/pen_swiper2.jpg");

INSERT INTO mall_detail_sweiper_img VALUES(null,103,"http://127.0.0.1:3000/img/details/gushi1.webp");
INSERT INTO mall_detail_sweiper_img VALUES(null,103,"http://127.0.0.1:3000/img/details/gushi2.png");
INSERT INTO mall_detail_sweiper_img VALUES(null,103,"http://127.0.0.1:3000/img/details/gushi3.jpg");
INSERT INTO mall_detail_sweiper_img VALUES(null,103,"http://127.0.0.1:3000/img/details/gushi4.jpg");
INSERT INTO mall_detail_sweiper_img VALUES(null,103,"http://127.0.0.1:3000/img/details/gushi5.jpg");




CREATE TABLE mall_detail_shop(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    sid  INT,
    title VARCHAR(25),
    subtitle VARCHAR(25),
    price DOUBLE(10,2),
    sales INT
);
INSERT INTO mall_detail_shop VALUES(null,1,"丁香园定制雨伞","丁香园",648,1202);
INSERT INTO mall_detail_shop VALUES(null,2,"丁香园定制水笔","丁香园",240,2631);
INSERT INTO mall_detail_shop VALUES(null,103,"小米（MI）米兔故事机mini","葱香园",1788,94);
INSERT INTO mall_detail_shop VALUES(null,18,"丁香园定制微笑杯 新老款随机发送","小身躯 大能量",1320,175);
INSERT INTO mall_detail_shop VALUES(null,11,"丁香园纪念办公套装","办公套装 一套齐全",798,235);
INSERT INTO mall_detail_shop VALUES(null,3,"丁香园定制挂表","夜班平安符",600,1994);
INSERT INTO mall_detail_shop VALUES(null,9,"丁香园定制小米移动电源5000mAh","丁香园定制5000毫安",1080,740);

CREATE TABLE mall_detail_explain_img(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    eid  INT,
    img_url VARCHAR(255)
);
INSERT INTO mall_detail_explain_img VALUES(null,1,"http://127.0.0.1:3000/img/details/explain1.jpg");
INSERT INTO mall_detail_explain_img VALUES(null,1,"http://127.0.0.1:3000/img/details/explain2.jpg");
INSERT INTO mall_detail_explain_img VALUES(null,1,"http://127.0.0.1:3000/img/details/explain3.jpg");
INSERT INTO mall_detail_explain_img VALUES(null,1,"http://127.0.0.1:3000/img/details/explain4.png");

INSERT INTO mall_detail_explain_img VALUES(null,2,"http://127.0.0.1:3000/img/details/pen_exp1.jpg");
INSERT INTO mall_detail_explain_img VALUES(null,2,"http://127.0.0.1:3000/img/details/pen_exp2.jpg");
INSERT INTO mall_detail_explain_img VALUES(null,2,"http://127.0.0.1:3000/img/details/pen_exp3.jpg");
INSERT INTO mall_detail_explain_img VALUES(null,2,"http://127.0.0.1:3000/img/details/pen_exp4.jpg");
INSERT INTO mall_detail_explain_img VALUES(null,2,"http://127.0.0.1:3000/img/details/pen_exp5.jpg");


INSERT INTO mall_detail_explain_img VALUES(null,103,"http://127.0.0.1:3000/img/details/exp_gu1.jpg");
INSERT INTO mall_detail_explain_img VALUES(null,103,"http://127.0.0.1:3000/img/details/exp_gu2.jpg");
INSERT INTO mall_detail_explain_img VALUES(null,103,"http://127.0.0.1:3000/img/details/exp_gu3.jpg");
INSERT INTO mall_detail_explain_img VALUES(13,103,"http://127.0.0.1:3000/img/details/exp_gu4.jpg");
