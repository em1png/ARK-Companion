import * as React from "react"
import { useNavigate, Link } from 'react-router-dom'

import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

const components: { title: string; to: string }[] = [
  {
    title: "All creatures",
    to: "/creatures/all",
  },
  {
    title: "Capabilities & Carrying",
    to: "/creatures/capabilities",
  },
  {
    title: "Stats Rating",
    to: "/creatures/stats",
  },
  {
    title: "Headshots & Modifiers",
    to: "/creatures/modifiers",
  },
  {
    title: "XP Per Kill",
    to: "/creatures/xp",
  }
]

const itemsMenu: { title: string, to: string, description?: string }[] = [
  {
    title: "Kibble",
    to: "/items/kibbles",
  },
  {
    title: "Resources",
    to: "/items/resources",
  },
  {
    title: "Consumables",
    to: "/items/consumables",
  },
  {
    title: "Dyes",
    to: "/items/dyes",
  }
]

const menuOthersList: { title: string, to: string, description?: string }[] = [
  {
    title: "Kibble",
    to: "/items/kibbles",
  },
  {
    title: "Resources",
    to: "/items/resources",
  },
  {
    title: "Consumables",
    to: "/items/consumables",
  },
  {
    title: "Dyes",
    to: "/items/all",
  }
]

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full h-fit">
      <div className="container flex flex-col md:flex-row flex-between py-4">
        <div className="flex cursor-pointer mb-5 md:mb-0" onClick={() => navigate('/')}>
          <div className="flex flex-center mr-3 " >
            <img src="/logo-small.png" alt="" width={40} height={40} />
          </div>

          <Link to='/'>
            <div className="flex flex-col" >
              <h1 className="h3-bold">Dododex</h1>
              <h3 className="subtle-medium text-light-2">ARK: Survival Evolved & Ascended Companion </h3>
            </div>
          </Link>
        </div>

        <div>
          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Creatures</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[250px] bg-black">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        to={component.to}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Items</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[250px] bg-black">
                    {itemsMenu.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        to={component.to}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger disabled>Others</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[250px] bg-black">
                    {menuOthersList.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        to={component.to}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

      </div>

      <div className="h-[2px] w-full bg-zinc-800"></div>
    </section >
  )
}

const ListItem = React.forwardRef<React.ElementRef<typeof Link>, React.ComponentPropsWithoutRef<typeof Link>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-700 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";


export default Topbar