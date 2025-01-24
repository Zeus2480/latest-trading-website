"use client";

import React from "react";

const DiscordSection = () => {
  // const handleAPI = (api: Client) => {
  //   // Hide elements after the API is ready
  //   api.on('ready', () => {
  //     // Log when the widget is ready
  //     console.log('Widget is ready');
  //   });
  // };

  return (
    <div
      id="results"
      className="relative isolate bg-[#11141a] min-h-screen py-24 sm:py-32"
    >
      {/* Gradient effect */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-gray-300">Results</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            See Real Profits in Action
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Join our Discord results channel to witness the power of Titans Algo
            in real time.
          </p>
        </div>

        {/* Discord Embed */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
        
          <iframe
            src="https://e.widgetbot.io/channels/1331294579693195455/1331294703056064605"
            allow="clipboard-write; fullscreen"
            height="600"
            width="100%"
          ></iframe>
          {/* <WidgetBot
            server="1331294579693195455"
            channel="1331294703056064605"
            className="rounded-lg"
            height={600}
            width="100%"
            // onAPI={handleAPI}
            options={{
              hideMembers: "true",
              hideGuildName: "true",
              hideChannels: "true",
            }}
            style={{
              borderRadius: "8px",
              border: "none",
            }}
          /> */}
        </div>

        {/* Join Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://discord.gg/8D9F23Ue"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-8 py-3 text-black hover:bg-gray-100 transition-colors font-medium"
          >
            Join Discord Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiscordSection;
