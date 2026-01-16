import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Banner } from "../Components/banner";
import Speakerdata from "../Data/SpeakerData.json"
import Speaker from "../Components/Speaker";

const Container = styled.div``;

export default function Speakerpage(){
  let Query = useParams().path;
  const FilteredData = Speakerdata.filter((data) => data.path === Query);
  
    return(
        <Container>
            {/* <Navbar />  */}
            <Banner text1={"Speaker"}/>
            <Speaker data={FilteredData}/>
            {/* <Footer /> */}
        </Container>            
    );
}