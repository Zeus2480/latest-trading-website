"use client";

import React from "react";
import AnimatedCard from "./AnimatedCard";
import ImageSlideshow from "./ImageSlideshow";

const Dashboard: React.FC = () => {
  return (
    <div id="features" className="relative -z-20 isolate bg-[#11141a] min-h-screen overflow-hidden">
      {/* <div
        aria-hidden="true"
        className="absolute -top-40 left-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[68.125rem] h-[68.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[68.125rem] h-[68.125rem] -translate-x-1/2 -translate-y-1/2 rotate-[120deg] bg-gradient-to-tr from-[#00ffff] to-[#7f00ff] opacity-50"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[68.125rem] h-[68.125rem] translate-x-1/3 rotate-[210deg] bg-gradient-to-tr from-[#0ff] to-[#ff1493] opacity-50"
        />
      </div> */}

      <div className="min-h-screen text-white py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-lg md:text-sm text-cyan-400 mb-2">Features</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            One Indicator
            <br />
            Ultimate Strategy!
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Unlock effortless trading with our custom-coded, invite-only
            TradingView indicator. Designed for traders of all levels, it
            simplifies your journey with easy-to-read high winrate signals and
            instant access. Start making money in trading today with zero
            knowledge!
          </p>
        </div>

        <div className="space-y-28">
          <AnimatedCard numberProp={1}>
            <div className="flex flex-col lg:flex-row gap-12 ">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-4xl md:text-5xl mb-12 font-semibold">
                  High Winrate <span className="text-cyan-400"> Signal</span>
                </h2>
                <p className="text-white text-xl">
                  With over 85% accuracy on monthly basis, titans algo sureshot
                  indicator is going to leave your account loaded in profits
                  every month
                </p>
              </div>
              <div className="lg:w-1/2">
              <div className="h-full flex items-center">

                <ImageSlideshow cardId={1} />
              </div>
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard numberProp={2}>
            <div className="flex flex-col lg:flex-row gap-16 ">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-4xl text-break md:text-5xl mb-12 font-semibold">
                  Non Repaint, Easily
                  <span className="inline sm:hidden">
                    <br />
                  </span>
                  <span className="text-cyan-400"> executable</span>
                </h2>
                <p className="text-white text-xl">
                  Each signal includes precise entry points, take profit levels,
                  and stop loss levels, making it incredibly easy to execute
                  trades. Settings can be customized according to your
                  preferences.
                </p>
              </div>
              <div className="lg:w-1/2">
              <div className="h-full flex items-center">
                <ImageSlideshow cardId={2} />

              </div>
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard numberProp={3}>
            <div className="flex flex-col lg:flex-row gap-12 ">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-4xl md:text-5xl mb-12 font-semibold">
                  Expert market analysis,
                  <span className="text-cyan-400"> pro-trade entries</span>
                </h2>
                <p className="text-white text-xl">
                  Get access to our exclusive Discord community, where you can
                  trade alongside pro traders. Use their expert market analysis
                  and personal entry signals to learn trading strategies and
                  make money at the same time!
                </p>
              </div>
              <div className="lg:w-1/2">
              <div className="h-full flex items-center">
                <ImageSlideshow cardId={3} />

              </div>
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard numberProp={4}>
            <div className="flex flex-col lg:flex-row gap-12 ">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-4xl md:text-5xl mb-12 font-semibold">
                  Copy Trading,{" "}
                  <span className="text-cyan-400"> Account Management</span>
                </h2>
                <p className="text-white text-xl">
                  Unlock premium access to copy trading and account management,
                  making it effortless for busy professionals to earn monthly
                  profits risk-free. Let us manage your trades while you enjoy
                  the rewards without the stress.
                </p>
              </div>
              <div className="lg:w-1/2">
              <div className="h-full flex items-center">
                <ImageSlideshow cardId={4} />

              </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
// "use client";

// import React from "react";
// import AnimatedCard from "./AnimatedCard";
// import ImageSlideshow from "./ImageSlideshow";

// const Dashboard: React.FC = () => {
//   return (
//     <div 
//       id="features" 
//       className="relative bg-[#11141a] -z-20 min-h-screen overflow-hidden"
//     >
//       <div className="min-h-screen text-white py-20 px-4 md:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto mb-16">
//           <div className="text-lg md:text-sm text-cyan-400 mb-2">Features</div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//             One Indicator
//             <br />
//             Ultimate Strategy!
//           </h1>
//           <p className="text-gray-400 text-lg max-w-2xl">
//             Unlock effortless trading with our custom-coded, invite-only
//             TradingView indicator. Designed for traders of all levels, it
//             simplifies your journey with easy-to-read high winrate signals and
//             instant access. Start making money in trading today with zero
//             knowledge!
//           </p>
//         </div>

//         <div className="space-y-28 relative z-10">
//           {[
//             {
//               number: 1,
//               title: "High Winrate Signal",
//               description: "With over 85% accuracy on monthly basis, titans algo sureshot indicator is going to leave your account loaded in profits every month",
//               cardId: 1
//             },
//             {
//               number: 2,
//               title: "Non Repaint, Easily executable",
//               description: "Each signal includes precise entry points, take profit levels, and stop loss levels, making it incredibly easy to execute trades. Settings can be customized according to your preferences.",
//               cardId: 2
//             },
//             {
//               number: 3,
//               title: "Expert market analysis, pro-trade entries",
//               description: "Get access to our exclusive Discord community, where you can trade alongside pro traders. Use their expert market analysis and personal entry signals to learn trading strategies and make money at the same time!",
//               cardId: 3
//             },
//             {
//               number: 4,
//               title: "Copy Trading, Account Management",
//               description: "Unlock premium access to copy trading and account management, making it effortless for busy professionals to earn monthly profits risk-free. Let us manage your trades while you enjoy the rewards without the stress.",
//               cardId: 4
//             }
//           ].map((card) => (
//             <AnimatedCard key={card.number} numberProp={card.number}>
//               <div className="flex flex-col lg:flex-row gap-12">
//                 <div className="lg:w-1/2 space-y-6">
//                   <h2 className="text-4xl md:text-5xl mb-12 font-semibold">
//                     {card.title.split(',')[0]}
//                     <span className="text-cyan-400">
//                       {' '}{card.title.split(',')[1] || ''}
//                     </span>
//                   </h2>
//                   <p className="text-white text-xl">{card.description}</p>
//                 </div>
//                 <div className="lg:w-1/2">
//                   <div className="h-full flex items-center">
//                     <ImageSlideshow cardId={card.cardId} />
//                   </div>
//                 </div>
//               </div>
//             </AnimatedCard>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;