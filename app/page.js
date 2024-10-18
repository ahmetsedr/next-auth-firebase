import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const SocialIcon = ({ href, label, IconComponent }) => (
  <Link href={href} aria-label={label}>
    <IconComponent className="text-2xl text-gray-900 hover:text-gray-700 transition-colors" />
  </Link>
);

export default function Home() {
  return (
    <main className="p-4">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-wrap items-center justify-center space-y-6 lg:space-y-0">
          <div className="w-full md:w-10/12 xl:w-7/12 px-4 text-center">
            <h1 className="font-bold mb-2 text-4xl text-gray-900 leading-tight lg:text-5xl">
              HOME PAGE
            </h1>
            <p className="mb-6 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Curabitur ac sagittis neque, vel egestas est.
            </p>
            <div className="flex justify-center space-x-4">
              <SocialIcon href="#" label="Facebook" IconComponent={FaFacebookF} />
              <SocialIcon href="#" label="Twitter" IconComponent={FaTwitter} />
              <SocialIcon href="#" label="Instagram" IconComponent={FaInstagram} />
              <SocialIcon href="#" label="LinkedIn" IconComponent={FaLinkedinIn} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
