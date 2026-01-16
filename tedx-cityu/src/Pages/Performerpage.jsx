import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Banner } from "../Components/banner";
import Performerdata from "../Data/PerformerData.json"
import Performer from "../Components/Performer";

const Container = styled.div``;

export default function Performerpage(){
  let Query = useParams().path;
  const FilteredData = Performerdata.filter((data) => data.path === Query);
  console.log(FilteredData);
  
    return(
        <Container>
            {/* <Navbar />  */}
            <Banner text1={"Performer"}/>
            <Performer data={FilteredData}/>
            {/* <Footer /> */}
        </Container>            
    );
}