const headerData = {
 games: [
   {
     name: "CS2",
     categories: [
       {
         name: "Pistol Knife",
         items : [
          {
              name: "Butterfly Knife",
              subItems: [
                  { name: "Fade", image: "gun.webp", price: 250.00 },
                  { name: "Slaughter", image: "gun.webp", price: 300.00 },
                  { name: "Crimson Web", image: "gun.png", price: 350.00 },
                  { name: "Blue Steel", image: "gun2.png", price: 200.00 },
                  { name: "Stained", image: "gun2.png", price: 150.00 },
                  { name: "Case Hardened", image: "gun2.png", price: 400.00 },
                  { name: "Safari Mesh", image: "gun2.png", price: 100.00 },
                  { name: "Forest DDPAT", image: "gun2.png", price: 120.00 },
                  { name: "Night", image: "gun.webp", price: 180.00 },
                  { name: "Boreal Forest", image: "gun.webp", price: 90.00 }
              ]
          },
          {
              name: "Kattie Knife",
              subItems: [
                  { name: "Slaughter", image: "gun.webp", price: 300.00 },
                  { name: "Crimson Web", image: "gun.png", price: 350.00 },
                  { name: "Blue Steel", image: "gun2.png", price: 200.00 },
                  { name: "Fade", image: "gun.webp", price: 250.00 },
                  { name: "Stained", image: "gun2.png", price: 150.00 },
                  { name: "Case Hardened", image: "gun2.png", price: 400.00 },
                  { name: "Safari Mesh", image: "gun2.png", price: 100.00 },
                  { name: "Forest DDPAT", image: "gun2.png", price: 120.00 },
                  { name: "Night", image: "gun.webp", price: 180.00 },
                  { name: "Boreal Forest", image: "gun.webp", price: 90.00 }
              ]
          },
          // ...similar structure for other knives
      ]
       },
       {
         name: "Knife",
         items : [
          {
              name: "Butterfly Knife",
              subItems: [
                  { name: "Fade", image: "gun.webp", price: 250.00 },
                  { name: "Slaughter", image: "gun.webp", price: 300.00 },
                  { name: "Crimson Web", image: "gun.png", price: 350.00 },
                  { name: "Blue Steel", image: "gun2.png", price: 200.00 },
                  { name: "Stained", image: "gun2.png", price: 150.00 },
                  { name: "Case Hardened", image: "gun2.png", price: 400.00 },
                  { name: "Safari Mesh", image: "gun2.png", price: 100.00 },
                  { name: "Forest DDPAT", image: "gun2.png", price: 120.00 },
                  { name: "Night", image: "gun.webp", price: 180.00 },
                  { name: "Boreal Forest", image: "gun.webp", price: 90.00 }
              ]
          },
          {
              name: "Kattie Knife",
              subItems: [
                  { name: "Slaughter", image: "gun.webp", price: 300.00 },
                  { name: "Crimson Web", image: "gun.png", price: 350.00 },
                  { name: "Blue Steel", image: "gun2.png", price: 200.00 },
                  { name: "Fade", image: "gun.webp", price: 250.00 },
                  { name: "Stained", image: "gun2.png", price: 150.00 },
                  { name: "Case Hardened", image: "gun2.png", price: 400.00 },
                  { name: "Safari Mesh", image: "gun2.png", price: 100.00 },
                  { name: "Forest DDPAT", image: "gun2.png", price: 120.00 },
                  { name: "Night", image: "gun.webp", price: 180.00 },
                  { name: "Boreal Forest", image: "gun.webp", price: 90.00 }
              ]
          },
          // ...similar structure for other knives
      ]
       },
       {
         name: "Gloves",
         items: [
           {
             name: "Sport Gloves",
             image: "sport_gloves.jpg",
             subItems: [
              { name: "Hedge Maze", image: "glove.png", price: 150.00 },
              { name: "Pandora's Box", image: "glove2.png", price: 180.00 },
              { name: "Vice", image: "glove.png", price: 210.00 },
              { name: "Amphibious", image: "glove2.png", price: 95.00 },
              { name: "Bronze Morph", image: "glove.png", price: 125.00 },
              { name: "Omega", image: "glove2.png", price: 135.00 },
              { name: "Slingshot", image: "glove.png", price: 170.00 },
              { name: "Arid", image: "glove2.png", price: 110.00 },
              { name: "Superconductor", image: "glove.png", price: 200.00 },
              { name: "Hedge", image: "glove2.png", price: 160.00 }
          ]
           },
           {
             name: "Men Gloves",
             image: "sport_gloves.jpg",
             subItems: [
               { name: "Pandora's Box", image: "glove2.png", price: 180.00 },
               { name: "Hedge Maze", image: "glove.png", price: 150.00 },
              { name: "Vice", image: "glove.png", price: 210.00 },
              { name: "Amphibious", image: "glove2.png", price: 95.00 },
              { name: "Bronze Morph", image: "glove.png", price: 125.00 },
              { name: "Omega", image: "glove2.png", price: 135.00 },
              { name: "Slingshot", image: "glove.png", price: 170.00 },
              { name: "Arid", image: "glove2.png", price: 110.00 },
              { name: "Superconductor", image: "glove.png", price: 200.00 },
              { name: "Hedge", image: "glove2.png", price: 160.00 }
          ]
           },
           {
             name: "Suit",
             image: "sport_gloves.jpg",
             subItems: [
               { name: "Pandora's Box", image: "glove2.png", price: 180.00 },
               { name: "Hedge Maze", image: "glove.png", price: 150.00 },
              { name: "Vice", image: "glove.png", price: 210.00 },
              { name: "Amphibious", image: "glove2.png", price: 95.00 },
              { name: "Bronze Morph", image: "glove.png", price: 125.00 },
              { name: "Omega", image: "glove2.png", price: 135.00 },
              { name: "Slingshot", image: "glove.png", price: 170.00 },
              { name: "Arid", image: "glove2.png", price: 110.00 },
              { name: "Superconductor", image: "glove.png", price: 200.00 },
              { name: "Hedge", image: "glove2.png", price: 160.00 }
          ]
           },
           {
             name: "Jackets",
             image: "sport_gloves.jpg",
             subItems: [
               { name: "Pandora's Box", image: "glove2.png", price: 180.00 },
               { name: "Hedge Maze", image: "glove.png", price: 150.00 },
              { name: "Vice", image: "glove.png", price: 210.00 },
              { name: "Amphibious", image: "glove2.png", price: 95.00 },
              { name: "Bronze Morph", image: "glove.png", price: 125.00 },
              { name: "Omega", image: "glove2.png", price: 135.00 },
              { name: "Slingshot", image: "glove.png", price: 170.00 },
              { name: "Arid", image: "glove2.png", price: 110.00 },
              { name: "Superconductor", image: "glove.png", price: 200.00 },
              { name: "Hedge", image: "glove2.png", price: 160.00 }
          ]
           },
           {
             name: "Rifles",
             image: "sport_gloves.jpg",
             subItems: [
               { name: "Pandora's Box", image: "glove2.png", price: 180.00 },
               { name: "Hedge Maze", image: "glove.png", price: 150.00 },
              { name: "Vice", image: "glove.png", price: 210.00 },
              { name: "Amphibious", image: "glove2.png", price: 95.00 },
              { name: "Bronze Morph", image: "glove.png", price: 125.00 },
              { name: "Omega", image: "glove2.png", price: 135.00 },
              { name: "Slingshot", image: "glove.png", price: 170.00 },
              { name: "Arid", image: "glove2.png", price: 110.00 },
              { name: "Superconductor", image: "glove.png", price: 200.00 },
              { name: "Hedge", image: "glove2.png", price: 160.00 }
          ]
           },
           // ...similar structure for other glove types
         ]
       },
      
       // ... Continue adding categories and their items with subItems
     ]
   },
   // ... Additional games with their categories and items
 ]
};

export default headerData;
