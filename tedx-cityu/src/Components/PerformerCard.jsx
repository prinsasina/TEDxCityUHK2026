import React from "react";
import { styled } from "styled-components";
import Performerdata from "../Data/PerformerData.json"

const Container = styled.div`
background-color: rgb(255 255 255);
`
const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`;
const Card = styled.div``;
const Image = styled.img``;
const Performer = styled.div``;

export default function PerformerCard() {
    return (
        <Container>
            {/* <div className="font-bold text-center text-3xl py-3 font-textfont md:text-7xl md:py-7">   
                Performers
            </div> */}
            <CardWrapper>
            {Performerdata.filter(item => !item._example).map((item, index) => (
                <Performer className="relative mb-4 md:mb-5 mx-3 pb-5" key={index} 
                // to={`/Performer/${item.path}`}
                >
                    <Card className="flex justify-center items-center overflow-hidden inline-block">
                        <Image src= {require("../Assets/Members/Performer/" + item.img) } alt={item.fname} className="w-26 h-26 md:w-48 md:h-48 rounded-md mx-auto"/>
                    </Card>
                    <div className="text-center font-textfont font-bold text-md md:text-3xl my-2 md:my-4">
                        {item.fname}
                    </div>
                    {/* <div className="absolute bottom-0 inset-x-0 text-center font-textfont text-md md:text-xl text-zinc-500">
                        {item.country}
                    </div> */}
                </Performer>
            ))}
            </CardWrapper>
        </Container>
    )
}