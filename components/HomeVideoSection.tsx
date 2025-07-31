import React from 'react';

const HomeVideoSection = () => (
  <section className="w-full flex justify-center items-center bg-white py-12">
    <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
      <video
        src="/myvideo.mp4"
        controls
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
    </div>
  </section>
);

export default HomeVideoSection; 