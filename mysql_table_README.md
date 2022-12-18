# mysql -tables
- 连接数据库
mysql -uroot -p
- 退出数据库
mysql exit / Ctrl+c

- 查看表
show tables;

- 创建表
-- int unsigned 无符号整形
-- auto_increment 表示自增跟主键在一起
-- not null 表示不能为空
-- primary key 表示主键
-- default 默认值

create table 表名(字段 类型 约束[,字段 类型 约束]);
create table cate(name varchar(50) not null, age int unsigned);

- 描述表
desc 表名

- 修改表-添加字段
alter table 表名 add 字段名 类型 约束;
alter table cate add mascot varchar(50) 约束;

- 修改表-修改字段（不重命名）
alter table 表名 modify 字段名 类型 约束;
alter table cate modify mascot varchar(50) 约束;

- 修改表-修改字段（重命名）
alter table 表名 modify 原字段名 新字段名 类型 约束;
alter table cate change mascot testnew varchar(50) 约束;

- 修改表-删除字段
alter table 表名 drop 列名;
alter table cate drop mascot;

- 删除表
drop table cate

- 类型
decimal 浮点数
enum 枚举

- 表增删改查

- 增
-- 全列插入
-- insert into 表名(字段名1, 字段名2) values(值1, 值2);
-- 主键字段 可以用 0 null default 来占位


-- 全部插入
-- insert into 表名 values(值...);
insert into cate values(3, 'test');

-- 部分插入
insert into 表名(列1...) values(值1, ...);

-- 多行插入
insert into 表名(列1) values(值), (值);


