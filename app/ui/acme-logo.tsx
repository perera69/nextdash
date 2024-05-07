import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { inter, lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.toString()} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className={`${inter.toString()} text-[44px]`}>Acme</p>
    </div>
  );
}
