import React from "react";
import "../ReadMore/ReadMore.css";

const ReadMore = () => {
  return (
    <div className="container">
      <div className=" d-flex justify-contant-center">
        <img
          style={{ height: "600px", marginTop: "100px" }}
          src="https://habrastorage.org/getpro/habr/upload_files/393/586/360/3935863609416855fa2234ecc2d38a2f.jpg"
          alt=""
        />
        <div>
          <h1 style={{ textAlign: "center", marginTop: "30px" }}>
            TITLE HEADING
          </h1>
          <p style={{ padding: "30px", fontSize: "18px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            minus placeat sed hic est animi voluptas ducimus labore veritatis!
            Quas doloribus blanditiis quasi temporibus at voluptatum! Blanditiis
            et incidunt ex ipsum adipisci sed accusantium sit non distinctio?
            Quo tenetur minima voluptatibus eveniet ducimus, hic ratione, saepe
            veniam repellat alias odio quis dicta excepturi earum consectetur
            reiciendis quaerat. Inventore fugiat impedit accusantium doloremque
            quae hic quibusdam non, distinctio labore rerum nisi molestias
            similique reiciendis ullam esse repudiandae eveniet doloribus quia
            accusamus! In, tempore? Vero omnis voluptate porro quam sunt,
            maiores veritatis obcaecati? Quod error ea accusantium dolorum
            consequuntur praesentium molestiae! Quibusdam assumenda cum veniam
            ratione modi temporibus ad veritatis accusantium officia itaque,
            aperiam provident, quaerat enim repellendus. Blanditiis, minima modi
            voluptas autem dolorum provident necessitatibus deleniti molestiae
            facere, doloribus aut amet inventore veritatis ducimus omnis earum
            culpa voluptatem quibusdam repellendus nesciunt sapiente adipisci
            voluptatibus. Nobis nostrum et beatae odio architecto explicabo,
            veniam eos quam qui mollitia necessitatibus quibusdam quas odit hic
            eum ad, inventore delectus? Laboriosam amet magni asperiores quidem.
            Soluta vitae eum accusantium, suscipit quod a aut accusamus
            exercitationem assumenda architecto nihil maiores tempore. Repellat,
            maiores praesentium exercitationem iusto esse debitis vero nobis
            error quos tempore aperiam culpa ratione aut a consequatur,
            laboriosam assumenda accusantium officia dolorem illo rerum sint!
            Sint molestiae assumenda repellendus voluptas eveniet itaque iure
            praesentium non! Ab, ex quod dolor nesciunt assumenda non officiis
            nulla alias blanditiis reprehenderit consequatur dicta sequi
            dolores, facilis cum ullam aliquam   ipsam ad rem corporis?
          </p>
        </div>
      </div>
      <h2>Comments</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          width: "100%",
          height:"180px",
          backgroundColor:"#dadada",
          borderRadius:"5px"
        }}
      >
        <input style={{ width: "250px", marginBottom:"15px" }} type="text" placeholder="Name" />

        <textarea type="text" placeholder="Comment" />
        <p></p>
        <button className="btn btn-dark">Post</button>
      </div>
      <div className="comments">
        <div className="atakhan">
          <span><b>Atakhan</b></span>
          <span><i> 17 hour ago</i></span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem facilis rerum soluta placeat! Doloremque, reprehenderit.</p>
        </div>
        <div className="atakhan">
          <span><b>Bayaman</b></span>
          <span><i> yesterday</i></span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem facilis rerum soluta placeat! Doloremque, reprehenderit.</p>
        </div>
        <div className="atakhan">
          <span><b>Askar</b></span>
          <span><i> 2 days ago</i></span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem facilis rerum soluta placeat! Doloremque, reprehenderit.</p>
        </div>
        <div className="atakhan">
          <span><b>Nargiza</b></span>
          <span><i> 7 days ago</i></span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem facilis rerum soluta placeat! Doloremque, reprehenderit.</p>
        </div>
        <div className="atakhan">
          <span><b>Ulan</b></span>
          <span><i> 15 days ago</i></span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem facilis rerum soluta placeat! Doloremque, reprehenderit.</p>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
