/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ziknxyefoajebpvriuks.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/imagenes_productos/**',
      },
    ],
  },
};

export default nextConfig;
