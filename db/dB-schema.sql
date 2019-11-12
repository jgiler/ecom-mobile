CREATE DATABASE ecommerce;
USE ecommerce;
CREATE TABLE prices (
  price_id INT AUTO_INCREMENT PRIMARY KEY, 
  price DECIMAL(6, 2)
);
CREATE TABLE products (
  product_id INT AUTO_INCREMENT PRIMARY KEY, 
  product VARCHAR(100), 
  about VARCHAR(100), 
  category VARCHAR(100), 
  price_id INT NOT NULL, 
  FOREIGN KEY(price_id) REFERENCES prices(price_id) ON DELETE CASCADE
);
INSERT INTO products (
  product, about, category, price_id
) 
VALUES 
  (
    'Chill PJs', 'Get our most comfortable silk pajamas.', 
    'Clothes', 1
  ), 
  (
    'Chill Mug', 'Pour your coffee, relax, and drink with our fun chill mug.', 
    'Item', 2
  ), 
  (
    'Chill Bed', 'This bed is perfect for a day of just laying in bed. Comes with a built in tv. Size king.', 
    'Bedroom', 3
  ), 
  (
    'Chill TV', 'Our Best TV', 'Item', 
    4
  ), 
  (
    'Chill pillow', 'Sleep tight or Pillow fight! Customers love this pillow, for it is like a cloud.', 
    'Bedroom', 5
  ), 
  (
    'Chill massage chair', 'Relax, watch tv, and sleep on this top massage chair.', 
    'Item', 6
  ), 
  (
    'Chill foot massager', 'Relax your feet with our quality foot massger.', 
    'Item', 7
  ), 
  (
    'Chill stuffed animals', 'These are our favorite stuffed animals in a set', 
    'Item', 8
  ), 
  (
    'Chill hand massager', 'Calm your hands with our premium hand massager.', 
    'Item', 9
  ), 
  (
    'Chill controller', 'Lost your remote? No problem! Our 4 in 1 controller will do the trick.', 
    'Item', 10
  ), 
  (
    'Chill slippers', 'Chill and walk with our soft slippers.', 
    'Clothes', 11
  ), 
  (
    'Chill neck pillow', 'Chill on the go with our top neck pillow.', 
    'Bedroom', 12
  );
SELECT 
  * 
FROM 
  products;
CREATE TABLE contacts (
  contact_id INT AUTO_INCREMENT PRIMARY KEY, 
  f_name VARCHAR(100), 
  l_name VARCHAR(100), 
  address VARCHAR(255), 
  cell_number VARCHAR(16), 
  email VARCHAR(100), 
  comments VARCHAR(255), 
  product_id INT, 
  FOREIGN KEY(product_id) REFERENCES products(product_id) ON DELETE CASCADE
);
DESC contacts;
INSERT INTO contacts (
  f_name, l_name, address, cell_number, 
  email, comments, product_id
) 
VALUES 
  (
    'J.K.', 'Rowling', '123 Hogwarts Ln', 
    '333-555-9999', 'magicbook@hotmail.com', 
    'This is such a magical site! Thanks for making it', 
    1
  ), 
  (
    'Draco', 'Malfoy', '666 Dungeon Rd', 
    '666-666-6666', 'darkarts@yahoo.com', 
    'This is terrible. You call yourself a software engineer? Pathetic...', 
    null
  ), 
  (
    'Harry', 'Potter', '777 Gryffindor Ct', 
    '777-777-7777', 'halfblood@hotmail.com', 
    'Well done. You should join the Gryffindor team!', 
    11
  ), 
  (
    'Ron', 'Weasley', '64 Chess St', '123-456-7890', 
    'pureblood@gmail.com', 'Great set up. We outta get together and play chess sometime.', 
    9
  ), 
  (
    'Hermoine', 'Granger', '15 Study Ln', 
    '999-999-9999', 'muggleborn@hotmail.com', 
    "It\'s subpar. I could have done it better myself in less time to be honest. Run it through me next time.", 
    2
  ), 
  (
    'Sirius', 'Black', '50 Dementor Rd', 
    '111-111-1111', 'freemeimagoodguy@gmail.com', 
    'Great work. I like it.', 8
  ), 
  (
    'Rubeus', 'Hagrid', ' 32 Hut St', 
    '222-222-2222', 'idoweirdstuff@gmail.com', 
    'I enjoyed it. Can I pay in pumpkins sometime?', 
    6
  ), 
  (
    'Neville', 'Longbottom', '40 Cherry Ln', 
    '333-333-3333', 'awkwardcoolguy@hotmail.com', 
    'hmmmmmmmmmmmmmmmmmmmmmmm', 5
  ), 
  (
    'Severus', 'Snape', '77 Potions Rd', 
    '444-444-4444', 'iseembadbutimgood@gmail.com', 
    'Precision is key. You missed some key points. Drink this potion to better yourself.', 
    3
  ), 
  (
    'Lord', 'Voldemort', '666 Slytherin Cir', 
    '333-666-9999', 'killharrypotter@yahoo.com', 
    "I hacked you to find harry\'s address. I got that bed though. Perfect for monitoring people.", 
    3
  );
SELECT 
  * 
FROM 
  contacts;
SHOW TABLES;
INSERT INTO prices (price) 
VALUES 
  (49.99), 
  (5.99), 
  (3999.99), 
  (1499.99), 
  (9.99), 
  (499.99), 
  (49.99), 
  (9.99), 
  (39.99), 
  (19.99), 
  (9.99), 
  (5.99);
SELECT 
  * 
FROM 
  prices;