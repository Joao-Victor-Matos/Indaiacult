import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Escrever = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="criar">
      <div className="content">
        <input type="text" placeholder="Título" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publicar</h1>
          <span>
            <b>Estado</b> Rascunho
          </span>
          <span>
            <b>Visibilidade</b> Público
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">
            Carregar Imagem
          </label>
          <div className="buttons">
            <button>Salvar Rascunho</button>
            <button>Atualizar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoria</h1>
          <div className="cat">
            <input type="radio" name="cat" value="arte" id="arte" />
            <label htmlFor="arte">Arte</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="historia" id="historia" />
            <label htmlFor="historia">História</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="lugares" id="lugares" />
            <label htmlFor="lugares">Lugares</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escrever;
