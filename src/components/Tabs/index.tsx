import { Tab } from "./Tab";
import { Container } from "./styles";

interface TabsProps {
  tabs: string[];
  currentTab: number;
  onCLick: (index: number) => void;
}

export function Tabs({ tabs, currentTab, onCLick }: TabsProps) {
  return (
    <Container>
      {tabs.map((tab, index) => (
        <Tab
          key={tab}
          tab={tab}
          isActive={currentTab === index}
          onClick={() => onCLick(index)}
        />
      ))}
    </Container>
  );
}
