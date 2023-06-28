import { useEffect, useState } from "react";
import { DotsThreeVertical } from "phosphor-react";

import { Container, Content, MenuWrapper } from "./styles";

interface MenuItem {
  label: string;
  action: () => void;
}

interface MenuProps {
  menuItems: MenuItem[];
  onClick: (action: () => void) => void;
}

export function Menu({ menuItems, onClick }: MenuProps) {
  const [isOpen, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleClick = (action: () => void) => {
    onClick(action);

    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest(".menu-content")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Container>
      <Content className="menu-content">
        <button onClick={handleToggleMenu}>
          <DotsThreeVertical size={32} />
        </button>

        {isOpen && (
          <MenuWrapper>
            {menuItems.map((item) => (
              <button key={item.label} onClick={() => handleClick(item.action)}>
                {item.label}
              </button>
            ))}
          </MenuWrapper>
        )}
      </Content>
    </Container>
  );
}
