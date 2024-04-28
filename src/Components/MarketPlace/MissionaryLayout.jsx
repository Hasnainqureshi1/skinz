// MissionaryLayout.js
import React from 'react';
import Masonry from 'react-masonry-css';
const missionaryItems = [
 {
   heading: "An Introduction to CS2 Skins",
   description: "Ever since their introduction in 2013, CS2 skins have been a big part in the success of Counter-Strike 2. The basics are simple: Skins allow you to customize your weapons, your knife and your character models. What makes them unique is the fact that they are virtual items that are not permanently bound to your Steam account. You are free to trade with other players and you can buy or sell them. All the skins that you own are kept in your Steam inventory to be used as you please.\n\n  \n\n\ There are multiple ways to obtain those skins. CS2 has a key system that allows you to open weapon crates for a chance of receiving a random item from a certain collection, with those items ranging from common drops to exceedingly rare knives or gloves. Other skins are only available as random drops in-game or from limited-time CS2 operations. Alternatively, you can just buy CS2 skins that you want. With different tiers of rarity, prices for CS2 skins can range from a few cents to thousands of Dollars. The CS2 economy has been growing for years  and there is no end in sight.",
   whiteText: ["text", "white"],
 },
 {
   heading: "How to buy CS2 skins on Skinport",
   description: "Skinport makes it transparent and easy to buy CS2 skins. \n\n \n\n Whether you are looking to buy a full CS2 loadout or just want to complete your P250 Sand Dune collection, Skinport has you covered. Our CS2 market with thousands of available skins lets you purchase CS2 items with just a few clicks. \n\n \n\n  Skinport is not just a market for CS2 knives, there is also a great selection of more affordable skins available. Discover a huge number of low-priced skins for sale on the best site. Most items are significantly cheaper to buy than on the Steam market, so Skinport allows you to save money on every purchase. \n\n \n\n  Buying CS2 skins on Skinport is a hassle-free experience. To buy a skin, simply add it to your shopping cart. Once you found all the products you were looking for, you can proceed to checkout and pay for your order. After that, the skins are yours. No need to top-up your balance first or wait for the seller to deliver. Our wide array of payment options ensures that buying is as easy as any other online shopping. \n\n \n\n  Unlike other CS2 marketplaces, Skinport does not charge any hidden fees. The price you see is the price you pay. This 0% fee makes Skinport the best market to buy. To make the whole process even more convenient, Skinport automatically converts all prices to your local currency. No matter where you are located, your new loadout is just a few clicks away. \n\n \n\n After you buy CS2 skins you can send them straight to your Steam account. One of our bots will send you a trade offer with your purchased items, you just have to accept it. Some items might have trade locks for 0-8 days. If you buy a trade locked item, it will be safely stored in your Skinport inventory until the trade lock is over. As soon as the counter hits zero, you can request the skin to be sent to your Steam account. \n\n \n\n Once you bought skins, you can use them in game to personalize your loadout. But that is not the only way to use your newly acquired skins. What makes those items unique is that they can be traded with other players. The CS2 trading community is huge and constantly growing. With Skinport’s cheap prices for CS2 skins and ease of use, you can get started on your trading journey in mere minutes. \n\n \n\n No matter how you use them, our skin shop always offers you the best price. Get started today and save money whenever you buy CS skins.",
   whiteText: ["P250 Sand Dune", "white"],
 },
 {
   heading: "Missionary Item 3",
   description: "Yet another description with different words. Different words should be white.",
   whiteText: ["different", "words", "white"],
 },
 {
   heading: "Missionary Item 4",
   description: "Description for the fourth item. Some of the words here will be white. Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.Description for the fourth item. Some of the words here will be white.",
   whiteText: ["fourth", "white"],
 },
 {
   heading: "Missionary Item 5",
   description: "Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.Description for the fifth item. This item has fewer words to be white.",
   whiteText: ["fifth", "item"],
 },
 {
   heading: "Missionary Item 6",
   description: "Description for the sixth item. Only a single word will be white here.",
   whiteText: ["sixth"],
 },
 {
   heading: "Missionary Item 7",
   description: "Description for the seventh item. No words will be white in this one.",
   whiteText: [], // Empty array for no white text
 },
];

const MissionaryLayout = () => {
 
  const breakpointColumnsObj = {
   default: 3,
   1100: 2,
   700: 1
 };
 
 return (
   <>
     <div className='mb-5'>
       <div className='flex flex-col justify-start text-white'>
         <h2 className='font-semibold text-xl leading-tight'>Buy & Sell CS2 Skins - Easy and Secure with Skinport</h2>
         <p className='description leading-tight mt-1'>Safe. Fast. Reliable. Skinport is one of the best CS2 marketplace to buy or sell your CS2 Skins. With zero buyer fees we always ensure the cheapest skin prices for our customers. Skinport's massive user base allows you to sell your skins almost instantly.</p>
       </div>
     </div>
     <Masonry
       breakpointCols={breakpointColumnsObj}
       className="flex animation-slide-fwd border-t second-bg mb-7 border-gray-600"
     >
       {missionaryItems.map((item, index) => (
         <MissionaryItem
           key={index}
           heading={item.heading}
           description={item.description}
           whiteText={item.whiteText}
         />
       ))}
     </Masonry>
   </>
 );
 };
 
 const MissionaryItem = ({ heading, description, whiteText }) => {
  const renderDescription = () => {
    // Replace \n\n with <br> tags for line breaks
    const paragraphs = description.split('\n\n');
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="description" style={{ textAlign: 'left' }}>
        {paragraph.split('\n').map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    ));
  };
 
  return (
    <div className="missionary-item flex flex-col">
      <h2 className="heading">{heading}</h2>
      <p className="description" style={{ textAlign: 'left' }}>{renderDescription()}</p>
    </div>
  );
 };
 
 export default MissionaryLayout;