import React from 'react';

const LearningSection = () => {
  return (
    <div className="w-full center flex-col gap-2 py-8 xl:py-12">
      <div className="w-full flex justify-between items-center">
        <p className="text-main text-16 sm:text-20 lg:text-24 text-white font-semibold">Learn more</p>
        <p className="hidden md:flex text-10 sm:text-12 lg:text-14 text-gray font-medium text-gray-400">
          Check our blog for instructions, guides and more information!
        </p>
      </div>
      <div className="w-full center gap-1 sm:gap-2   lg:gap-6 h-44 sm:h-56   lg:h-72">
        {/* Dynamically rendered articles sections */}
        {articleSections.map((section) => (
          <div className={`flex-1 px-2 sm:px-4 lg:px-8 py-4 lg:py-8 rounded-6 h-full flex flex-col justify-between ${section.hidden ? 'hidden md:flex' : 'flex'}`} style={{ background: section.background }}>
            <div>
              <p className="text-12 text-white sm:text-16 md:text-24 lg:text-30 text-main font-medium">{section.title}</p>
              <p className="text-10 text-gray-400  lg:text-14 text-gray font-medium">{section.description}</p>
            </div>
            <div className="w-20 sm:w-24 lg:w-30 h-9 sm:h-11 lg:h-12 rounded-6 center hover" style={{ background: 'rgba(104, 102, 133, 0.15)' }}>
              <p className="text-gray-68 text-10 sm:text-12 lg:text-14 font-semibold text-gray-400">Read More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Data for the article sections
const articleSections = [
  {
    title: 'Learn about the best CS2 skins',
    description: 'Want to know what CS2 skins are worth the most? How about which skins are the rarest. Check out this article!',
    background: 'radial-gradient(72.27% 72.27% at 50% 27.73%, rgba(54, 53, 73, 0.2) 0%, rgba(41, 40, 56, 0.2) 100%), rgba(41, 40, 56, 0.5)',
    hidden: false,
  },
  {
    title: 'Learn about the best Rust skins',
    description: 'What to know what rust skins are worth the most? Check out this article!',
    background: 'radial-gradient(72.27% 72.27% at 50% 27.73%, rgba(54, 53, 73, 0.2) 0%, rgba(41, 40, 56, 0.2) 100%), rgba(41, 40, 56, 0.5)',
    hidden: true,
  },
  {
    title: 'Learn how to trade your Rust skins for CS2 skins',
    description: 'Want to get a new csgo knife for some of your old rust skins? Check out this article and we\'ll show you how!',
    background: 'radial-gradient(72.27% 72.27% at 50% 27.73%, rgba(54, 53, 73, 0.2) 0%, rgba(41, 40, 56, 0.2) 100%), rgba(41, 40, 56, 0.5)',
    hidden: false,
  },
];

export default LearningSection;
