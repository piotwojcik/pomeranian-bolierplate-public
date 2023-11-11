import './styles.css';

export const Blocks = ({ icon, title, link, text }) => {
  return (
    <div className="singlebox">
      <p>{title}</p>
      <div className="width">{icon}</div>
      <div className="wrap-text">{text}</div>
      <a href={link}>Zobacz więcej</a>
    </div>
  );
};
