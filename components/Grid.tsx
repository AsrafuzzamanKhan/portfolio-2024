import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data/index";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            titleClassName,
            description,
            img,
            imgClassName,
            spareImg,
            className,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              titleClassName={titleClassName}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
            ></BentoGridItem>
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
