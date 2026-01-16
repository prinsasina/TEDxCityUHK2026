import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Speakerdata from "../Data/SpeakerData.json"

const Container = styled.div`
background-color: rgb(0, 0, 0);
`
const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`;
const Card = styled.div``;
const Image = styled.img``;

export default function SpeakerCard() {
    return (
        <Container>
            {/* <div className="mt-5 font-bold text-white text-center font-textfont text-3xl py-3 md:text-7xl md:py-7">
                Speakers
            </div> */}
            <CardWrapper>
            {Speakerdata.filter(item => !item._example).map((item, index) => (
                <Link className="my-2 mx-3" key={index} to={`/speaker/${item.path}`}>
                    <Card className="flex justify-center items-center overflow-hidden inline-block">
                        <Image src= {require("../Assets/Members/Speaker/" + item.img) } alt={item.fname} className="w-26 h-26 md:w-48 md:h-48 rounded-md hover:scale-110 transition-transform duration-500 cursor-pointer mx-auto"/>
                    </Card>
                    <div className="text-center font-textfont font-bold text-md md:text-3xl mt-2 md:mt-5 md:mb-7 text-white">
                        {item.fname}
                    </div>
                </Link>
            ))}
            </CardWrapper>
        </Container>
    )
}