import React, { useState } from "react";
// get use state prop from react(hook)this give access to state of a func. component
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  // initialize new piece of state
  const onTitleClick = (index) => {
    setActiveIndex(index);
    // we update value of our piece of state any time when user click on title
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key="item.title">
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordian">{renderedItems}</div>;
};
export default Accordion;
