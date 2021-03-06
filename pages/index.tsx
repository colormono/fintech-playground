import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import classNames from 'classnames';
import { Heading, CustomLink } from '@/components/ui';
import AssetsList from '@/components/coincap/List';

const Page: NextPage = () => {
  return (
    <article>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta property="og:description" content="And a social description for our cool page" />
        <meta property="og:image" content="https://example.com/images/cool-page.jpg" />
      </Head>

      <div className="my-12 max-w-lg">
        <Heading type="h1">Hello</Heading>
        {/* <Text className="mt-3 text-2xl">This is a ready to use Next.js and TailwindCSS template built for Sprint-01</Text> */}
        <h2 className="mt-3 text-2xl">
          This is a ready to use Next.js and TailwindCSS{' '}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-warning-100 relative inline-block">
            <span className="relative text-black">template</span>
          </span>{' '}
          built for Sprint-01
        </h2>
      </div>

      <AssetsList />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        <Card title="👋 Getting started" description="How this template works, and how you can customize it." href="/docs" />

        <div className="p-6 text-left border border-neutral-300  border-dashed rounded-xl md:col-span-2">
          <h3 className="text-2xl font-bold">⛑ Health-check</h3>
          <p className="mt-4 text-xl">
            <CustomLink href="/health-check/ui">UI</CustomLink>, <CustomLink href="/health-check/env">Env</CustomLink>,{' '}
            <CustomLink href="/health-check/ssg">SSG</CustomLink>, <CustomLink href="/health-check/isr">ISR</CustomLink>,{' '}
            <CustomLink href="/health-check/ssr">SSR</CustomLink>, <CustomLink href="/health-check/csr">CSR</CustomLink>,{' '}
            <CustomLink href="https://truenorth-template-nextjs.netlify.app/api/health-check">API Routes</CustomLink>
            ...
          </p>
        </div>

        <Card
          title="🧩 UI Components"
          description="Alert, Avatar, Badge, Button, Dropdown, Modal, Input, Label, Select, Table, Textarea, Toggle, ToggleMode..."
          href="/docs/example"
          className="md:col-span-2"
        />

        <Card
          title="🦄 Advanced"
          description="What if a task say: show a unicorn with a button..."
          href="https://mate-ui.truenorth.co/docs/advanced-components"
        />

        <Card title="📓 Next.js" description="Find in-depth information about Next.js features and API." href="https://nextjs.org/docs" />

        <Card
          title="📓 TailwindCSS"
          description="A utility-first CSS framework to build any design, directly in your markup."
          href="https://tailwindcss.com/docs/utility-first"
        />

        <Card
          title="🤓 Examples"
          description="Learn by example with these Next.js community projects."
          href="https://github.com/vercel/next.js/tree/main/examples"
        />

        {/* <Card
          title="💬 Collaborate"
          description="Report Issues, Request Features."
          href="https://github.com/truenorth-tech/template-nextjs/issues"
          className="col-span-3 border-dashed"
        /> */}

        <div className="p-6 text-left border border-neutral-300  border-dashed rounded-xl md:col-span-3">
          <h3 className="text-2xl font-bold">💬 Collaborate</h3>
          <p className="mt-4 text-xl">
            <CustomLink href="https://github.com/truenorth-tech/template-nextjs/issues/new">Report Issues</CustomLink>,{' '}
            <CustomLink href="https://github.com/truenorth-tech/template-nextjs/issues">Solve Issues</CustomLink>,{' '}
            <CustomLink href="mailto:mariano.rivas@truenorth.co">Request Features</CustomLink>, ...
          </p>
        </div>
      </div>
    </article>
  );
};

export type CardProps = {
  /**
   * The variant type of the element
   */
  href?: string;
  /**
   * Defines the color of the helper text (the same as with Input, Select, etc.)
   */
  title?: string;
  /**
   * Defines the color of the helper text (the same as with Input, Select, etc.)
   */
  description?: string;
  /**
   * Defines the color of the helper text (the same as with Input, Select, etc.)
   */
  className?: string;
};

const Card = ({ href, title, description, className }: CardProps) => {
  const cls = classNames(
    'block group p-6 text-left border border-neutral-300 rounded-xl hover:text-primary-600 focus:text-primary-600 dark:border-neutral-600',
    className
  );

  const isExternal = href.includes('http');

  if (isExternal) {
    return (
      <a href={href} className={cls}>
        <h3 className="text-2xl font-bold">
          {title} <span className="group-hover:translate-x-2 inline-block transform duration-200 ease-in-out">&rarr;</span>
        </h3>
        <p className="mt-4 text-xl">{description}</p>
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={cls}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-4 text-xl">{description}</p>
      </a>
    </Link>
  );
};

export default Page;
