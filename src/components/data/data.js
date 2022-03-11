import s1_cover from './images/s1_cover.jpg';
import s1_a from './images/s1_a.jpg';
import s1_b from './images/s1_b.jpg';

import s2_cover from './images/s2_cover.jpg';
import s2_a from './images/s2_a.jpg';
import s2_b from './images/s2_b.jpg';

import s3_cover from './images/s3_cover.jpg';
import s3_a from './images/s3_a.jpg';
import s3_b from './images/s3_b.jpg';

import s4_cover from './images/s4_cover.jpg';
import s4_a from './images/s4_a.jpg';
import s4_b from './images/s4_b.jpg';

import o1_cover from './images/o1_cover.jpg';
import o1_a from './images/o1_a.jpg';
import o1_b from './images/o1_b.jpg';

import o2_cover from './images/o2_cover.jpg';
import o2_a from './images/o2_a.jpg';
import o2_b from './images/o2_b.jpg';

import o3_cover from './images/o3_cover.jpg';
import o3_a from './images/o3_a.jpg';
import o3_b from './images/o3_b.jpg';

import o4_cover from './images/o4_cover.jpg';
import o4_a from './images/o4_a.jpg';
import o4_b from './images/o4_b.jpg';

import b1_cover from './images/b1_cover.jpg';
import b1_a from './images/b1_a.jpg';
import b1_b from './images/b1_b.jpg';

import b2_cover from './images/b2_cover.jpg';
import b2_a from './images/b2_a.jpg';
import b2_b from './images/b2_b.jpg';

import b3_cover from './images/b3_cover.jpg';
import b3_a from './images/b3_a.jpg';
import b3_b from './images/b3_b.jpg';

import b4_cover from './images/b4_cover.jpg';
import b4_a from './images/b4_a.jpg';
import b4_b from './images/b4_b.jpg';

import sw1_cover from './images/sw1_cover.jpg';
import sw1_a from './images/sw1_a.jpg';
import sw1_b from './images/sw1_b.jpg';

import sw2_cover from './images/sw2_cover.jpg';
import sw2_a from './images/sw2_a.jpg';
import sw2_b from './images/sw2_b.jpg';

import sw3_cover from './images/sw3_cover.jpg';
import sw3_a from './images/sw3_a.jpg';
import sw3_b from './images/sw3_b.jpg';

import sw4_cover from './images/sw4_cover.jpg';
import sw4_a from './images/sw4_a.jpg';
import sw4_b from './images/sw4_b.jpg';

import bw1_cover from './images/bw1_cover.jpg';
import bw1_a from './images/bw1_a.jpg';
import bw1_b from './images/bw1_b.jpg';

import bw2_cover from './images/bw2_cover.jpg';
import bw2_a from './images/bw2_a.jpg';
import bw2_b from './images/bw2_b.jpg';

import bw3_cover from './images/bw3_cover.jpg';
import bw3_a from './images/bw3_a.jpg';
import bw3_b from './images/bw3_b.jpg';

import bw4_cover from './images/bw4_cover.jpg';
import bw4_a from './images/bw4_a.jpg';
import bw4_b from './images/bw4_b.jpg';

import bk1_cover from './images/bk1_cover.jpg';
import bk1_a from './images/bk1_a.jpg';
import bk1_b from './images/bk1_b.jpg';

import bk2_cover from './images/bk2_cover.jpg';
import bk2_a from './images/bk2_a.jpg';
import bk2_b from './images/bk2_b.jpg';

import bk3_cover from './images/bk3_cover.jpg';
import bk3_a from './images/bk3_a.jpg';
import bk3_b from './images/bk3_b.jpg';

import bk4_cover from './images/bk4_cover.jpg';
import bk4_a from './images/bk4_a.jpg';
import bk4_b from './images/bk4_b.jpg';

import sk1_cover from './images/sk1_cover.jpg';
import sk1_a from './images/sk1_a.jpg';
import sk1_b from './images/sk1_b.jpg';

import sk2_cover from './images/sk2_cover.jpg';
import sk2_a from './images/sk2_a.jpg';
import sk2_b from './images/sk2_b.jpg';

import sk3_cover from './images/sk3_cover.jpg';
import sk3_a from './images/sk3_a.jpg';
import sk3_b from './images/sk3_b.jpg';

import sk4_cover from './images/sk4_cover.jpg';
import sk4_a from './images/sk4_a.jpg';
import sk4_b from './images/sk4_b.jpg';

export const data = {
  s1: {
    id: 's1',
    brand: 'Podium',
    price: 20,
    off: 0,
    likes: 0,
    images: [s1_cover, s1_a, s1_b],
    category: 'Sneaker',
    name: 'Mens Blue Lace Up Casual Shoe',
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'Green', code: '#00ff00' },
      { name: 'Red', code: '#dd0000' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [39, 40],
    gender: ['Men'],
    qt: 5,
    description:
      "Step out in ultimate comfort and style in a pair of these men's blue lace up casual shoes by Podium. They showcase fine stitch detailing, a rounded toe front, comfortable memory foam insole and a gripped outer sole. Perfect for both sportswear and everyday use.",
  },
  s2: {
    brand: 'Penguin',
    category: 'Sneaker',
    name: 'Steadman Mens Black Trainer',
    price: 52,
    off: 20,
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'Black', code: '#000000' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [39, 40, 41, 42],
    gender: ['Men'],
    qt: 2,
    likes: 1,
    description:
      'Designed by Original Penguin, these men’s trainers embrace a black upper with classic Penguin branding. They feature a lace up fastening for a secure fit, while their memory foam insole provides all day comfort.',
    images: [s2_cover, s2_a, s2_b],
    id: 's2',
  },
  s3: {
    brand: 'Skechers',
    category: 'Sneaker',
    name: 'Skech Air Dynamight Trainer',
    price: 70,
    off: 5,
    colors: [
      { name: 'Black', code: '#000000' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [36, 37, 38, 39, 40, 41, 42],
    gender: ['Men', 'Women'],
    qt: 3,
    likes: 0,
    description:
      'From Skechers, these men’s trainers embrace a black upper with tan and grey detailing in a relaxed fit. They feature a lace up fastening for a secure fit, while their air cooled memory foam insole ensures comfort underfoot.',
    images: [s3_cover, s3_a, s3_b],
    id: 's3',
  },
  s4: {
    brand: 'Lambretta',
    category: 'Sneaker',
    name: 'Sting Mens Lace Up Shoe',
    price: 32,
    off: 10,
    colors: [
      { name: 'Red', code: '#ff0000' },
      { name: 'Green', code: '#00ff00' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [40, 41, 42],
    gender: ['Men'],
    qt: 0,
    likes: 3,
    description:
      "From Lambretta, these men's shoes embrace a white upper with tan detailing. They feature a lace up fastening for a secure fit, while their padded insole and flexible outsole ensures comfort and support beneath your feet.",
    images: [s4_cover, s4_a, s4_b],
    id: 's4',
  },
  o1: {
    brand: 'Beckett',
    category: 'Oxford',
    name: 'Mens Black Gibson Style Lace Up Shoe',
    price: 30,
    off: 3,
    colors: [
      { name: 'Brown', code: '#804000' },
      { name: 'Black', code: '#000000' },
    ],
    size: [40, 41, 42],
    gender: ['Men'],
    qt: 6,
    likes: 0,
    description:
      "This men's black shoe evokes the Gibson style with a rounded toe ensuring plenty of room within and a traditional stitch line across the toe. There is a lace up fastening ensuring a secure fit for all and a low sole for comfort purposes. This style of shoe would be perfect for a classic look at both school and work.",
    images: [o1_cover, o1_a, o1_b],
    id: 'o1',
  },
  o2: {
    brand: 'Cotswold',
    category: 'Oxford',
    name: 'Suedley Mens Brown Leather Lace Up Shoe',
    price: 78,
    off: 0,
    colors: [
      { name: 'Brown', code: '#804000' },
      { name: 'Grey', code: '#555555' },
      { name: 'Black', code: '#000000' },
    ],
    size: [39, 40, 41],
    gender: ['Men'],
    qt: 4,
    likes: 0,
    description:
      'Cotswold Sudeley 2 Waterproof Mens Lace up shoe is perfect for the rainy days. It has a smooth leather upper and has a mirtex membrane in the lining to protect your feet from getting wet. It also has a durable flexible outsole.',
    images: [o2_cover, o2_a, o2_b],
    id: 'o2',
  },
  o3: {
    brand: 'Amblers',
    category: 'Oxford',
    name: 'Unisex FS45 Safety Shoe in Black',
    price: 35,
    off: 5,
    colors: [
      { name: 'Grey', code: '#555555' },
      { name: 'Black', code: '#000000' },
    ],
    size: [41, 42],
    gender: ['Men'],
    qt: 0,
    likes: 0,
    description:
      'By Amblers Safety, unisex shoes in black. Smart formal leather safety shoe, ideal for industrial office wear and uniform. Steel toe, non-metal anti-penetration midsole, antistatic and durable PU outsole. Complies with P SRC S1 EN ISO 20345:2011 Safety Regulations.',
    images: [o3_cover, o3_a, o3_b],
    id: 'o3',
  },
  o4: {
    brand: 'Bottesini',
    category: 'Oxford',
    name: 'Mens Black Lace Up Leather Shoe',
    price: 42,
    off: 6,
    colors: [{ name: 'Black', code: '#000000' }],
    size: [40, 41, 42],
    gender: ['Men'],
    qt: 2,
    likes: 0,
    description:
      "From Bottesini, these men's shoes embrace a black leather upper. They feature a lace up fastening for a secure fit, while their padded insole and light weight outsole ensures comfort underfoot. Perfect for work or a formal occasion.",
    images: [o4_cover, o4_a, o4_b],
    id: 'o4',
  },
  b1: {
    brand: 'Earth Works',
    category: 'Boot',
    name: 'Suedley Mens Brown Leather Lace Up Shoe',
    price: 50,
    off: 0,
    colors: [
      { name: 'Brown', code: '#804000' },
      { name: 'Black', code: '#000000' },
      { name: 'Blue', code: '#0000ff' },
    ],
    size: [38, 39, 40, 41],
    gender: ['Men'],
    qt: 6,
    likes: 0,
    description:
      'By Earth Works Safety Footwear, these men’s safety boots embrace a brown coated leather upper with a lace up fastening. They feature a steel toe cap, steel midsole, slip resistant outsole, shock absorption and are oil resistant. They conform to safety regulations EN ISO 20345.',
    images: [b1_cover, b1_a, b1_b],
    id: 'b1',
  },
  b2: {
    brand: 'CAT',
    category: 'Boot',
    name: 'Mens Median Boot in Black',
    price: 73,
    off: 5,
    colors: [
      { name: 'Grey', code: '#555555' },
      { name: 'Black', code: '#000000' },
      { name: 'Blue', code: '#0000ff' },
      { name: 'Brown', code: '#804000' },
    ],
    size: [40, 41, 42],
    gender: ['Men'],
    qt: 0,
    likes: 0,
    description:
      'By CAT, Striver Mid S3 men’s leather boots in black. The Striver Mid S3 is a smart safety boot with a 200 Joules Steel Toe Cap in premium leather uppers. Including a lightweight chunky PU sole unit, steel midsole - min. 1100N and antistatic protection. they comply with S3 SRC EN ISO 20345:2011 safety standards.',
    images: [b2_cover, b2_a, b2_b],
    id: 'b2',
  },
  b3: {
    brand: 'Amblers',
    category: 'Boot',
    name: 'Mens FS161 Black Waterproof Boot',
    price: 68,
    off: 0,
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'Black', code: '#000000' },
    ],
    size: [39, 40, 41, 42],
    gender: ['Men'],
    qt: 4,
    likes: 0,
    description:
      'By Amblers Safety, mens boots in black. Versatile boot incorporating a steel midsole and padded top. Coloured rubber outsole. Mir-tex waterproof breathable membrane. Features handy pull-on loops on tongue and back. Hardwearing lace holds with speed lacing hooks. Complies with WR SRC S3 EN SIO 20345:2011 Safety Regulations.',
    images: [b3_cover, b3_a, b3_b],
    id: 'b3',
  },
  b4: {
    brand: 'Groundwork',
    category: 'Boot',
    name: 'GR387 Adults Safety Boot in Black',
    price: 46,
    off: 10,
    colors: [
      { name: 'Brown', code: '#804000' },
      { name: 'Black', code: '#000000' },
      { name: 'Grey', code: '#555555' },
    ],
    size: [37, 38, 39, 40, 41],
    gender: ['Men', 'Women'],
    qt: 7,
    likes: 0,
    description:
      'By Groundwork Safety Footwear, these unisex safety boots embrace a black leather upper with a lace up fastening for a secure fit. Additionally, they feature a steel toe cap, slip resistant outsole, shock absorption and are oil resistant. They conform to safety regulations EN ISO 20345.',
    images: [b4_cover, b4_a, b4_b],
    id: 'b4',
  },
  bw1: {
    brand: 'Amblers',
    category: 'Boot',
    name: 'Womens AS601 Lydia in Black',
    price: 44,
    off: 10,
    colors: [
      { name: 'Brown', code: '#804000' },
      { name: 'Black', code: '#000000' },
      { name: 'Grey', code: '#555555' },
    ],
    size: [36, 37, 38, 39, 40, 41],
    gender: ['Women'],
    qt: 3,
    likes: 2,
    description:
      'By Amblers Safety, womens boots in black. Composite lightweight lace up ladies safety boot with quick-access side zip, breathable mesh lining, padded PU comfort collar and dual density PU outsole.',
    images: [bw1_cover, bw1_a, bw1_b],
    id: 'bw1',
  },
  bw2: {
    brand: 'CAT',
    category: 'Boot',
    name: 'Mens & Womens Mae Boot in Grey',
    price: 100,
    off: 5,
    colors: [
      { name: 'Black', code: '#000000' },
      { name: 'Grey', code: '#555555' },
    ],
    size: [36, 37, 38, 39, 40, 41],
    gender: ['Men', 'Women'],
    qt: 2,
    likes: 4,
    description:
      'By CAT, women’s boots in grey. From the high-performing, slip-resistant outsole to its protective steel toe and electrical hazard properties, this chukka boot can easily handle the tough environments of industrial work sites.',
    images: [bw2_cover, bw2_a, bw2_b],
    id: 'bw2',
  },
  bw3: {
    brand: 'Cotswold',
    category: 'Boot',
    name: 'Chipping Womens Lace Up Boot in Black',
    price: 55,
    off: 2,
    colors: [{ name: 'Black', code: '#000000' }],
    size: [38, 39, 40],
    gender: ['Women'],
    qt: 2,
    likes: 0,
    description:
      'A ladies lace up country boot with classic leathers and padded collar, the memory foam footbed adds superior comfort. Chipping is a stylish performer in wet weather with its internal waterproof membrane and rear pull loop.',
    images: [bw3_cover, bw3_a, bw3_b],
    id: 'bw3',
  },
  bw4: {
    brand: 'Skechers',
    category: 'Boot',
    name: 'Mountain Kiss Womens Black Suede Boot',
    price: 60,
    off: 0,
    colors: [
      { name: 'Black', code: '#000000' },
      { name: 'White', code: '#ffffff' },
      { name: 'Grey', code: '#555555' },
    ],
    size: [38, 39, 40],
    gender: ['Women'],
    qt: 0,
    likes: 3,
    description:
      "Designed by Skechers, these women's ankle boots embrace a black suede upper with a faux fur collar and soft warm lining. They feature a lace up fastening for an adjustable fit, while their memory foam insole provides comfort beneath your feet.",
    images: [bw4_cover, bw4_a, bw4_b],
    id: 'bw4',
  },
  sw1: {
    id: 'sw1',
    brand: 'Skechers',
    price: 69,
    off: 5,
    likes: 0,
    images: [sw1_cover, sw1_a, sw1_b],
    category: 'Sneaker',
    name: 'Womens Lace Up Casual Shoe',
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'Green', code: '#00ff00' },
      { name: 'Red', code: '#dd0000' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [38, 39, 40],
    gender: ['Women'],
    qt: 3,
    description:
      "By Skechers, these women's trainers embrace a white knitted upper with pink detailing. They feature a lace up fastening for a secure fit, while their air cooled memory foam insole provides comfort and support underfoot. These trainers are vegan friendly and are machine washable on a cool, gentle cycle.",
  },
  sw2: {
    id: 'sw2',
    brand: 'Podium',
    price: 22,
    off: 0,
    likes: 0,
    images: [sw2_cover, sw2_a, sw2_b],
    category: 'Sneaker',
    name: 'Womens Lace-Up Trainers',
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'Green', code: '#00ff00' },
    ],
    size: [38, 39, 40],
    gender: ['Women'],
    qt: 2,
    description:
      'These trainers will ensure your feet stay comfy on those daily dog walks or your active lifestyle. They provide you with a cushioned grip sole, along with a flexible mesh upper keeping your feet cool. Pink laces and contrast detailing on the sole, offer the shoe a more stylish aesthetic, giving you a trainer that is fashionable yet practical for your daily activities.',
  },
  sw3: {
    id: 'sw3',
    brand: 'Lilley',
    price: 20,
    off: 0,
    likes: 1,
    images: [sw3_cover, sw3_a, sw3_b],
    category: 'Sneaker',
    name: 'Womens Black Sporty Casual Shoe',
    colors: [
      { name: 'Black', code: '#000000' },
      { name: 'Grey', code: '#555555' },
    ],
    size: [38],
    gender: ['Women'],
    qt: 2,
    description:
      "By Lilley, these women's casual shoes embrace a black and grey marl upper with bright pink detailing. They feature bungee laces for an quick slip on fitting, while their memory foam insole and gripped outsole ensures comfort beneath your feet.",
  },
  sw4: {
    id: 'sw4',
    brand: 'Osaga',
    price: 30,
    off: 5,
    likes: 0,
    images: [sw4_cover, sw4_a, sw4_b],
    category: 'Sneaker',
    name: 'Slip On Womens Trainer',
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'Grey', code: '#555555' },
    ],
    size: [38, 39],
    gender: ['Women'],
    qt: 4,
    description:
      "From Osaga, these women's trainers showcase a navy upper, with bright pink linings. They feature a light weight design with a simple slip on fitting with elastic laces, while their memory foam insole provides comfort beneath your feet.",
  },
  bk1: {
    brand: 'SPROX',
    category: 'Boot',
    name: 'Boys Easy Fasten Boot in Camel',
    price: 28,
    off: 5,
    colors: [
      { name: 'Brown', code: '#804000' },
      { name: 'Black', code: '#000000' },
    ],
    size: [32, 33, 34, 35],
    gender: ['Kids'],
    qt: 2,
    likes: 1,
    description:
      'Designed by Sprox, these boys’ boots embrace a camel upper, with navy detailing and faux sheep skin lining. They feature triple touch fasten straps for quick and easy fitting, while their gripped outsole makes these boots perfect for their next adventure.',
    images: [bk1_cover, bk1_a, bk1_b],
    id: 'bk1',
  },
  bk2: {
    brand: 'Trespass',
    category: 'Boot',
    name: 'Gillion II Kids Waterproof Hiking Boot',
    price: 29,
    off: 0,
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'Brown', code: '#804000' },
      { name: 'Black', code: '#000000' },
    ],
    size: [32, 33, 34],
    gender: ['Kids'],
    qt: 3,
    likes: 1,
    description:
      'By Trespass, these sturdy kids hiking boots offer plenty of support. They feature a Tres-Tex waterproof and breathable membrane, arch stabilising and supportive shank, cushioned footbed and a rugged grip sole. Great for outdoor adventures in all weather conditions.',
    images: [bk2_cover, bk2_a, bk2_b],
    id: 'bk2',
  },
  bk3: {
    brand: 'Cotswold',
    category: 'Boot',
    name: 'Nebraska Kids Hiker Boot in Brown Leather',
    price: 59,
    off: 4,
    colors: [
      { name: 'Brown', code: '#804000' },
      { name: 'Black', code: '#000000' },
    ],
    size: [32, 33],
    gender: ['Kids'],
    qt: 1,
    likes: 0,
    description:
      'By Cotswold, Nebraska kids boots in brown. Leather hiking boot from Cotswold with Mir-Tex waterproofing technology. The lining is a breathable, waterproof membrane that gives you the added security that your feet will always stay dry. Slip and oil resistant energy rebounding sole.',
    images: [bk3_cover, bk3_a, bk3_b],
    id: 'bk3',
  },
  bk4: {
    brand: 'SPROX',
    category: 'Boot',
    name: 'Kids Brown Zip Up Boot',
    price: 59,
    off: 0,
    colors: [
      { name: 'Black', code: '#000000' },
      { name: 'White', code: '#ffffff' },
      { name: 'Grey', code: '#555555' },
    ],
    size: [32, 33, 34],
    gender: ['Kids'],
    qt: 0,
    likes: 0,
    description:
      'Get your little one set for the cooler months with these boots from Sprox. They embrace a brown upper with fine stitch detailing, along with a knitted collar for the finishing touch. A zip up fastening makes these boots great for quick and easy fitting.',
    images: [bk4_cover, bk4_a, bk4_b],
    id: 'bk4',
  },
  sk1: {
    id: 'sk1',
    brand: 'Skechers',
    price: 42,
    off: 5,
    likes: 0,
    images: [sk1_cover, sk1_a, sk1_b],
    category: 'Sneaker',
    name: 'Microspec Max Torvix Kids Trainer',
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'Red', code: '#dd0000' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [32, 33, 34],
    gender: ['Kids'],
    qt: 2,
    description:
      'From Skechers, these kids’ trainers embrace a black upper with white brand detailing. They feature both elastic laces and a touch fasten strap for quick and easy fitting, while their lightweight and flexible outsole ensures comfort and support underfoot. These trainers are machine washable on a cool, gentle cycle.',
  },
  sk2: {
    id: 'sk2',
    brand: 'Skechers',
    price: 40,
    off: 0,
    likes: 0,
    images: [sk2_cover, sk2_a, sk2_b],
    category: 'Sneaker',
    name: 'Shark Kids Surf Patrol Grey Trainer',
    colors: [
      { name: 'Grey', code: '#555555' },
      { name: 'Blue', code: '#0000ff' },
      { name: 'Red', code: '#dd0000' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [32, 33, 34],
    gender: ['Kids'],
    qt: 3,
    description:
      "Designed by Skechers, these kids' trainers embrace a grey upper with shark detailing. They feature both elasticated laces and a touch fasten strap for easy fitting, while their air cooled memory foam insole ensures comfort and support beneath their feet. These trainers are machine washable on a cool, gentle cycle.",
  },
  sk3: {
    id: 'sk3',
    brand: 'XL',
    price: 25,
    off: 3,
    likes: 0,
    images: [sk3_cover, sk3_a, sk3_b],
    category: 'Sneaker',
    name: 'Boys White & Royal Blue Easy Fasten Trainer',
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [32, 33, 34],
    gender: ['Kids'],
    qt: 3,
    description:
      'From XL, these boys trainers embrace a white upper with black and royal blue detailing. They feature both elastic laces and a touch fasten strap for quick fitting, while their padded insole and flexible outsole ensures comfort underfoot.',
  },
  sk4: {
    id: 'sk4',
    brand: 'XL',
    price: 20,
    off: 5,
    likes: 4,
    images: [sk4_cover, sk4_a, sk4_b],
    category: 'Sneaker',
    name: 'Kids Easy Fasten Trainers',
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'Green', code: '#00ff00' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [32, 33, 34, 35],
    gender: ['Kids'],
    qt: 2,
    description:
      'Get a sporty look with these kids blue and orange trainers by XL. They embrace a blue mesh upper, with an orange interior and orange gripped sole. For quick and easy fitting there is a touch fasten strap and elasticated laces.',
  },
};
