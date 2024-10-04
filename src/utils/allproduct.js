const allProducts = [
    {
        id: 1,
        title: "Nike Court Vision Low Next Nature",
        desc:"An iconic look that lasts. This AJ1 pairs the classic design of the original with premium materials that will keep you going all day.",
        path: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4284894e-e57e-4d95-ae7b-1e8fcc9eeb9a/NIKE+COURT+VISION+LO+NN.png",
        price: 4995.00,
        brand: "Nike",
        category: "Sneaker",
        gender: "Men",
        rating: 4.5,
        "purchases": 150,
        images:[
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/617852db-ae30-49e7-a6a7-ac5113cd694f/NIKE+COURT+VISION+LO+NN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/48ab3c75-71ae-42e7-adb4-0485d9e7753a/NIKE+COURT+VISION+LO+NN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9f260255-7656-4d66-99b3-f17cf50934d0/NIKE+COURT+VISION+LO+NN.png"
        ]
    },
    {
        id: 2,
        title: "Nike Blazer Low Platform",
        path: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3db176e-7ae2-43be-a394-9128dc97fd66/W+BLAZER+LOW+PLATFORM.png",
        desc:"Praised for its classic simplicity and comfort, the Nike Blazer Low Platform elevates the hoops icon. The lifted midsole/outsole lets you step confidently while the upper keeps the proportions you loved from the original.",
        price: 7787.00,
        brand: "Nike",
        category: "Sports",
        gender: "Women",
        rating: 4.8,
        "purchases": 10,
        images:[
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4828e2bc-626e-4563-8fa8-aa68c1baa304/W+BLAZER+LOW+PLATFORM.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9139fc52-413b-4d15-9227-e27e91e739fa/W+BLAZER+LOW+PLATFORM.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a500e4e3-5c31-4f7d-b3f2-7b5fb5cbd2a7/W+BLAZER+LOW+PLATFORM.png"
        ]
    },
    {
        id: 3,
        title: "PUMA Court Shatter Low Unisex",
        path: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399844/02/sv01/fnd/IND/fmt/png/PUMA-Court-Shatter-Low-Unisex-Sneakers",
        desc:"These kicks are all about clean court styling with a modern twist. Featuring a perforated upper for breathability and a low-top design",
        price: 6000,
        brand: "Puma",
        category: "Sneaker",
        gender: "Unisex",
        "purchases": 50,
        rating: 4.2,
        images:[
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399844/02/fnd/IND/fmt/png/PUMA-Court-Shatter-Low-Unisex-Sneakers",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399844/02/bv/fnd/IND/fmt/png/PUMA-Court-Shatter-Low-Unisex-Sneakers",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399844/02/sv04/fnd/IND/fmt/png/PUMA-Court-Shatter-Low-Unisex-Sneakers"
        ]
    },
    {
        id: 4,
        title: "Bata brown formal slip",
        desc:"Step up your style game with Bata's brown formal slip-on shoes. Designed for the modern gentleman, they feature a sleek PVC synthetic construction and a comfortable cellulose board sole. Perfect for business meetings and formal events, these shoes offer a seamless blend of convenience and class, ensuring you look sharp and feel great all day.",
        path: "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw7a37119c/images/large/8514052_1.jpeg?sw=817",
        price: 3000,
        brand: "Bata",
        category: "Casual",
        gender: "Men",
        "purchases": 10,
        rating: 4.0,
        images:["https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwcb639ae1/images/large/8514052_3.jpeg?sw=817",
            "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw0e2a8a2f/images/large/8514052_5.jpeg?sw=817",
            "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwe95b2375/images/large/8514052_6.jpeg?sw=817"
        ]
    },
    {
        id: 5,
        title: "Superstar Shoes",
        path: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_00_standard.jpg",
        desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.",
        price: 9000,
        brand: "Adidas",
        category: "Sports",
        gender: "Unisex",
        "purchases": 250,
        rating: 4.9,
        images:[
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff0654f4089f4413baa7aae700d2a08c_9366/Superstar_Shoes_Black_EG4959_02_standard_hover_hover.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cfc151d900394855a485aae700d2d84b_9366/Superstar_Shoes_Black_EG4959_42_detail.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/37cbe7a6558446849011aae700d2d002_9366/Superstar_Shoes_Black_EG4959_41_detail.jpg"
        ]
    },
    {
        id: 6,
        title: "North star grey woven",
        path: "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw98018529/images/large/5592721_1.jpeg?sw=817",
        price: 7000,
        brand: "Bata",
        category: "Casual ",
        gender: "Women",
        "purchases": 30,
        rating: 4.3,
        images:[ "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw96d9cef3/images/large/5592721_5.jpeg?sw=817",
        "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwa83c3250/images/large/5592721_2.jpeg?sw=817",
        "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw29c71f7a/images/large/5592721_4.jpeg?sw=817"] 
    },
    {
        id: 7,
        title: "Reebok Men Walking Shoes",
        path: "https://imagescdn.reebok.in/img/app/product/8/801740-9474590.jpg?auto=format&w=390",
        desc:"Experience comfort and style with Reebok`s black walking shoes for men. These shoes are designed using high-quality, breathable mesh material for maximum comfort. With synthetic soles, your feet stay protected, promoting free movement and stability",
        price: 6500,
        brand: "Reebok",
        category: "Sports",
        gender: "Men",
        rating: 4.6,
        "purchases": 40,
        images:[
            "https://imagescdn.reebok.in/img/app/product/8/801740-9474587.jpg?auto=format&w=390",
            "https://imagescdn.reebok.in/img/app/product/8/801740-9474591.jpg?auto=format&w=390",
            "https://imagescdn.reebok.in/img/app/product/8/801740-9474585.jpg?auto=format&w=390"
        ]
    },
    {
        id: 8,
        title: "TORI Bubble Bloom",
        path: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/401290/03/sv01/fnd/IND/fmt/png/TORI-Bubble-Bloom-Youth-Shoes",
        desc:"Unleash the inner artist in your little one with the playful TORI Bubble Bloom. Bright floral accents and soft satin laces add fun to every step,",
        price: 2500,
        brand: "Puma",
        category: "Sports",
        gender: "Kids",
        rating: 4.1,
        "purchases": 76,
        images:[
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/401290/03/fnd/IND/fmt/png/TORI-Bubble-Bloom-Youth-Shoes",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/401290/03/sv04/fnd/IND/fmt/png/TORI-Bubble-Bloom-Youth-Shoes",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/401290/03/bv/fnd/IND/fmt/png/TORI-Bubble-Bloom-Youth-Shoes"
        ]
    },
    {
        id: 10,
        title: "Nike Court Vision Low Next Nature",
        desc:"An iconic look that lasts. This AJ1 pairs the classic design of the original with premium materials that will keep you going all day.",
        path: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4284894e-e57e-4d95-ae7b-1e8fcc9eeb9a/NIKE+COURT+VISION+LO+NN.png",
        price: 4995.00,
        brand: "Nike",
        category: "Sneaker",
        gender: "Men",
        "purchases": 100,
        rating: 4.5,
        images:[
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/617852db-ae30-49e7-a6a7-ac5113cd694f/NIKE+COURT+VISION+LO+NN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/48ab3c75-71ae-42e7-adb4-0485d9e7753a/NIKE+COURT+VISION+LO+NN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9f260255-7656-4d66-99b3-f17cf50934d0/NIKE+COURT+VISION+LO+NN.png"
        ]
    },
    {
        id: 11,
        title: "Nike Blazer Low Platform",
        path: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3db176e-7ae2-43be-a394-9128dc97fd66/W+BLAZER+LOW+PLATFORM.png",
        desc:"Praised for its classic simplicity and comfort, the Nike Blazer Low Platform elevates the hoops icon. The lifted midsole/outsole lets you step confidently while the upper keeps the proportions you loved from the original.",
        price: 7787.00,
        brand: "Nike",
        category: "Sports",
        gender: "Women",
        "purchases": 112,
        rating: 4.8,
        images:[
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4828e2bc-626e-4563-8fa8-aa68c1baa304/W+BLAZER+LOW+PLATFORM.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9139fc52-413b-4d15-9227-e27e91e739fa/W+BLAZER+LOW+PLATFORM.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a500e4e3-5c31-4f7d-b3f2-7b5fb5cbd2a7/W+BLAZER+LOW+PLATFORM.png"
        ]
    },
    {
        id: 12,
        title: "PUMA Court Shatter Low Unisex",
        path: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399844/02/sv01/fnd/IND/fmt/png/PUMA-Court-Shatter-Low-Unisex-Sneakers",
        desc:"These kicks are all about clean court styling with a modern twist. Featuring a perforated upper for breathability and a low-top design",
        price: 6000,
        brand: "Puma",
        category: "Sneaker",
        gender: "Unisex",
        rating: 4.2,
        "purchases": 86,
        images:[
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399844/02/fnd/IND/fmt/png/PUMA-Court-Shatter-Low-Unisex-Sneakers",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399844/02/bv/fnd/IND/fmt/png/PUMA-Court-Shatter-Low-Unisex-Sneakers",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399844/02/sv04/fnd/IND/fmt/png/PUMA-Court-Shatter-Low-Unisex-Sneakers"
        ]
    },
    {
        id: 13,
        title: "Bata brown formal slip",
        desc:"Step up your style game with Bata's brown formal slip-on shoes. Designed for the modern gentleman, they feature a sleek PVC synthetic construction and a comfortable cellulose board sole. Perfect for business meetings and formal events, these shoes offer a seamless blend of convenience and class, ensuring you look sharp and feel great all day.",
        path: "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw7a37119c/images/large/8514052_1.jpeg?sw=817",
        price: 3000,
        brand: "Bata",
        category: "Casual",
        gender: "Men",
        rating: 4.0,
        "purchases": 5,
        images:["https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwcb639ae1/images/large/8514052_3.jpeg?sw=817",
            "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw0e2a8a2f/images/large/8514052_5.jpeg?sw=817",
            "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwe95b2375/images/large/8514052_6.jpeg?sw=817"
        ]
    },
    {
        id: 14,
        title: "Superstar Shoes",
        path: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_00_standard.jpg",
        desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.",
        price: 9000,
        brand: "Adidas",
        category: "Sports",
        gender: "Unisex",
        rating: 4.9,
        "purchases": 15,
        images:[
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff0654f4089f4413baa7aae700d2a08c_9366/Superstar_Shoes_Black_EG4959_02_standard_hover_hover.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cfc151d900394855a485aae700d2d84b_9366/Superstar_Shoes_Black_EG4959_42_detail.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/37cbe7a6558446849011aae700d2d002_9366/Superstar_Shoes_Black_EG4959_41_detail.jpg"
        ]
    },
    {
        id: 15,
        title: "North star grey woven",
        path: "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw98018529/images/large/5592721_1.jpeg?sw=817",
        price: 7000,
        brand: "Bata",
        category: "Casual ",
        gender: "Women",
        rating: 4.3,
        "purchases": 180,
        images:[ "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw96d9cef3/images/large/5592721_5.jpeg?sw=817",
        "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwa83c3250/images/large/5592721_2.jpeg?sw=817",
        "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw29c71f7a/images/large/5592721_4.jpeg?sw=817"] 
    }
    
    
    
];

export default allProducts;
