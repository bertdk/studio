import { Card } from "./Card";

export const Products = () => (
  <>
    <h1 className="text-4xl my-5">Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {[
        {
          name: "Sortox",
          description: "Visualization of sorting algorithms",
          url: "sort",
          active: true,
        },
        {
          name: "Chattie",
          description: "Chat application using sockets",
          url: "chat",
          active: true,
        },
        {
          name: "MatchMate",
          description: "Manage your tournaments with friends",
          url: "matchmate",
          active: true,
        },
        {
          name: "aMAZEing",
          description: "Maze game",
          url: "maze",
          active: false,
        },
      ].map(({ name, description, url, active }, i) => (
        <Card
          name={name}
          description={description}
          url={`https://${url}.bert.studio`}
          active={active}
          key={i}
        />
      ))}
    </div>
  </>
);

Products.propTypes = {};
