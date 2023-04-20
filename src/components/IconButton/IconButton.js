import "./IconButton.scss";

function IconButton({ iconUrl, iconAlt, content, onClick }) {
  return (
    <button className="icon-button" onClick={onClick}>
      <img className="icon-button__icon" src={iconUrl} alt={iconAlt} />
      <span className="icon-button__content">{content}</span>
    </button>
  );
}
export default IconButton;
