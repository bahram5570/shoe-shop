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


export const data = {
  s1: {
    id: 's1',
    brand: 'Podium',
    price: 20,
    off: 0,
    likes: 0,
    images: [s1_cover, s1_a, s1_b],
    category: 'Sneaker',
    colors: [{ name: 'Blue', code: '#0000ff' }],
    size: [39, 40],
    qt: 5,
    description:
      "Step out in ultimate comfort and style in a pair of these men's blue lace up casual shoes by Podium. They showcase fine stitch detailing, a rounded toe front, comfortable memory foam insole and a gripped outer sole. Perfect for both sportswear and everyday use.",
  },
  s2: {
    brand: 'Penguin',
    category: 'Sneaker',
    price: 52,
    off: 20,
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'Black', code: '#000000' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [39, 40, 41, 42],
    qt: 2,
    likes: 0,
    description:
      'Designed by Original Penguin, these men’s trainers embrace a black upper with classic Penguin branding. They feature a lace up fastening for a secure fit, while their memory foam insole provides all day comfort.',
    images: [s2_cover, s2_a, s2_b],
    id: 's2',
  },
  s3: {
    brand: 'Skechers',
    category: 'Sneaker',
    price: 70,
    off: 5,
    colors: [
      { name: 'Black', code: '#000000' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [38, 39, 40, 41, 42],
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
    price: 32,
    off: 10,
    colors: [
      { name: 'Green', code: '#00ff00' },
      { name: 'White', code: '#ffffff' },
    ],
    size: [40, 41, 42],
    qt: 0,
    likes: 0,
    description:
      "From Lambretta, these men's shoes embrace a white upper with tan detailing. They feature a lace up fastening for a secure fit, while their padded insole and flexible outsole ensures comfort and support beneath your feet.",
    images: [s4_cover, s4_a, s4_b],
    id: 's4',
  },
  o1: {
    brand: 'Beckett',
    category: 'Oxford',
    price: 30,
    off: 3,
    colors: [
      { name: 'Brown', code: '#804000' },
      { name: 'Black', code: '#000000' },
    ],
    size: [40, 41, 42],
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
    price: 78,
    off: 0,
    colors: [
      { name: 'Brown', code: '#804000' },
      { name: 'Grey', code: '#555555' },
      { name: 'Black', code: '#000000' },
    ],
    size: [39, 40, 41],
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
    price: 35,
    off: 5,
    colors: [
      { name: 'Grey', code: '#555555' },
      { name: 'Black', code: '#000000' },
    ],
    size: [41, 42],
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
    price: 42,
    off: 6,
    colors: [{ name: 'Black', code: '#000000' }],
    size: [40, 41, 42],
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
    price: 50,
    off: 0,
    colors: [
      { name: 'Brown', code: '#804000' },
      { name: 'Black', code: '#000000' },
    ],
    size: [38, 39, 40, 41],
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
    price: 73,
    off: 5,
    colors: [
      { name: 'Grey', code: '#555555' },
      { name: 'Black', code: '#000000' },
    ],
    size: [40, 41, 42],
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
    price: 68,
    off: 0,
    colors: [
      { name: 'Blue', code: '#0000ff' },
      { name: 'Black', code: '#000000' },
    ],
    size: [39, 40, 41, 42],
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
    price: 46,
    off: 10,
    colors: [
      { name: 'Brown', code: '#804000' },
      { name: 'Black', code: '#000000' },
      { name: 'Grey', code: '#555555' },
    ],
    size: [39, 40, 41],
    qt: 7,
    likes: 0,
    description:
      'By Groundwork Safety Footwear, these unisex safety boots embrace a black leather upper with a lace up fastening for a secure fit. Additionally, they feature a steel toe cap, slip resistant outsole, shock absorption and are oil resistant. They conform to safety regulations EN ISO 20345.',
    images: [b4_cover, b4_a, b4_b],
    id: 'b4',
  },
};
