



import React from "react";

const Map = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto p-4">
      <h1 className="p-2 text-lg font-semibold">Map View</h1>
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] border rounded-lg shadow-lg overflow-hidden">
        {/* Google Map Embed */}
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.758827434904!2d80.2365!3d13.0701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260e68aebd451%3A0x8cfb47d60ed6225e!2sKoyambedu%2C%20Chennai%2C%20Tamil%20Nadu%20600072%2C%20India!5e0!3m2!1sen!2sus!4v1712112549876!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;



