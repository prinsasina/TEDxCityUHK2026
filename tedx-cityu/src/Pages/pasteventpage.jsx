import { styled } from "styled-components";
import PastEventsImage from "../Assets/PastEvents/TEDx Website Design.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const Image = styled.img`
  width: 100%;
  max-width: 1600px;
  height: auto;
`;

export default function PastEventPage() {
  return (
    <Container>
      <Image src={PastEventsImage} alt="TEDx Past Events" />
    </Container>
  );
}