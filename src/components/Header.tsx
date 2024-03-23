import { ModeToggle } from "@/components/theme/mode-toggle";
import { Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <header className='flex justify-between px-5 sm:px-8 xl:px-16 py-5'>
      <div>
        <h1 className='text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl bg-clip-text text-transparent bg-gradient-to-bl from-primary'>
          ANDRIA
        </h1>
      </div>
      <nav>
        <menu className='flex gap-2'>
          <li>
            <Link href='https://github.com/andriaku' target='blank'>
              <Button variant='outline' size='icon'>
                <Github className='h-5 w-5 font-light text-primary' />
              </Button>
            </Link>
          </li>
          <li>
            <Link
              href='https://www.linkedin.com/in/andro-kublashvili-36b7732b7/'
              target='blank'
            >
              <Button variant='outline' size='icon'>
                <Linkedin className='h-5 w-5 font-light text-primary' />
              </Button>
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/defiant.dna/' target='blank'>
              <Button variant='outline' size='icon'>
                <Instagram className='h-5 w-5 font-light text-primary' />
              </Button>
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
