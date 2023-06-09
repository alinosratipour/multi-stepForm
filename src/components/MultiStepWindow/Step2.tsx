import { ChangeEvent, useEffect, Dispatch, SetStateAction } from "react";
import { If } from "tsx-control-statements/components";
import Card from "../UILiberary/Card/Card";
import Icon from "../../assets/images/icon-arcade.svg";
import AdvancIcon from "../../assets/images/icon-advanced.svg";
import IconPro from "../../assets/images/icon-pro.svg";
import ToggleSwitch from "../UILiberary/ToggleSwitch/ToggleSwitch";
import "./MultiStepWindow.scss";
const plans = [
  {
    name: "Arcade",
    img: Icon,
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    name: "Advanced",
    img: AdvancIcon,
    price: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    name: "Pro",
    img: IconPro,
    price: {
      monthly: 15,
      yearly: 150,
    },
  },
];

interface Step2Props {
  selectedCard: number;
  setSelectedCard: Dispatch<SetStateAction<number>>;
  planType: string;
  onPlanTypeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleState: boolean;
  setToggleState: Dispatch<SetStateAction<boolean>>;
}

const Step2: React.FC<Step2Props> = ({
  selectedCard,
  toggleState,
  setToggleState,
  setSelectedCard,
  onPlanTypeChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToggleState(e.target.checked);
    onPlanTypeChange(e);
  };

  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(cardIndex);
  };
  useEffect(() => {
    localStorage.setItem("selectedCard", String(selectedCard));
  }, [selectedCard]);

  useEffect(() => {
    const storedSelectedCard = localStorage.getItem("selectedCard");
    if (storedSelectedCard) {
      setSelectedCard(parseInt(storedSelectedCard));
    }
  }, [setSelectedCard]);

  useEffect(() => {
    const storedToggleState = localStorage.getItem("toggleState");
    if (storedToggleState) {
      setToggleState(storedToggleState === "true");
    }
  }, [setToggleState]);

  useEffect(() => {
    localStorage.setItem("toggleState", String(toggleState));
  }, [toggleState]);
  return (
    <div>
      <div className="title">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="cardContaier">
          {plans.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.name}
                icon={item.img}
                subtitle={`${
                  !toggleState
                    ? `$${item.price.monthly}/mo`
                    : `$${item.price.yearly}/yr`
                }`}
                colorscheme={index === selectedCard && "primary"}
                onClick={() => handleCardClick(index)}
              >
                <If condition={toggleState}>
                  <span className="yearlyOffer">2 months free</span>
                </If>
              </Card>
            );
          })}
        </div>

        <div className="toggleContainer">
          <div className={`on ${toggleState && "off"}`}>Monthly</div>
          <ToggleSwitch onChange={handleChange} isChecked={toggleState} />
          <div className={`on ${!toggleState && "off"}`}>Yearly</div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
