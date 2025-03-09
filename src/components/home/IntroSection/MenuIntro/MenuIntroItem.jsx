const MenuIntroItem = ({ img, title, content, href }) => {
  return (
    <div>
      <img className="imgIntro" src={img} alt={title} />
      <strong>{title}</strong>
      <p>{content}</p>
      <a href={href}>Xem thêm</a>
    </div>
  );
};

export default MenuIntroItem;
