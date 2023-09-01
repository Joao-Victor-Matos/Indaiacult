import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Titulo qualquer 1",
    desc: "Descrição qualquer 1",
    img: "https://c.files.bbci.co.uk/16910/production/_94223429_gettyimages-495788474.jpg",
  },
  {
    id: 2,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
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

const Home = () => {
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="postlink" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Ler Mais</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
