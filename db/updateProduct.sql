update products
set product_name = $2, product_price = $3, product_description = $4, image_url = $5
where id = $1