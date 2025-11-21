
// ====================== DỮ LIỆU ======================
const dishes = {
  vi: ["Mì Quảng", "Cao Lầu", "Bún Chả Cá", "Bánh Tráng Cuốn Thịt Heo", "Bánh Xèo", "Nem Lụi", "Kem Bơ", "Chả Bò", "Bánh Tráng Kẹp", "Gỏi Cá Nam Ô", "Bánh Bèo", "Bánh Bột Lọc", "Bánh Tráng Đại Lộc", "Bánh Mì Hội An", "Bánh Tổ", "Chè Xoa Xoa Hạt Lựu", "Ốc Hút", "Mít Trộn", "Ram Cuốn Lá Cải", "Mực Rim Me Chua Cay", "Mực Một Nắng", "Bê Thui", "Bánh Căn"],
  en: ["Mi Quang", "Cao Lau", "Da Nang Fish Cake Noodle Soup", "Pork Rice Paper Roll", "Vietnamese Crispy Pancake", "Grilled Pork Skewers", "Avocado Ice Cream", "Da Nang Beef Roll", "Vietnamese Grilled Rice Paper", "Nam O Fish Salad", "Vietnamese Steamed Rice Cake","Vietnamese Tapioca Dumpling","Dai Loc Rice Paper",  "Hoi An Baguette", "Sticky Rice Cake","Vietnamese Dessert Soup","Snail Dish", "Jackfruit Salad","Spring Rolls Wrapped in Cabbage Leaves", "Sun-Dried Squid", "Roasted Veal", "Banh Can" ],
  zh: ["米广面","高炉面","岘港鱼饼米线","猪肉米纸卷","越南煎饼","烤猪肉串","牛油果冰淇淋","岘港牛肉卷","夹心米纸","南澳鱼沙拉","越南蒸米糕","越南木薯饺","大乐米纸","会安法棍","年糕","西越甜汤","越南炒螺","菠萝蜜沙拉","白菜叶春卷","一晒鱿鱼","烤小牛肉","烤小饼"],
  ja: ["ミークアン", "カオラウ", "ブンチャーカー", "バインチャンクオンティットヘオ", "バインセオ", "ネムルイ", "アボカドアイスクリーム", "チャーボー", "バインチャンケップ", "ナムオ魚サラダ", "バインベオ", "バインボットロック", "ダイロックのライスペーパー", "ホイアンバインミー", "バイントー", "チェー・ソアソア・ハットルー", "オックフット", "ミットチョン", "キャベツの葉で巻いた揚げ春巻き", "一夜干しイカ", "ロースト仔牛肉", "バインカン"],
  ko: ["미꽝","카오라우","분짜까","반짱쿠온티트헤오","반쎄오","넴루이","아보카도 아이스크림","차보","반짱껍","남오 생선 샐러드","반베오","반보트록","다이록 쌀종이","호이안 반미","반토","체 소아소아 하트루","옥헛","밋쫑","배추잎에 싸서 튀긴 롤","한 번 건조한 오징어","구운 송아지 고기","반칸"]
};

const foodData = {
  vi: {
    "mì quảng": `
    Mì Quảng là món ăn biểu tượng của Đà Nẵng và Quảng Nam, nổi bật với sợi mì vàng bản to, làm từ bột gạo xay mịn. Nước dùng ít nhưng đậm đà, được ninh từ xương, tôm, thịt, cùng nghệ tạo màu hấp dẫn. Khi ăn, người ta thường thêm rau sống, đậu phộng rang, bánh tráng nướng và lát chanh, tạo nên sự hòa quyện giữa vị béo, mặn, ngọt và chua dịu, rất đặc trưng miền Trung.
    <img class="food-img" src="https://reviewvilla.vn/wp-content/uploads/2022/06/mi-quang-da-nang-1.jpg">`,
    "bánh tráng cuốn thịt heo": `
    Bánh tráng cuốn thịt heo là món ăn đặc sản của Đà Nẵng. Thịt heo hai đầu da được luộc vừa chín tới, thái lát mỏng, ăn cùng bánh tráng, bánh ướt, rau sống Trà Quế và mắm nêm đậm đà thơm lừng. Khi cuốn, từng miếng thịt hòa quyện với vị tươi mát của rau và hương nồng của mắm tạo nên hương vị tinh tế, vừa thanh vừa đậm, khiến thực khách nhớ mãi.
    <img class="food-img" src="https://danangfantasticity.com/wp-content/uploads/2024/04/banh-trang-cuon-thit-heo-hai-dau-da-da-nang-am-thuc-danang-1.jpg">`, 
    "cao lầu":`
    
    Cao Lầu là đặc sản nổi tiếng của Hội An nhưng cũng phổ biến tại Đà Nẵng. Sợi mì dai, vàng, được ngâm nước tro từ Cù Lao Chàm để tạo độ đặc biệt. Món ăn gồm mì, thịt xá xíu, tóp mỡ, rau sống và nước sốt đậm đà. Khi thưởng thức, từng sợi mì thấm nước sốt, hòa quyện với vị ngọt thịt, béo mỡ và thanh mát rau sống tạo nên trải nghiệm ẩm thực khó quên.
    <img class="food-img" src="https://bloganchoi.com/wp-content/uploads/2016/07/cao-lau-3.jpg">`, 
    "bún chả cá":`
    Bún chả cá Đà Nẵng mang hương vị thanh nhẹ nhưng đậm đà. Nước dùng được ninh từ cá tươi, cà chua, bí đỏ và thơm, tạo vị ngọt tự nhiên. Chả cá dai thơm, được làm từ các loại cá như thu, ngừ hoặc mối. Món này thường dùng cho bữa sáng, kết hợp với rau sống và bánh đa, mang lại trải nghiệm ẩm thực đậm chất địa phương.
    <img class="food-img" src="https://h2tfood.vn/wp-content/uploads/2023/08/cach-nau-bun-cha-ca-da-nang-ngon-chuan-vi-h2tfood-2.jpeg">`, 
    "bánh xèo":`
    Bánh xèo Đà Nẵng có lớp vỏ mỏng, giòn rụm, nhân gồm tôm, thịt ba chỉ và giá đỗ. Khi ăn, người ta cuốn cùng rau sống và chấm nước mắm pha hoặc mắm nêm đậm đà. Món ăn vặt này vừa giòn, vừa thơm, vị vừa mặn vừa béo, là lựa chọn phổ biến của giới trẻ và du khách khi đến miền Trung.
    <img class="food-img" src="https://nhahangminhkhue.com/wp-content/uploads/banh-xeo-mien-tay-2_1629278713.jpg">`,
    "nem lụi":`
    Nem lụi Đà Nẵng được làm từ thịt heo xay nhuyễn trộn gia vị, quấn quanh que tre rồi nướng trên than hồng. Khi chín, nem thơm lừng, ăn cùng bánh tráng, rau sống và nước chấm đặc biệt làm từ gan, vừng, đậu phộng. Món ăn này cân bằng vị ngọt của thịt, mùi thơm của nướng và vị bùi của nước chấm, tạo nên trải nghiệm ẩm thực hấp dẫn.
    <img class="food-img" src="https://www.tastingtable.com/img/gallery/nem-lui-hue-the-vietnamese-pork-street-food-specialty-you-need-to-try/l-intro-1666038074.jpg">`,
    "kem bơ":`
   Kem bơ Đà Nẵng nổi tiếng với vị bơ béo ngậy, kết hợp sữa đặc và đá xay nhuyễn, tạo nên món kem mịn, thơm, ngọt vừa phải. Đây là lựa chọn lý tưởng để giải nhiệt mùa hè, đặc biệt được giới trẻ yêu thích. Một số nơi còn thêm socola, hạt dẻ hoặc các loại topping khác để tăng phần hấp dẫn.
   <img class="food-img" src="https://cdn.tgdd.vn/Files/2020/08/24/1283467/tong-hop-6-cong-thuc-lam-kem-bo-sieu-ngon-don-gian-tai-nha-ma-ai-cung-lam-duoc-202008242233125063.jpg">`,
    "chả bò":`<img class="food-img" src="https://dulichsontra.com/wp-content/uploads/2023/03/cha-bo-da-nang.jpg">
    Chả bò Đà Nẵng được làm từ thịt bò tươi xay nhuyễn, trộn gia vị vừa phải, tạo màu đỏ hồng tự nhiên và độ dai giòn đặc trưng. Món này được đóng gói tiện lợi, thường dùng làm quà lưu niệm hoặc ăn kèm bún, bánh mì. Hương vị thơm, ngọt thịt và dai giòn khiến chả bò trở thành món yêu thích của du khách.
    `,
    "bánh tráng kẹp":`<img class="food-img" src="https://static.vinwonders.com/2022/12/banh-trang-kep-da-nang-4-451x451.jpg">
    Bánh tráng kẹp là món ăn vặt nổi tiếng tại Đà Nẵng. Bánh tráng mỏng được phết pate, trứng, hành lá, bò khô hoặc phô mai, sau đó nướng nóng giòn. Ăn kèm nước chấm cay ngọt tạo nên hương vị hấp dẫn, giòn tan, béo ngậy và vừa miệng. Món này đặc biệt được học sinh, sinh viên yêu thích. 
    `,
    "gỏi cá nam ô":`<img class="food-img" src="https://2.bp.blogspot.com/-ihixggIq4lg/U5tLq25x0KI/AAAAAAAAED8/LiUOxuEMi5k/s1600/goi-ca-nam-o-1.jpg">
    Gỏi cá Nam Ô là món đặc sản trứ danh Đà Nẵng. Cá tươi thái lát mỏng, trộn với thính gạo, ớt, tỏi và gia vị, ăn cùng rau rừng. Món ăn có vị thanh, ngọt tự nhiên của cá, hòa quyện với vị cay nồng của gia vị và mùi thơm của rau, mang đến trải nghiệm ẩm thực tinh tế và độc đáo.`, 
    "bánh bèo":`<img class="food-img" src="https://toplist.vn/images/800px/an-vat-hong-nguyen-banh-beo-chen-amp-banh-bot-loc-1081474.jpg">
    Bánh bèo Đà Nẵng mềm mịn, topping gồm tôm cháy, mỡ hành, và một chút da heo chiên giòn. Khi chan nước mắm vừa miệng, bánh bèo tạo nên bữa sáng nhẹ nhàng nhưng đầy hương vị, vừa thơm vừa béo, kết hợp hoàn hảo với vị ngọt của tôm và mỡ hành.`,
    "bánh bột lọc":`<img class="food-img" src="https://nhahanglavong.com/wp-content/uploads/hinh-banh-bot-loc-19.jpg">
    Bánh bột lọc Đà Nẵng có lớp vỏ trong suốt, dai mềm, nhân tôm thịt thơm ngon. Món ăn thường ăn kèm nước mắm pha chua ngọt cay nhẹ, vừa miệng. Đây là món ăn phổ biến từ các quán ăn gia đình đến đường phố, mang hương vị dân dã nhưng hấp dẫn.`,
    "bánh tráng đại lộc":`<img class="food-img" src="https://biimart.net/wp-content/uploads/2022/08/banh-trang-dai-loc-gia-bao-nhieu.jpg">
    Bánh tráng Đại Lộc Quảng Nam nổi tiếng nhờ độ dày vừa phải và mùi thơm của gạo mới. Thường được dùng cuốn thịt heo, rau sống hoặc nướng trực tiếp. Đây là món quà quê được yêu thích, vừa dân dã vừa tinh tế, thể hiện văn hóa ẩm thực miền Trung.`,
    "bánh mì hội an":`<img class="food-img" src="https://kenhhomestay.com/wp-content/uploads/2022/06/Banh-Mi-Phuong-1.png">
    Bánh mì Hội An nổi tiếng với vỏ giòn, ruột mềm, nhân gồm pate, thịt nướng, chả, rau thơm, dưa leo, sốt đặc trưng. Kết hợp hài hòa giữa vị béo, mặn, ngọt và thơm. Đây là món ăn dân dã nhưng tinh tế, rất được du khách yêu thích khi đến miền Trung.`,
    "bánh tổ":`<img class="food-img" src="https://cdn3.ivivu.com/2022/09/banh-to-hoi-an-ivivu-8-1024x768.jpg">
    Bánh Tổ Quảng Nam là đặc sản truyền thống, thường xuất hiện dịp Tết. Làm từ nếp, đường, gừng, có vị ngọt thơm, dẻo mềm. Người dân thường chiên để thưởng thức nóng, thơm ngon hơn. Bánh Tổ vừa là món quà quê vừa mang giá trị văn hóa lâu đời.`,
    "chè xoa xoa hạt lựu":`<img class="food-img" src="https://static.vinwonders.com/2022/12/che-xoa-xoa-hat-luu-3-451x451.jpg">
    Chè Xoa Xoa Hạt Lựu là món chè giải nhiệt, nổi bật với màu sắc đẹp mắt. Bột năng trong suốt như thạch, hạt lựu đỏ mọng, nước cốt dừa béo ngậy. Vị ngọt dịu, thanh mát, thích hợp ăn vào mùa hè hoặc dùng tráng miệng. Món này được giới trẻ Đà Nẵng yêu thích nhờ hương vị và hình thức bắt mắt.`,
    "ốc hút":`<img class="food-img" src="https://pvhttnt.vn/wp-content/uploads/2022/11/foody-oc-dia-bay-oc-hut-di-luoc-683-636274342283551786.jpg">
    Ốc Hút là món ăn vặt đường phố nổi tiếng Đà Nẵng. Ốc tươi được xào với sả, ớt, rau răm, nước mắm, tạo vị cay nồng và thơm hấp dẫn. Thích hợp thưởng thức buổi chiều hoặc trời mưa, vừa ấm bụng vừa kích thích vị giác.`,
    "mít trộn":`<img class="food-img" src="https://danang.plus/wp-content/uploads/2023/01/mit-tron-da-nang.jpg">
    Mít Trộn Đà Nẵng là món dân dã nhưng hấp dẫn. Mít non luộc thái sợi, trộn thịt ba chỉ, tôm khô, đậu phộng rang, rau răm, tạo sự cân bằng vị ngọt, béo và bùi. Thường dùng trong các bữa ăn nhẹ hoặc ăn vặt.`,
    "ram cuốn lá cải":`<img class="food-img" src="https://bitifood.com/wp-content/uploads/2023/05/mon-an-cha-ram-tom-dat-cuon-cai.jpg">
    Bạn có thể tìm thấy món ram tại bất kỳ khu chợ nào ở Đà Nẵng. Vỏ ram làm bằng bánh tráng, ôm lấy nhân thịt, tôm, khoai… rồi chiên vàng. Cuốn cùng rau sống, ăn kèm nước mắm chua ngọt là cực phẩm.`,
    "mực rim me chua cay":`<img class="food-img" src="https://www.cotrang.org/public/images/tin_dang/6/204_muc-rim-me-da-nang-bk3.jpg">
    Mực rim me là món ăn vặt nổi tiếng ở Đà Nẵng, làm từ mực sữa hoặc mực ống tươi ngon, rim cùng nước sốt me chua ngọt cay. Thịt mực dai giòn, hòa quyện với sốt tạo nên hương vị hấp dẫn, thường được chọn làm quà khi du lịch Đà Nẵng`,
    "mực một nắng": `<img class="food-img" src="https://haisanmoingay.com/wp-content/uploads/2016/08/muc-mot-nang-nuong2.jpg">
    Mực một nắng Đà Nẵng là món ngon biển đặc trưng, mực tươi được phơi nắng chỉ một lần, giữ nguyên vị ngọt tự nhiên và độ dai. Có thể chế biến nhiều cách: nướng thơm phức, xào đậm đà, chiên giòn. Ăn kèm tương ớt, muối tiêu chanh hay nước mắm chua ngọt rất hấp dẫn.`, 
    "bê thui":`<img class="food-img" src="https://giadinh.mediacdn.vn/296230595582509056/2023/4/14/be-thui-16814429515041255509716.jpg">
    Bê thui là đặc sản Đà Nẵng với thịt mềm ngọt, da giòn, cuốn cùng rau sống và chấm mắm nêm cay nồng.`, 
    "bánh căn":`<img class="food-img" src="https://dulichkhampha24.com/wp-content/uploads/2022/10/banh-can-da-nang-1-630x420.jpg">
    Bánh căn là loại bánh nướng đặc trưng của Đà Nẵng, được đổ khuôn trên bếp than hồng, lớp vỏ giòn rụm, ăn kèm trứng hoặc hải sản, chấm nước mắm hành thơm lừng.`
  },
  en: {
  "Mi Quang": "Mi Quang is a signature dish of Da Nang and Quang Nam, featuring wide yellow rice noodles. The broth is light but flavorful, simmered with bones, shrimp, pork, and turmeric for color. Served with fresh herbs, roasted peanuts, grilled rice paper, and lime, it combines savory, sweet, and slightly sour flavors, typical of Central Vietnam.",
  
  "Pork Rice Paper Roll": "Pork Rice Paper Roll is a specialty of Da Nang. The pork is boiled until just cooked, sliced thin, and served with rice paper, wet rice sheets, fresh Tra Que herbs, and fragrant fermented fish sauce. Each bite blends tender pork with fresh herbs and rich sauce for a delicate and memorable flavor.",
  
  "Cao Lau": "Cao Lau is a famous specialty of Hoi An, also popular in Da Nang. Chewy yellow noodles soaked in water from Cham Island, served with roast pork, crispy pork fat, fresh herbs, and rich sauce. Every bite combines sweet meat, rich fat, and fresh herbs for an unforgettable experience.",
  
  "Da Nang Fish Cake Noodle Soup": "This dish has a light yet rich flavor. The broth is simmered from fresh fish, tomato, pumpkin, and pineapple for natural sweetness. Fish cakes are chewy and fragrant, usually made from mackerel, tuna, or local fish, often eaten for breakfast with fresh herbs and rice crackers.",
  
  "Vietnamese Crispy Pancake": "Da Nang crispy pancake has a thin, crunchy skin, filled with shrimp, pork belly, and bean sprouts. Served with fresh herbs and fish sauce or fermented fish sauce. This snack is crispy, fragrant, savory, and rich, popular among young people and tourists.",
  
  "Grilled Pork Skewers": "Da Nang grilled pork skewers are made from minced pork mixed with spices, wrapped around bamboo sticks and grilled over charcoal. Served with rice paper, fresh herbs, and a special dipping sauce made from liver, sesame, and peanuts. The dish balances sweet meat, smoky aroma, and rich dipping sauce.",
  
  "Avocado Ice Cream": "Da Nang avocado ice cream is creamy and rich, made with avocado, condensed milk, and crushed ice for smooth, fragrant, and moderately sweet taste. A perfect treat for summer, often topped with chocolate, chestnuts, or other toppings.",
  
  "Da Nang Beef Roll": "Da Nang beef roll is made from fresh ground beef mixed with spices, naturally pink, and chewy. Conveniently packaged, it can be eaten with noodles or bread. The fragrant, sweet, and chewy beef makes it a favorite souvenir dish.",
  
  "Grilled Rice Paper": "Grilled rice paper is a famous snack in Da Nang. Thin rice paper is spread with pate, egg, scallions, dried beef, or cheese, then grilled until crispy. Served with sweet and spicy dipping sauce, it is crunchy, rich, and flavorful, loved by students.",
  
  "Nam O Fish Salad": "Nam O fish salad is a renowned specialty. Thinly sliced fresh fish mixed with rice powder, chili, garlic, and spices, served with wild herbs. The dish has a fresh, natural sweetness from fish, combined with spicy and aromatic herbs, offering a unique and delicate taste.",
  
  "Steamed Rice Cake": "Da Nang steamed rice cakes are soft, topped with fried shrimp, scallion oil, and a little crispy pork skin. When served with fish sauce, it creates a light but flavorful breakfast, balancing sweet shrimp and savory scallion oil.",
  
  "Tapioca Dumpling": "Da Nang tapioca dumplings have a translucent, chewy skin filled with shrimp and pork. Usually served with sweet, sour, and slightly spicy fish sauce. A popular street and home snack with rustic yet appealing flavors.",
  
  "Dai Loc Rice Paper": "Dai Loc rice paper from Quang Nam is known for its moderate thickness and fresh rice aroma. Often used to roll pork and fresh herbs or grilled directly. A beloved local gift, simple yet elegant, reflecting Central Vietnam’s food culture.",
  
  "Hoi An Baguette": "Hoi An baguette is famous for its crispy crust and soft interior, filled with pate, grilled meat, pork roll, herbs, cucumber, and special sauce. It combines rich, savory, sweet, and fragrant flavors. A simple yet refined street food loved by tourists.",
  
  "Sticky Rice Cake": "Quang Nam sticky rice cake is a traditional specialty, usually for Tet. Made from glutinous rice, sugar, and ginger, sweet, fragrant, and chewy. Often fried for a warm, delicious taste. It is both a local gift and a cultural heritage.",
  
  "Dessert Soup with Coconut": "Xoa Xoa Hat Luu is a refreshing dessert with colorful appearance. Tapioca pearls resemble jelly, red pomegranate seeds, and rich coconut milk. Lightly sweet and refreshing, perfect for summer or dessert. Popular among young people for flavor and visual appeal.",
  
  "Snail Dish": "Oc Hut is a famous street snack. Fresh snails are stir-fried with lemongrass, chili, Vietnamese coriander, and fish sauce, giving a spicy and fragrant flavor. Best enjoyed in the afternoon or rainy days, warm and appetizing.",
  
  "Jackfruit Salad": "Da Nang jackfruit salad is a rustic yet appealing dish. Young jackfruit is boiled, shredded, mixed with pork belly, dried shrimp, roasted peanuts, and Vietnamese coriander. Balanced sweet, savory, and nutty flavors, often eaten as a light meal or snack.",
  
  "Spring Rolls in Cabbage Leaves": "Ram wrapped in cabbage leaves can be found in any Da Nang market. Rice paper encases meat, shrimp, and sweet potato, then fried golden. Served with fresh herbs and sweet and sour fish sauce, it is a street food delicacy.",
  
  "Tamarind Squid": "Tamarind squid is a popular snack, made from fresh baby or regular squid, cooked in a sweet, sour, and spicy tamarind sauce. Chewy and flavorful, often chosen as a souvenir when visiting Da Nang.",
  
  "Sun-Dried Squid": "Sun-dried squid is a specialty seafood dish. Fresh squid is dried once in the sun, retaining natural sweetness and chewiness. Can be grilled, stir-fried, or fried. Served with chili sauce, salt and lime, or sweet and sour fish sauce, very tasty.",
  
  "Roasted Veal": "Roasted veal is a Da Nang specialty with tender, sweet meat and crispy skin, wrapped with fresh herbs and dipped in spicy fermented fish sauce.",
  
  "Banh Can": "Banh Can is a traditional grilled cake in Da Nang, made in small molds over charcoal. Crispy on the outside, often served with egg or seafood, and fragrant scallion fish sauce."
},
  zh: {
  "米广面": "米广面是岘港和广南的标志性美食，以宽黄米粉为特色。汤少但味道浓郁，用骨头、虾、猪肉和姜黄炖煮上色。食用时通常搭配生菜、烤花生、烤米纸和柠檬片，融合了油、咸、甜和微酸的中部风味。",
  
  "猪肉米纸卷": "猪肉米纸卷是岘港特色美食。猪肉煮至刚熟，切薄片，搭配米纸、湿米纸、Tra Que新鲜香草和浓香的鱼露。每一口都将嫩猪肉与清爽蔬菜和浓郁酱料融合，味道精致而难忘。",
  
  "高炉面": "高炉面是会安著名的特色面，也在岘港很受欢迎。面条有嚼劲，黄色，用占婆岛的水浸泡，增添特殊风味。配料有面条、叉烧肉、猪油渣、鲜蔬和浓郁酱汁。每口面条都吸收酱汁，融合肉的鲜甜、油脂的香浓和蔬菜的清新，令人难忘。",
  
  "岘港鱼饼米线": "岘港鱼饼米线口味清淡却浓郁。汤用新鲜鱼、番茄、南瓜和菠萝炖煮，自然甜美。鱼饼香弹，通常用鲭鱼、金枪鱼或本地鱼制成，早餐食用，搭配生菜和米饼，体验浓郁地方风味。",
  
  "越南煎饼": "岘港煎饼外皮薄脆，内馅有虾、五花肉和豆芽。食用时卷上生菜，蘸鱼露或浓郁发酵鱼酱。这款小吃脆香可口，咸香适中，是年轻人和游客的热门选择。",
  
  "烤猪肉串": "岘港烤猪肉串用猪肉末拌调料，卷在竹签上炭火烤制。熟后香气扑鼻，搭配米纸、生菜和特制蘸酱（肝、芝麻、花生）。甜肉香、烤香和蘸酱的丰富口感完美平衡。",
  
  "牛油果冰淇淋": "岘港牛油果冰淇淋以浓郁香滑著称，由牛油果、炼乳和碎冰制成，口感细腻，甜度适中。夏日解暑的理想选择，有些地方还加巧克力、栗子或其他配料增添风味。",
  
  "岘港牛肉卷": "岘港牛肉卷用新鲜牛肉末拌调料制成，自然红色，有嚼劲。方便包装，可配米粉或面包食用。香甜肉味和嚼劲使其成为游客喜爱的美食。",
  
  "夹心米纸": "夹心米纸是岘港著名小吃。薄米纸涂抹肉酱、鸡蛋、葱、牛肉干或奶酪，然后烤至香脆。搭配甜辣蘸酱，口感酥脆、香浓、可口，深受学生喜爱。",
  
  "南澳鱼沙拉": "南澳鱼沙拉是岘港著名特产。薄片新鲜鱼肉与米粉、辣椒、大蒜和调料拌匀，配野菜食用。鱼肉鲜甜，与香辣调料和香草融合，味道独特精致。",
  
  "越南蒸米糕": "岘港蒸米糕柔软，配料有炸虾、葱油和少量脆猪皮。浇上鱼露后，早餐轻盈却美味，甜虾与葱油完美结合。",
  
  "越南木薯饺": "岘港木薯饺皮透明有嚼劲，馅料是鲜美虾肉。通常配甜酸微辣的鱼露，适口美味，街头和家庭常见，质朴又吸引人。",
  
  "大乐米纸": "广南大乐米纸厚度适中，米香扑鼻。常用于卷猪肉和生菜或直接烤制。是受欢迎的乡土礼物，质朴而精致，体现中部饮食文化。",
  
  "会安法棍": "会安法棍外脆内软，夹料有肉酱、烤肉、猪卷、香草、黄瓜和特制酱。味道丰富均衡，简单却精致，游客非常喜爱。",
  
  "年糕": "广南年糕是传统特产，常见于春节，由糯米、糖和姜制成，甜香软糯。人们常油炸食用更香美，是乡土礼物，也具有悠久文化价值。",
  
  "西越甜汤": "西越甜汤 清凉解暑，色彩美观。木薯粉透明如冻，红石榴籽饱满，椰浆浓香。甜度适中，夏季或餐后享用。年轻人喜爱其口味与外观。",
  
  "越南炒螺": "越南炒螺是岘港著名街头小吃。新鲜螺用柠檬草、辣椒、越南香菜和鱼露炒制，辣香诱人。适合下午或雨天食用，温暖又开胃。",
  
  "菠萝蜜沙拉": "岘港菠萝蜜沙拉质朴却美味。煮熟切丝的菠萝蜜与五花肉、干虾、烤花生和香菜拌匀，甜、油、香平衡，常作小吃或轻餐。",
  
  "白菜叶春卷": "白菜叶春卷可在岘港任何市场找到。米纸包裹肉、虾、土豆等馅料，炸至金黄。搭配生菜和甜酸鱼露，是街头美食佳品。",
  
  "一晒鱿鱼": "酸甜辣味鱿鱼是岘港小吃，用新鲜小鱿或普通鱿鱼与酸甜辣味酱汁炒制，肉质Q弹，常作为旅游纪念品。",
  
  "烤小牛肉": "一晒鱿鱼是岘港特色海鲜，小牛肉烤至肉嫩甜、皮脆，卷上生菜蘸辣鱼露食用。",
  
  "烤小饼": "烤小饼是岘港传统烤制小糕点，在炭火上小模具烤制，外脆内软，搭配蛋或海鲜，蘸葱香鱼露。"
},
  ja: {
  "ミークアン": "ミークアンはダナンとクアンナムを代表する料理で、太く黄色い米粉麺が特徴です。スープは少なめですが、骨、エビ、肉を煮込み、ターメリックで色をつけて風味豊かにしています。食べるときには、生野菜、ローストピーナッツ、焼きライスペーパー、レモンを加えて、コク、塩味、甘味、酸味が絶妙に調和した中部ベトナムの味わいを楽しめます。",
  "バインチャンクオンティットヘオ": "バインチャンクオンティットヘオはダナンの名物料理です。豚肉は皮付きの部位を程よく茹でて薄切りにし、ライスペーパー、蒸し米粉の皮、トラケの生野菜、風味豊かなマムネムと一緒に食べます。巻いて食べると、肉の旨味と野菜の爽やかさ、マムの香りが絶妙に混ざり、繊細でバランスの取れた味わいが楽しめます。",
  "カオラウ": "カオラウはホイアンの有名な郷土料理で、ダナンでも人気です。麺はもちもちで黄色く、クーラオ島の灰水に浸して特別な食感を出します。料理は麺、チャーシュー、ラード、野菜、生野菜と濃厚なソースで構成され、麺にソースが染み込み、肉の甘味、脂のコク、野菜の爽やかさが一体となった忘れられない味わいです。",
  "ブンチャーカー": "ブンチャーカーはダナンの軽やかで深みのある味わいの魚つみれ入り米麺です。スープは新鮮な魚、トマト、カボチャ、パイナップルで煮出し、自然な甘みがあります。つみれはツナやマグロ、モイなどの魚で作られます。朝食に食べることが多く、生野菜やライスクラッカーと一緒に、地元の味を楽しめます。",
  "バインセオ": "バインセオはダナンの薄くてパリパリの皮が特徴で、エビ、豚バラ肉、もやしが入っています。食べるときは生野菜と一緒に巻き、甘辛の魚醤またはマムネムにつけます。軽食として人気で、パリパリの食感と香ばしい風味、塩味とコクのバランスが楽しめます。",
  "ネムルイ": "ネムルイはダナンの豚ひき肉を香辛料で味付けし、竹串に巻いて炭火で焼いた料理です。焼きあがると香ばしく、ライスペーパー、生野菜、特製のレバー・ゴマ・ピーナッツソースと一緒に食べます。肉の甘味、焼きの香り、ソースのコクが絶妙に調和した美味しさです。",
  "アボカドアイスクリーム": "ダナンのアボカドアイスクリームは濃厚なアボカドの風味と練乳、クラッシュアイスを組み合わせ、滑らかで香り高いアイスクリームになります。暑い季節のデザートに最適で、若者に人気があります。一部の店ではチョコレートや栗、トッピングを加えさらに美味しくしています。",
  "チャーボー": "ダナンのチャーボーは新鮮な牛肉を細かく挽き、適度に味付けして自然な赤みを出し、程よい弾力を持たせた料理です。お土産としても便利で、ブンやバインミーと一緒に食べることができます。肉の香り、甘み、弾力が旅行者に人気です。",
  "バインチャンケップ": "バインチャンケップはダナンの人気スナックです。薄いライスペーパーにパテ、卵、ネギ、ドライビーフやチーズを塗って焼き上げます。辛甘のタレと一緒に食べると香ばしく、サクサクでコクのある味わいになります。学生や若者に特に人気です。",
  "ナムオ魚サラダ": "ナムオ魚サラダはダナンの名物料理です。新鮮な魚を薄切りにして米粉、唐辛子、ニンニク、香辛料と混ぜ、山菜と一緒に食べます。魚の自然な甘味、香辛料の辛味、ハーブの香りが絶妙に調和し、繊細で独特な味わいが楽しめます。",
  "バインベオ": "バインベオはダナンの柔らかい米粉蒸しケーキで、トッピングに揚げエビ、ネギ油、少量の豚皮をのせます。タレをかけると、軽めの朝食としても楽しめ、香ばしくてコクのある味わいとエビの甘みが絶妙に調和します。",
  "バインボットロック": "バインボットロックは透明で柔らかい皮の米粉餃子で、エビや豚肉の具が入っています。酸味と甘み、軽い辛味のある魚醤をつけて食べることが多く、家庭料理から屋台まで幅広く親しまれています。",
  "ダイロックのライスペーパー": "クアンナムのダイロックライスペーパーは適度な厚さと新米の香りが特徴で、豚肉や野菜を巻いたり、直接焼いて食べたりします。素朴でありながら繊細な味わいで、地方のお土産としても人気です。",
  "ホイアンバインミー": "ホイアンバインミーは外はカリッと中はふんわりしたパンに、パテ、焼き肉、チャー、香草、キュウリ、特製ソースが入った料理です。脂っこさ、塩味、甘味、香りが絶妙に調和した、素朴ながらも洗練された味わいで観光客に人気です。",
  "バイントー": "バイントーはクアンナムの伝統的な特産品で、主に旧正月に食べられます。もち米、砂糖、ショウガで作り、甘く香ばしく柔らかいです。揚げて温かいうちに食べるとさらに美味しく、故郷の贈り物としても文化的価値があります。",
  "チェー・ソアソア・ハットルー": "チェー・ソアソア・ハットルーは色鮮やかなベトナムのデザートで、透明なタピオカと赤いザクロのようなゼリー、濃厚なココナッツミルクが特徴です。甘さ控えめでさっぱりとしており、夏のデザートや食後のデザートに最適です。",
  "オックフット": "オックフットはダナンの有名な屋台料理です。新鮮な貝をレモングラス、唐辛子、香菜、ナンプラーで炒め、香り高くピリ辛に仕上げます。午後や雨の日に食べるのに適しており、温かく食欲をそそります。",
  "ミットチョン": "ミットチョンはダナンの素朴で魅力的な料理です。若いジャックフルーツを茹でて細切りにし、豚バラ肉、干しエビ、ローストピーナッツ、香菜と混ぜ、甘味、脂味、コクのバランスが絶妙です。軽食やおやつに最適です。",
  "キャベツの葉で巻いた揚げ春巻き": "ダナンでは市場のあらゆる場所で見かける料理です。ライスペーパーで肉、エビ、イモなどの具材を包み、黄金色になるまで揚げます。生野菜と一緒に巻いて甘酸っぱいタレにつけて食べると絶品です。",
  "一夜干しイカ": "一夜干しイカはダナンの代表的な海鮮料理で、イカを一晩干すことで自然な甘味と歯ごたえを残します。焼き、炒め、揚げなど様々な調理法で楽しめ、チリソース、塩コショウ、レモン、甘酸っぱい魚醤で食べると美味しいです。",
  "ロースト仔牛肉": "ロースト仔牛肉はダナンの名物で、柔らかく甘い肉質とパリッとした皮が特徴です。生野菜と一緒に巻いて、辛味のあるマムネムソースで食べます。",
  "バインカン": "バインカンはダナンの伝統的な焼き米粉ケーキで、炭火で型に入れて焼きます。外はカリッと、中はもっちりで、卵やシーフードと一緒に食べ、香ばしいネギソースで味わいます。"
},
  ko: {
  "미꽝": "ミークアンはダナンとクアンナムを代表する料理で、太く黄色い米粉麺が特徴です。スープは少なめですが、骨、エビ、肉を煮込み、ターメリックで色をつけて風味豊かにしています。食べるときには、生野菜、ローストピーナッツ、焼きライスペーパー、レモンを加えて、コク、塩味、甘味、酸味が絶妙に調和した中部ベトナムの味わいを楽しめます。",
  "반쎄오": "バインセオはダナンの薄くてパリパリの皮が特徴で、エビ、豚バラ肉、もやしが入っています。食べるときは生野菜と一緒に巻き、甘辛の魚醤またはマムネムにつけます。軽食として人気で、パリパリの食感と香ばしい風味、塩味とコクのバランスが楽しめます。",
  "넴루이": "ネムルイはダナンの豚ひき肉を香辛料で味付けし、竹串に巻いて炭火で焼いた料理です。焼きあがると香ばしく、ライスペーパー、生野菜、特製のレバー・ゴマ・ピーナッツソースと一緒に食べます。肉の甘味、焼きの香り、ソースのコクが絶妙に調和した美味しさです。",
  "아보카도 아이스크림": "ダナンのアボカドアイスクリームは濃厚なアボカドの風味と練乳、クラッシュアイスを組み合わせ、滑らかで香り高いアイスクリームになります。暑い季節のデザートに最適で、若者に人気があります。一部の店ではチョコレートや栗、トッピングを加えさらに美味しくしています。",
  "차보": "ダナンのチャーボーは新鮮な牛肉を細かく挽き、適度に味付けして自然な赤みを出し、程よい弾力を持たせた料理です。お土産としても便利で、ブンやバインミーと一緒に食べることができます。肉の香り、甘み、弾力が旅行者に人気です。",
  "반짱쿠온티트헤오": "バインチャンクオンティットヘオはダナンの名物料理です。豚肉は皮付きの部位を程よく茹でて薄切りにし、ライスペーパー、蒸し米粉の皮、トラケの生野菜、風味豊かなマムネムと一緒に食べます。巻いて食べると、肉の旨味と野菜の爽やかさ、マムの香りが絶妙に混ざり、繊細でバランスの取れた味わいが楽しめます。",
  "카오라우": "カオラウはホイアンの有名な郷土料理で、ダナンでも人気です。麺はもちもちで黄色く、クーラオ島の灰水に浸して特別な食感を出します。料理は麺、チャーシュー、ラード、野菜、生野菜と濃厚なソースで構成され、麺にソースが染み込み、肉の甘味、脂のコク、野菜の爽やかさが一体となった忘れられない味わいです。",
  "분짜까": "ブンチャーカーはダナンの軽やかで深みのある味わいの魚つみれ入り米麺です。スープは新鮮な魚、トマト、カボチャ、パイナップルで煮出し、自然な甘みがあります。つみれはツナやマグロ、モイなどの魚で作られます。朝食に食べることが多く、生野菜やライスクラッカーと一緒に、地元の味を楽しめます。",
  "반보트록": "バインボットロックは透明で柔らかい皮の米粉餃子で、エビや豚肉の具が入っています。酸味と甘み、軽い辛味のある魚醤をつけて食べることが多く、家庭料理から屋台まで幅広く親しまれています。",
  "다이록 쌀종이": "クアンナムのダイロックライスペーパーは適度な厚さと新米の香りが特徴で、豚肉や野菜を巻いたり、直接焼いて食べたりします。素朴でありながら繊細な味わいで、地方のお土産としても人気です。",
  "호이안 반미": "ホイアンバインミーは外はカリッと中はふんわりしたパンに、パテ、焼き肉、チャー、香草、キュウリ、特製ソースが入った料理です。脂っこさ、塩味、甘味、香りが絶妙に調和した、素朴ながらも洗練された味わいで観光客に人気です。",
  "반토": "バイントーはクアンナムの伝統的な特産品で、主に旧正月に食べられます。もち米、砂糖、ショウガで作り、甘く香ばしく柔らかいです。揚げて温かいうちに食べるとさらに美味しく、故郷の贈り物としても文化的価値があります。",
  "체 소아소아 하트루": "チェー・ソアソア・ハットルーは色鮮やかなベトナムのデザートで、透明なタピオカと赤いザクロのようなゼリー、濃厚なココナッツミルクが特徴です。甘さ控えめでさっぱりとしており、夏のデザートや食後のデザートに最適です。",
  "옥헛": "オックフットはダナンの有名な屋台料理です。新鮮な貝をレモングラス、唐辛子、香菜、ナンプラーで炒め、香り高くピリ辛に仕上げます。午後や雨の日に食べるのに適しており、温かく食欲をそそります。",
  "밋쫑": "ミットチョンはダナンの素朴で魅力的な料理です。若いジャックフルーツを茹でて細切りにし、豚バラ肉、干しエビ、ローストピーナッツ、香菜と混ぜ、甘味、脂味、コクのバランスが絶妙です。軽食やおやつに最適です。",
  "배추잎에 싸서 튀긴 롤": "ダナンでは市場のあらゆる場所で見かける料理です。ライスペーパーで肉、エビ、イモなどの具材を包み、黄金色になるまで揚げます。生野菜と一緒に巻いて甘酸っぱいタレにつけて食べると絶品です。",
  "한 번 건조한 오징어": "一夜干しイカはダナンの代表的な海鮮料理で、イカを一晩干すことで自然な甘味と歯ごたえを残します。焼き、炒め、揚げなど様々な調理法で楽しめ、チリソース、塩コショウ、レモン、甘酸っぱい魚醤で食べると美味しいです。",
  "구운 송아지 고기": "ロースト仔牛肉はダナンの名物で、柔らかく甘い肉質とパリッとした皮が特徴です。生野菜と一緒に巻いて、辛味のあるマムネムソースで食べます。",
  "반칸": "バインカンはダナンの伝統的な焼き米粉ケーキで、炭火で型に入れて焼きます。外はカリッと、中はもっちりで、卵やシーフードと一緒に食べ、香ばしいネギソースで味わいます。"
}
};

const foodImages = {
  vi: {
    "mì Quảng": "https://reviewvilla.vn/wp-content/uploads/2022/06/mi-quang-da-nang-1.jpg",
    "cao Lầu": "https://bloganchoi.com/wp-content/uploads/2016/07/cao-lau-3.jpg",
    "bún Chả Cá": "https://h2tfood.vn/wp-content/uploads/2023/08/cach-nau-bun-cha-ca-da-nang-ngon-chuan-vi-h2tfood-2.jpeg",
    "bánh Tráng Cuốn Thịt Heo": "https://danangfantasticity.com/wp-content/uploads/2024/04/banh-trang-cuon-thit-heo-hai-dau-da-da-nang-am-thuc-danang-1.jpg",
    "bánh Xèo": "https://nhahangminhkhue.com/wp-content/uploads/banh-xeo-mien-tay-2_1629278713.jpg",
    "nem Lụi": "https://www.tastingtable.com/img/gallery/nem-lui-hue-the-vietnamese-pork-street-food-specialty-you-need-to-try/l-intro-1666038074.jpg",
    "kem Bơ": "https://cdn.tgdd.vn/Files/2020/08/24/1283467/tong-hop-6-cong-thuc-lam-kem-bo-sieu-ngon-don-gian-tai-nha-ma-ai-cung-lam-duoc-202008242233125063.jpg",
    "chả Bò": "https://dulichsontra.com/wp-content/uploads/2023/03/cha-bo-da-nang.jpg",
    "bánh Tráng Kẹp": "https://static.vinwonders.com/2022/12/banh-trang-kep-da-nang-4-451x451.jpg",
    "gỏi Cá Nam Ô": "https://2.bp.blogspot.com/-ihixggIq4lg/U5tLq25x0KI/AAAAAAAAED8/LiUOxuEMi5k/s1600/goi-ca-nam-o-1.jpg",
    "bánh Bèo": "https://toplist.vn/images/800px/an-vat-hong-nguyen-banh-beo-chen-amp-banh-bot-loc-1081474.jpg",
    "bánh Bột Lọc": "https://nhahanglavong.com/wp-content/uploads/hinh-banh-bot-loc-19.jpg",
    "bánh Tráng Đại Lộc": "https://biimart.net/wp-content/uploads/2022/08/banh-trang-dai-loc-gia-bao-nhieu.jpg",
    "bánh Mì Hội An": "https://kenhhomestay.com/wp-content/uploads/2022/06/Banh-Mi-Phuong-1.png",
    "bánh Tổ": "https://cdn3.ivivu.com/2022/09/banh-to-hoi-an-ivivu-8-1024x768.jpg",
    "chè Xoa Xoa Hạt Lựu": "https://static.vinwonders.com/2022/12/che-xoa-xoa-hat-luu-3-451x451.jpg",
    "ốc Hút": "https://pvhttnt.vn/wp-content/uploads/2022/11/foody-oc-dia-bay-oc-hut-di-luoc-683-636274342283551786.jpg",
    "mít Trộn": "https://danang.plus/wp-content/uploads/2023/01/mit-tron-da-nang.jpg",
    "ram Cuốn Lá Cải": "https://bitifood.com/wp-content/uploads/2023/05/mon-an-cha-ram-tom-dat-cuon-cai.jpg",
    "mực Rim Me Chua Cay": "https://www.cotrang.org/public/images/tin_dang/6/204_muc-rim-me-da-nang-bk3.jpg",
    "mực Một Nắng": "https://haisanmoingay.com/wp-content/uploads/2016/08/muc-mot-nang-nuong2.jpg",
    "bê Thui": "https://giadinh.mediacdn.vn/296230595582509056/2023/4/14/be-thui-16814429515041255509716.jpg",
    "bánh Căn": "https://dulichkhampha24.com/wp-content/uploads/2022/10/banh-can-da-nang-1-630x420.jpg"
  },
  en: {
    "Mi Quang": "https://reviewvilla.vn/wp-content/uploads/2022/06/mi-quang-da-nang-1.jpg",
    "Cao Lau": "https://bloganchoi.com/wp-content/uploads/2016/07/cao-lau-3.jpg",
    "Da Nang Fish Cake Noodle Soup": "https://h2tfood.vn/wp-content/uploads/2023/08/cach-nau-bun-cha-ca-da-nang-ngon-chuan-vi-h2tfood-2.jpeg",
    "Pork Rice Paper Roll": "https://danangfantasticity.com/wp-content/uploads/2024/04/banh-trang-cuon-thit-heo-hai-dau-da-da-nang-am-thuc-danang-1.jpg",
    "Vietnamese Crispy Pancake": "https://nhahangminhkhue.com/wp-content/uploads/banh-xeo-mien-tay-2_1629278713.jpg",
    "Grilled Pork Skewers": "https://www.tastingtable.com/img/gallery/nem-lui-hue-the-vietnamese-pork-street-food-specialty-you-need-to-try/l-intro-1666038074.jpg",
    "Avocado Ice Cream": "https://cdn.tgdd.vn/Files/2020/08/24/1283467/tong-hop-6-cong-thuc-lam-kem-bo-sieu-ngon-don-gian-tai-nha-ma-ai-cung-lam-duoc-202008242233125063.jpg",
    "Da Nang Beef Roll": "https://dulichsontra.com/wp-content/uploads/2023/03/cha-bo-da-nang.jpg",
    "Vietnamese Grilled Rice Paper": "https://static.vinwonders.com/2022/12/banh-trang-kep-da-nang-4-451x451.jpg",
    "Nam O Fish Salad": "https://2.bp.blogspot.com/-ihixggIq4lg/U5tLq25x0KI/AAAAAAAAED8/LiUOxuEMi5k/s1600/goi-ca-nam-o-1.jpg",
    "Vietnamese Steamed Rice Cake": "https://toplist.vn/images/800px/an-vat-hong-nguyen-banh-beo-chen-amp-banh-bot-loc-1081474.jpg",
    "Vietnamese Tapioca Dumpling": "https://nhahanglavong.com/wp-content/uploads/hinh-banh-bot-loc-19.jpg",
    "Dai Loc Rice Paper": "https://biimart.net/wp-content/uploads/2022/08/banh-trang-dai-loc-gia-bao-nhieu.jpg",
    "Hoi An Baguette": "https://kenhhomestay.com/wp-content/uploads/2022/06/Banh-Mi-Phuong-1.png",
    "Sticky Rice Cake": "https://cdn3.ivivu.com/2022/09/banh-to-hoi-an-ivivu-8-1024x768.jpg",
    "Vietnamese Dessert Soup": "https://static.vinwonders.com/2022/12/che-xoa-xoa-hat-luu-3-451x451.jpg",
    "Snail Dish": "https://pvhttnt.vn/wp-content/uploads/2022/11/foody-oc-dia-bay-oc-hut-di-luoc-683-636274342283551786.jpg",
    "Jackfruit Salad": "https://danang.plus/wp-content/uploads/2023/01/mit-tron-da-nang.jpg",
    "Spring Rolls Wrapped in Cabbage Leaves": "https://bitifood.com/wp-content/uploads/2023/05/mon-an-cha-ram-tom-dat-cuon-cai.jpg",
    "Sun-Dried Squid": "https://www.cotrang.org/public/images/tin_dang/6/204_muc-rim-me-da-nang-bk3.jpg",
    "Roasted Veal": "https://haisanmoingay.com/wp-content/uploads/2016/08/muc-mot-nang-nuong2.jpg",
    "Be Thui": "https://giadinh.mediacdn.vn/296230595582509056/2023/4/14/be-thui-16814429515041255509716.jpg",
    "Banh Can": "https://dulichkhampha24.com/wp-content/uploads/2022/10/banh-can-da-nang-1-630x420.jpg"
  },
  zh: {
    "米广面": "https://reviewvilla.vn/wp-content/uploads/2022/06/mi-quang-da-nang-1.jpg",
    "高炉面": "https://bloganchoi.com/wp-content/uploads/2016/07/cao-lau-3.jpg",
    "岘港鱼饼米线": "https://h2tfood.vn/wp-content/uploads/2023/08/cach-nau-bun-cha-ca-da-nang-ngon-chuan-vi-h2tfood-2.jpeg",
    "猪肉米纸卷": "https://danangfantasticity.com/wp-content/uploads/2024/04/banh-trang-cuon-thit-heo-hai-dau-da-da-nang-am-thuc-danang-1.jpg",
    "越南煎饼": "https://nhahangminhkhue.com/wp-content/uploads/banh-xeo-mien-tay-2_1629278713.jpg",
    "烤猪肉串": "https://www.tastingtable.com/img/gallery/nem-lui-hue-the-vietnamese-pork-street-food-specialty-you-need-to-try/l-intro-1666038074.jpg",
    "牛油果冰淇淋": "https://cdn.tgdd.vn/Files/2020/08/24/1283467/tong-hop-6-cong-thuc-lam-kem-bo-sieu-ngon-don-gian-tai-nha-ma-ai-cung-lam-duoc-202008242233125063.jpg",
    "岘港牛肉卷": "https://dulichsontra.com/wp-content/uploads/2023/03/cha-bo-da-nang.jpg",
    "夹心米纸": "https://static.vinwonders.com/2022/12/banh-trang-kep-da-nang-4-451x451.jpg",
    "南澳鱼沙拉": "https://2.bp.blogspot.com/-ihixggIq4lg/U5tLq25x0KI/AAAAAAAAED8/LiUOxuEMi5k/s1600/goi-ca-nam-o-1.jpg",
    "越南蒸米糕": "https://toplist.vn/images/800px/an-vat-hong-nguyen-banh-beo-chen-amp-banh-bot-loc-1081474.jpg",
    "越南木薯饺": "https://nhahanglavong.com/wp-content/uploads/hinh-banh-bot-loc-19.jpg",
    "大乐米纸": "https://biimart.net/wp-content/uploads/2022/08/banh-trang-dai-loc-gia-bao-nhieu.jpg",
    "会安法棍": "https://kenhhomestay.com/wp-content/uploads/2022/06/Banh-Mi-Phuong-1.png",
    "年糕": "https://cdn3.ivivu.com/2022/09/banh-to-hoi-an-ivivu-8-1024x768.jpg",
    "西越甜汤": "https://static.vinwonders.com/2022/12/che-xoa-xoa-hat-luu-3-451x451.jpg",
    "越南炒螺": "https://pvhttnt.vn/wp-content/uploads/2022/11/foody-oc-dia-bay-oc-hut-di-luoc-683-636274342283551786.jpg",
    "菠萝蜜沙拉": "https://danang.plus/wp-content/uploads/2023/01/mit-tron-da-nang.jpg",
    "白菜叶春卷": "https://bitifood.com/wp-content/uploads/2023/05/mon-an-cha-ram-tom-dat-cuon-cai.jpg",
    "一晒鱿鱼": "https://www.cotrang.org/public/images/tin_dang/6/204_muc-rim-me-da-nang-bk3.jpg",
    "烤小牛肉": "https://haisanmoingay.com/wp-content/uploads/2016/08/muc-mot-nang-nuong2.jpg",
    "烤小饼": "https://dulichkhampha24.com/wp-content/uploads/2022/10/banh-can-da-nang-1-630x420.jpg",
    "Bê Thui": "https://giadinh.mediacdn.vn/296230595582509056/2023/4/14/be-thui-16814429515041255509716.jpg"
  },
  ja: {
    "ミークアン": "https://reviewvilla.vn/wp-content/uploads/2022/06/mi-quang-da-nang-1.jpg",
    "カオラウ": "https://bloganchoi.com/wp-content/uploads/2016/07/cao-lau-3.jpg",
    "ブンチャーカー": "https://h2tfood.vn/wp-content/uploads/2023/08/cach-nau-bun-cha-ca-da-nang-ngon-chuan-vi-h2tfood-2.jpeg",
    "バインチャンクオンティットヘオ": "https://danangfantasticity.com/wp-content/uploads/2024/04/banh-trang-cuon-thit-heo-hai-dau-da-da-nang-am-thuc-danang-1.jpg",
    "バインセオ": "https://nhahangminhkhue.com/wp-content/uploads/banh-xeo-mien-tay-2_1629278713.jpg",
    "ネムルイ": "https://www.tastingtable.com/img/gallery/nem-lui-hue-the-vietnamese-pork-street-food-specialty-you-need-to-try/l-intro-1666038074.jpg",
    "アボカドアイスクリーム": "https://cdn.tgdd.vn/Files/2020/08/24/1283467/tong-hop-6-cong-thuc-lam-kem-bo-sieu-ngon-don-gian-tai-nha-ma-ai-cung-lam-duoc-202008242233125063.jpg",
    "チャーボー": "https://dulichsontra.com/wp-content/uploads/2023/03/cha-bo-da-nang.jpg",
    "バインチャンケップ": "https://static.vinwonders.com/2022/12/banh-trang-kep-da-nang-4-451x451.jpg",
    "ナムオ魚サラダ": "https://2.bp.blogspot.com/-ihixggIq4lg/U5tLq25x0KI/AAAAAAAAED8/LiUOxuEMi5k/s1600/goi-ca-nam-o-1.jpg",
    "バインベオ": "https://toplist.vn/images/800px/an-vat-hong-nguyen-banh-beo-chen-amp-banh-bot-loc-1081474.jpg",
    "バインボットロック": "https://nhahanglavong.com/wp-content/uploads/hinh-banh-bot-loc-19.jpg",
    "ダイロックのライスペーパー": "https://biimart.net/wp-content/uploads/2022/08/banh-trang-dai-loc-gia-bao-nhieu.jpg",
    "ホイアンバインミー": "https://kenhhomestay.com/wp-content/uploads/2022/06/Banh-Mi-Phuong-1.png",
    "バイントー": "https://cdn3.ivivu.com/2022/09/banh-to-hoi-an-ivivu-8-1024x768.jpg",
    "チェー・ソアソア・ハットルー": "https://static.vinwonders.com/2022/12/che-xoa-xoa-hat-luu-3-451x451.jpg",
    "オックフット": "https://pvhttnt.vn/wp-content/uploads/2022/11/foody-oc-dia-bay-oc-hut-di-luoc-683-636274342283551786.jpg",
    "ミットチョン": "https://danang.plus/wp-content/uploads/2023/01/mit-tron-da-nang.jpg",
    "キャベツの葉で巻いた揚げ春巻き": "https://bitifood.com/wp-content/uploads/2023/05/mon-an-cha-ram-tom-dat-cuon-cai.jpg",
    "一夜干しイカ": "https://www.cotrang.org/public/images/tin_dang/6/204_muc-rim-me-da-nang-bk3.jpg",
    "ロースト仔牛肉": "https://haisanmoingay.com/wp-content/uploads/2016/08/muc-mot-nang-nuong2.jpg",
    "バインカン": "https://dulichkhampha24.com/wp-content/uploads/2022/10/banh-can-da-nang-1-630x420.jpg",
    "Bê Thui": "https://giadinh.mediacdn.vn/296230595582509056/2023/4/14/be-thui-16814429515041255509716.jpg"
  },
  ko: {
    "미꽝": "https://reviewvilla.vn/wp-content/uploads/2022/06/mi-quang-da-nang-1.jpg",
    "카오라우": "https://bloganchoi.com/wp-content/uploads/2016/07/cao-lau-3.jpg",
    "분짜까": "https://h2tfood.vn/wp-content/uploads/2023/08/cach-nau-bun-cha-ca-da-nang-ngon-chuan-vi-h2tfood-2.jpeg",
    "반짱쿠온티트헤오": "https://danangfantasticity.com/wp-content/uploads/2024/04/banh-trang-cuon-thit-heo-hai-dau-da-da-nang-am-thuc-danang-1.jpg",
    "반쎄오": "https://nhahangminhkhue.com/wp-content/uploads/banh-xeo-mien-tay-2_1629278713.jpg",
    "넴루이": "https://www.tastingtable.com/img/gallery/nem-lui-hue-the-vietnamese-pork-street-food-specialty-you-need-to-try/l-intro-1666038074.jpg",
    "아보카도 아이스크림": "https://cdn.tgdd.vn/Files/2020/08/24/1283467/tong-hop-6-cong-thuc-lam-kem-bo-sieu-ngon-don-gian-tai-nha-ma-ai-cung-lam-duoc-202008242233125063.jpg",
    "차보": "https://dulichsontra.com/wp-content/uploads/2023/03/cha-bo-da-nang.jpg",
    "반짱껍": "https://static.vinwonders.com/2022/12/banh-trang-kep-da-nang-4-451x451.jpg",
    "남오 생선 샐러드": "https://2.bp.blogspot.com/-ihixggIq4lg/U5tLq25x0KI/AAAAAAAAED8/LiUOxuEMi5k/s1600/goi-ca-nam-o-1.jpg",
    "반베오": "https://toplist.vn/images/800px/an-vat-hong-nguyen-banh-beo-chen-amp-banh-bot-loc-1081474.jpg",
    "반보트록": "https://nhahanglavong.com/wp-content/uploads/hinh-banh-bot-loc-19.jpg",
    "다이록 쌀종이": "https://biimart.net/wp-content/uploads/2022/08/banh-trang-dai-loc-gia-bao-nhieu.jpg",
    "호이안 반미": "https://kenhhomestay.com/wp-content/uploads/2022/06/Banh-Mi-Phuong-1.png",
    "반토": "https://cdn3.ivivu.com/2022/09/banh-to-hoi-an-ivivu-8-1024x768.jpg",
    "체 소아소아 하트루": "https://static.vinwonders.com/2022/12/che-xoa-xoa-hat-luu-3-451x451.jpg",
    "옥헛": "https://pvhttnt.vn/wp-content/uploads/2022/11/foody-oc-dia-bay-oc-hut-di-luoc-683-636274342283551786.jpg",
    "밋쫑": "https://danang.plus/wp-content/uploads/2023/01/mit-tron-da-nang.jpg",
    "배추잎에 싸서 튀긴 롤": "https://bitifood.com/wp-content/uploads/2023/05/mon-an-cha-ram-tom-dat-cuon-cai.jpg",
    "한 번 건조한 오징어": "https://www.cotrang.org/public/images/tin_dang/6/204_muc-rim-me-da-nang-bk3.jpg",
    "구운 송아지 고기": "https://haisanmoingay.com/wp-content/uploads/2016/08/muc-mot-nang-nuong2.jpg",
    "반칸": "https://dulichkhampha24.com/wp-content/uploads/2022/10/banh-can-da-nang-1-630x420.jpg",
    "Bê Thui": "https://giadinh.mediacdn.vn/296230595582509056/2023/4/14/be-thui-16814429515041255509716.jpg"
  }
};

// ====================== BIẾN ======================
let currentLanguage = "vi";
let showCount = 5;

const languageSelector = document.getElementById("languageSelector");
const dishList = document.getElementById("dishList");
const showMoreBtn = document.getElementById("showMore");
const chatLog = document.getElementById("chatLog");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const resetButton = document.getElementById("resetButton");
const chatTitle = document.getElementById("chatTitle");
const langLabel = document.getElementById("langLabel");

// ====================== HỖ TRỢ ======================
function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

// ====================== DANH SÁCH MÓN ======================
function renderDishList() {
  dishList.innerHTML = "";
  const langDishes = dishes[currentLanguage] || [];

  langDishes.slice(0, showCount).forEach(dish => {
    const li = document.createElement("li");
    li.textContent = dish;
    li.classList.add("dish-item");
    li.onclick = () => {
      addChatMessage(translations[currentLanguage].you, dish);
      processUserInput(dish);
    };
    dishList.appendChild(li);
  });

  showMoreBtn.style.display = showCount >= langDishes.length ? "none" : "inline-block";
}

// Xem thêm
showMoreBtn.addEventListener("click", () => {
  showCount += 5;
  renderDishList();
});

// ====================== CHAT ======================
function addChatMessage(sender, text) {
  const message = document.createElement("p");
  message.innerHTML = `<b>${sender}</b>: ${text}`;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// ====================== XỬ LÝ TIN NHẮN ======================
function processUserInput(text) {
  const langData = foodData[currentLanguage] || {};
  const imgData = foodImages[currentLanguage] || {};
  const inputNormalized = normalize(text);

  const foundKey = Object.keys(langData).find(k => normalize(k) === inputNormalized);

  if (foundKey) {
    let reply = `<b>${foundKey}</b>: ${langData[foundKey]}`;
    if (imgData[foundKey]) {
      reply += `<br><img src="${imgData[foundKey].trim()}" alt="${foundKey}" class="dish-image">`;
    }
    addChatMessage("Bot", reply);
  } else {
    const notFound = {
      vi: "Xin lỗi, tôi không tìm thấy món này.😅",
      en: "Sorry, I couldn't find this dish.😅",
      zh: "抱歉，未找到该菜品😅。",
      ja: "申し訳ありません、その料理は見つかりませんでした😅。",
      ko: "죄송합니다, 해당 음식을 찾을 수 없습니다.😅"
    };
    addChatMessage("Bot", notFound[currentLanguage]);
  }
}

// ====================== NÚT GỬI ======================
sendButton.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (!text) return;

  addChatMessage(translations[currentLanguage].you, text);
  processUserInput(text);
  userInput.value = "";
});

// Enter để gửi
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendButton.click();
});

// ====================== NÚT XÓA ======================
resetButton.addEventListener("click", () => {
  chatLog.innerHTML = "";
});

// ====================== CẬP NHẬT GIAO DIỆN ======================
function updateUITexts() {
  const t = translations[currentLanguage]; // rút gọn cho dễ đọc
  chatTitle.innerText = t.title;
  langLabel.innerText = t.lang;
  userInput.placeholder = t.placeholder;
  sendButton.innerText = t.send;
  resetButton.innerText = t.reset;
  showMoreBtn.innerText = t.showMore; // cập nhật nút "Xem thêm" theo ngôn ngữ
}


// ====================== GIAO DIỆN THEO NGÔN NGỮ ======================
const translations = {
  vi: { 
    title: "🌿 Chatbot Ẩm Thực Đà Nẵng", 
    lang: "Ngôn ngữ", 
    placeholder: "Nhập món ăn...", 
    send: "Gửi", 
    reset: "Xóa", 
    showMore: "Xem thêm",
    you: "Bạn: " 
  },
  en: { 
    title: "🌿 Da Nang Food Chatbot", 
    lang: "Language", 
    placeholder: "Enter food name...", 
    send: "Send", 
    reset: "Reset", 
    showMore: "Show More",
    you: "You: " 
  },
  zh: { 
    title: "🌿 岘港美食聊天机器人", 
    lang: "语言", 
    placeholder: "输入菜名...", 
    send: "发送", 
    reset: "重置", 
    showMore: "查看更多",
    you: "你: " 
  },
  ja: { 
    title: "🌿 ダナンフードチャットボット", 
    lang: "言語", 
    placeholder: "料理名を入力してください...", 
    send: "送信", 
    reset: "リセット", 
    showMore: "もっと見る",
    you: "あなた: " 
  },
  ko: { 
    title: "🌿 다낭 음식 챗봇", 
    lang: "언어", 
    placeholder: "음식 이름을 입력하세요...", 
    send: "보내기", 
    reset: "초기화", 
    showMore: "더 보기",
    you: "당신: " 
  }
};


// Chuyển ngôn ngữ
languageSelector.addEventListener("change", () => {
  currentLanguage = languageSelector.value;
  showCount = 5;
  renderDishList();
  updateUITexts();
});

// ====================== KHỞI TẠO ======================
renderDishList();
updateUITexts();
