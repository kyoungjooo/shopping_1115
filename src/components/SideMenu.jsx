export default function SideMenu({ text, key, onClick }) {
  const more = ["(All)", "Bag", "Pouch"];
  const sendNavPath = () => {
    onClick(text);
  };

  return (
    <>
      <li className="border-btm menu" key={key} onClick={sendNavPath}>
        {text}
      </li>
      {text === "LittleThing" ? (
        <ul>
          {more.map((el, i) => (
            <li key={i} className="menu menu-nth border-btm">
              {el}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
