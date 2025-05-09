export default function List({ title, listType, children }) {
  return (
    <section className="list">
      <h2>{title}</h2>
      {listType === "ol" ? (
        <ol className="list-ol">{children}</ol>
      ) : (
        <ul className="list-ul">{children}</ul>
      )}
    </section>
  );
}
