# Entity Relationship Diagram
![Screenshot](./images/diagram.png)

# Relationship
user กับ code มีความสัมพันธ์เป็น one-to-many เพราะว่า userเดียวสามารถมีcodeได้หลายcode 

item กับ code มีความสัมพันธ์เป็น one-to-many เพราะว่า item แบบเดียวกันสามารถมีcodeได้หลายcode 

item กับ promotion มีความสัมพันธ์เป็น one-to-one เพราะว่า itemแบบเดียวกันสามารถมีpromotionได้แค่แบบเดียว

bundle กับ item มีความสัมพันธ์เป็นแบบ one-to-many เพราะว่า bundleแบบเดียวสามารถมีitemได้หลายแบบ 

# Description
Table user: เก็บข้อมูลของผู้ใช้ระบบเบื้องต้น ชื่อ,เบอร์โทร,email,ที่อยู่,

Table item:เก็บข้อมูลเกี่ยวกับสินค้าที่ขาย, ชื่อ, รายละเอียด, ราคา, วันที่เปิดขาย, วันที่หยุดขาย เป็น table หลักที่เก็บข้อมูลitem

Table code: ใช้เก็บข้อมูลเกี่ยวกับcodeที่ลูกค้าได้รับเมื่อซื้อสินค้าโดย field code นั้นเป็นcodeที่ลูกค้าได้รับหลังจากซื้อitemไป โดยใช้ field code เป็น primary key แทน code_idไปเลยเพราะ code นั้นเป็น unique อยู่แล้ว นอกจากนี้ยังเชื่อมโยงกับ table item ผ่าน code_item_id. และเชื่อมโยงกับtable user ผ่าน owner_user_id เพื่อแสดงถึงผู้ใช้ที่เป็นเจ้าของโค้ดนั้น ๆ.

Table promotion: เก็บข้อมูลเกี่ยวกับโปรโมชั่น ราคาที่ลดราคาแล้ว, วันที่เริ่ม, วันที่สิ้นสุด. ตารางนี้เชื่อมโยงกับ table item ผ่าน promotion_item_id.

Table bundle: เก็บข้อมูลของ ชุดสินค้าที่ถูกขายพร้อมกันในราคาพิเศษ เชื่อมโยงกับ table item ผ่าน bundle_item_id.


### สาเหตุที่ออกแบบdatabaseแบบที่แสดงด้านบน
การออกแบบแบบนี้จะทำให้ database มีความยืดหยุ่นสูง
และเป็นระบบ เนื่องจากหากต้องการแก้ไข promotion หรือbundle ก็สามารถทำให้แก้ได้ง่ายเพราะถูกแบ่งออกเป็นส่วนๆเอาไว้แล้ว อีกทั้งยังสามารถเพิ่มtableขึ้นมาในอนาคตเพื่อรองรับfeatureใหม่ๆ
ได้โดยไม่กระทบต่อtable อื่นๆ 

# Special Thanks Sequelize UI ❤❤❤
This project was generated with [Sequelize UI](https://github.com/tomjschuster/sequelize-ui). The project is a simple [Node.js](https://nodejs.dev/) server with [Sequelize ORM](https://sequelize.org/).

Be sure to test all code for correctness and to test database migrations in a test environment before deploying to production.

## Running Project

### Prerequesites
- [Node.js](https://nodejs.dev/)
- [PostgreSQL](https://www.postgresql.org/)

### Setup
1. Install dependencies: `npm install`
2. Setup database: `npm run db:up`

### Run
- Local development: `npm run dev`
- Production build: `npm run build && npm start`

## Bug Reports
Please report any bugs with generated code at [Sequelize UI Issues](https://github.com/tomjschuster/sequelize-ui/issues).
