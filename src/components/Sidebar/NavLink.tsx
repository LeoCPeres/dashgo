import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps {
  children: string;
  icon: ElementType;
}

export function NavLink({ children, icon }: NavLinkProps) {
  return (
    <Link display="flex" py="1" alignItems="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
