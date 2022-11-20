import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/Page2/99">URL-parameter</Link>
      <br />
      <Link to="/Page2/99?name=hogehoge">Query-parameter</Link>
    </div>
  );
};
