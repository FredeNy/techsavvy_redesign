/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "https://kxhcvsawrtnioroqlqtz.supabase.co/storage/v1/object/public/images/",
        },
      ],
    },
  };

export default nextConfig;
