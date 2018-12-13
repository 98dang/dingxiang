USE mall;
CREATE TABLE mall_users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
INSERT INTO mall_users VALUES(null,'dd',md5('123456'));
INSERT INTO mall_users VALUES(null,'wh',md5('123456'));
INSERT INTO mall_users VALUES(null,'lily',md5('123456'));