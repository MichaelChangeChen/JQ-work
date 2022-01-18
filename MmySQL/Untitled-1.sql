SELECT `products`.*,`categories`.`name` 
FROM `products` 
JOIN `categories` 
ON `products`.`category_sid` = `categories`.`sid`

SELECT `products`.*,`categories`.`name` FROM `products` WHERE 1


SELECT p.*,c.`name` 
FROM `products` AS p
JOIN `categories` AS c
ON p.`category_sid` = c.`sid`
WHERE c.`sid` IS NULL



SELECT p.*,c.`name` cate_name
FROM `products` AS p
LEFT JOIN `categories` AS c
ON p.`category_sid` = c.`sid`
WHERE c.`sid` IS NULL

SELECT * FROM `products` WHERE `author` = '%吳%'