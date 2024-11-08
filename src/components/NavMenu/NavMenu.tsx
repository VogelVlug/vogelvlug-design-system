import * as NavMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { PropsWithChildren } from "react";

interface SubRoute {
  href: string;
  title: string;
  description: string;
}

interface Route {
  href: string;
  title: string;
  subRoutes?: SubRoute[];
}

interface NavMenuProps {
  routes: Route[];
}

export const NavMenu: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NavMenuPrimitive.Root className="relative z-10 list-none">
      <NavMenuPrimitive.List className="flex max-w-max flex-1 list-none items-center justify-center gap-6 text-sm">
        {children}
      </NavMenuPrimitive.List>

      <div className="absolute top-full flex justify-center">
        <NavMenuPrimitive.Viewport className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavMenuPrimitive.Root>
  );
};

interface NavMenuItemProps extends PropsWithChildren {
  href?: string;
  title: string;
}

export const NavMenuItem: React.FC<NavMenuItemProps> = ({ href, title, children }) => {
  if (!children) {
    return (
      <NavMenuPrimitive.Item>
        <NavMenuLink href={href} title={title} />
      </NavMenuPrimitive.Item>
    );
  }

  return (
    <NavMenuPrimitive.Item>
      <NavMenuPrimitive.Trigger className="flex items-center gap-1 font-semibold">
        {title} <ChevronDown className="size-4" />
      </NavMenuPrimitive.Trigger>
      <NavMenuPrimitive.Content className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
        <NavMenuPrimitive.Sub className="flex flex-col gap-4 p-4">
          {children}
        </NavMenuPrimitive.Sub>
      </NavMenuPrimitive.Content>
    </NavMenuPrimitive.Item>
  );
};

interface NavMenuLinkProps {
  href?: string;
  title: string;
}

const NavMenuLink: React.FC<NavMenuLinkProps> = ({ href, title }) => {
  return (
    <NavMenuPrimitive.Link asChild>
      <a className="text-sm font-semibold" href={href}>
        {title}
      </a>
    </NavMenuPrimitive.Link>
  );
};

export const NavSubMenuItem: React.FC<SubRoute> = ({ href, title, description }) => {
  return (
    <li className="w-[200px]">
      <NavMenuPrimitive.Link asChild>
        <a href={href} className="flex flex-col gap-2">
          <span className="text-sm font-semibold">{title}</span>
          <span className="text-sm text-subtitle">{description}</span>
        </a>
      </NavMenuPrimitive.Link>
    </li>
  );
};