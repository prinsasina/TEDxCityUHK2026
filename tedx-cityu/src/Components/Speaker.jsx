import React, { useEffect } from "react";
import { styled } from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;
const DescriptionWrapper = styled.div``;
const TitleText = styled.div``;
const Picture = styled.img``;

const Speaker = ({ data }) => {
  useEffect(() => {
    return () => {
      console.log(data);
    };
  }, [data]);

  return (
    <Container>
      {data.map((item, index) => (
        <Wrapper
          key={index}
          className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 font-textfont text-center md:text-left justify-center max-w-6xl mx-auto px-4 py-8"
        >
          {/* Image column – matches text column height */}
          <div className="md:w-1/2 flex items-stretch">
            <Picture
              src={require("../Assets/Members/Speaker/" + item.img)}
              alt={item.fname}
              className="w-full h-auto object-cover rounded-md"
              style={{ maxHeight: "100%" }}
            />
          </div>
          {/* Text column */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <TitleText className="font-bold text-3xl md:text-5xl mb-4 md:mb-6">
              {item.fname}
            </TitleText>
            <DescriptionWrapper className="text-justify text-base md:text-lg leading-relaxed">
              {item.desc.split('\n').map((para, i) => (
                <p key={i} className="mb-4">{para}</p>
              ))}
            </DescriptionWrapper>
          </div>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Speaker;