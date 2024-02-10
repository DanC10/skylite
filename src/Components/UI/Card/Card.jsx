import classes from "./Card.module.css";

const Card = ({ children, expand }) => {
  return (
    <div className={`${classes.card} ${expand && classes.expanded}`}>
      {children}
    </div>
  );
};

export default Card;
