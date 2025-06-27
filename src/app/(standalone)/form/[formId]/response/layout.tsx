import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
   children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
   return (
      <div>
         <div className="flex items-center justify-between border-b p-2 px-5">
            <div className="relative flex flex-row items-center gap-2 text-lg font-semibold">
               <Image
                  src="/logo.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="m-0 p-0"
               />
            </div>

            <Button variant="link" asChild className="text-center">
               <Link href="/">Create your own forms</Link>
            </Button>
         </div>
         {children}
      </div>
   );
}
