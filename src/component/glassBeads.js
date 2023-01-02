import React from "react";
import { useState, useEffect } from "react";
import products from "../assets/products.json";
import "./glassBeads.scss";

function GlassBeads() {
  const [beads, setBeads] = useState(products);
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  useEffect(() => {
    let purpleGroup = beads.filter(
      (bead) =>
        (bead.title.includes("Purple") ||
          bead.title.includes("Lavender") ||
          bead.title.includes("Lilac") ||
          bead.title.includes("Violet")) &&
        bead.variants[0].inventory_quantity !== 0
    );
    let pinkGroup = beads.filter(
      (bead) =>
        bead.title.includes("Pink") && bead.variants[0].inventory_quantity !== 0
    );
    let blackGroup = beads.filter(
      (bead) =>
        (bead.title.includes("Black") ||
          bead.title.includes("Grey") ||
          bead.title.includes("White")) &&
        bead.variants[0].inventory_quantity !== 0
    );
    let orangeGroup = beads.filter(
      (bead) =>
        bead.title.includes("Orange") &&
        bead.variants[0].inventory_quantity !== 0
    );
    let greenGroup = beads.filter(
      (bead) =>
        bead.title.includes("Green") &&
        bead.variants[0].inventory_quantity !== 0
    );
    let yellowGroup = beads.filter(
      (bead) =>
        bead.title.includes("Yellow") &&
        bead.variants[0].inventory_quantity !== 0
    );
    let blueGroup = beads.filter(
      (bead) =>
        (bead.title.includes("Blue") || bead.title.includes("Turquoise")) &&
        bead.variants[0].inventory_quantity !== 0
    );
    let redGroup = beads.filter(
      (bead) =>
        (bead.title.includes("Red") ||
          bead.title.includes("Maroon") ||
          bead.title.includes("Multicolour")) &&
        bead.variants[0].inventory_quantity !== 0
    );
    let outOfStock = beads.filter(
      (bead) => bead.variants[0].inventory_quantity === 0
    );
    shuffle(purpleGroup);
    shuffle(pinkGroup);
    shuffle(blackGroup);
    shuffle(orangeGroup);
    shuffle(greenGroup);
    shuffle(yellowGroup);
    shuffle(blueGroup);
    shuffle(outOfStock);
    let totalBeads = [
      purpleGroup,
      pinkGroup,
      blackGroup,
      orangeGroup,
      greenGroup,
      yellowGroup,
      blueGroup,
      redGroup,
    ];
    shuffle(totalBeads);
    totalBeads.push(outOfStock);
    let newBeads = totalBeads.flat();
    setBeads(newBeads);
  }, []);

  return (
    <div className="overrideGlassBeads">
      <h1>10 mm Glass Beads</h1>
      <div className="cardContainer">
        {beads.map((bead) => {
          return (
            <div className="card">
              <div className="sale">sale</div>
              <img
                src={bead.image.src}
                alt="logo"
                height="300px"
                width="130px"
              />
              <h2>{bead.title}</h2>
              {bead.variants[0].inventory_quantity === 0 && (
                <h2>Out of Stock</h2>
              )}
              <h2>INR {bead.variants[0].price}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GlassBeads;
