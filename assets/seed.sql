UPDATE `sequelize_passport`.`users`
SET
 `status` = "active",
 `age` = "45-54",
 `sex` = "man",
 `state` = "NY",
 `zip` = "99999",
 `income` = "$50-74,999",
 `marital_status` = "family",
 `movies` = "true",
 `music` = "false",
 `sports` = "false",
 `fashion` = "true",
 `social` = "true"
WHERE `users`.`id` = 1;


UPDATE `sequelize_passport`
SET
 `status` = "active",
 `age` = "25-34",
 `sex` = "man",
 `state` = "NY",
 `zip` = "99999",
 `income` = "$125-149,999",
 `marital_status` = "single",
 `movies` = "true",
 `music` = "false",
 `sports` = "false",
 `fashion` = "true",
 `social` = "true"
WHERE `users`.`id` = 2;


UPDATE `sequelize_passport`
SET
 `status` = "active",
 `age` = "18-24",
 `sex` = "man",
 `state` = "NY",
 `zip` = "99999",
 `income` = "<$39,999k",
 `marital_status` = "family",
 `movies` = "true",
 `music` = "false",
 `sports` = "false",
 `fashion` = "true",
 `social` = "false"
WHERE `users`.`id` = 3;


UPDATE `sequelize_passport`
SET
 `status` = "active",
 `age` = "45-54",
 `sex` = "man",
 `state` = "NY",
 `zip` = "99999",
 `income` = "$50-74,999",
 `marital_status` = "family",
 `movies` = "true",
 `music` = "false",
 `sports` = "false",
 `fashion` = "true",
 `social` = "true"
WHERE `users`.`id` = 4;