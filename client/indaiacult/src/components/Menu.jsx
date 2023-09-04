import React from "react";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Titulo qualquer 1",
      desc: "Descrição qualquer 1",
      img: "https://c.files.bbci.co.uk/16910/production/_94223429_gettyimages-495788474.jpg",
    },
    {
      id: 2,
      title: "T 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, maiores nam blanditiis a libero molestiae ex animi quam nisi magni?",
      img: "https://c.files.bbci.co.uk/16910/production/_94223429_gettyimages-495788474.jpg",
    },
    {
      id: 3,
      title: "Titulo qualquer 3",
      desc: "Descrição qualquer 3",
      img: "https://c.files.bbci.co.uk/16910/production/_94223429_gettyimages-495788474.jpg",
    },
    {
      id: 4,
      title: "Titulo qualquer 4",
      desc: "Descrição qualquer 4",
      img: "https://c.files.bbci.co.uk/16910/production/_94223429_gettyimages-495788474.jpg",
    },
    {
      id: 5,
      title: "Titulo qualquer 5",
      desc: "Descrição qualquer 5",
      img: "https://c.files.bbci.co.uk/16910/production/_94223429_gettyimages-495788474.jpg",
    },
  ];

  return (
    <div className="menu">
      <h1>Outras publicações</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Ler Mais</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
