import { useParams } from "react-router-dom";

function BlogsPage() {
  const { id } = useParams();
  console.log(id);
  return <div>blog page</div>;
}

export { BlogsPage };
