import { styled } from "styled-components";

const Container = styled.div`
display:flex;
gap:2rem;
margin:4rem auto;
max-width:1400px;
border:4px solid black;
clip-path: polygon(
0% 0%,
100% 0%,
100% 95%,
0% 100%
);
background:white;

@media (max-width:900px){
flex-direction:column;
}
`;

const ImagePanel = styled.div`
flex:40%;
border-right:4px solid black;
overflow:hidden;
display:flex;
align-items:center;
justify-content:center;
background:#FFF;

img{
width:90%;
height:90%;
object-fit:contain;
filter: grayscale(80%) contrast(1.2);
}
`;

const ContentPanel = styled.div`
flex:60%;
padding:2rem;
`;

const Title = styled.h2`
font-size:3rem;
font-weight:900;
text-transform:uppercase;
font-family:'Archivo Black',sans-serif;
`;

const Desc = styled.p`
margin-top:1rem;
font-size:1.1rem;
line-height:1.7;
`;

const SpeakerTitle = styled.h3`
margin-top:2rem;
font-size:1.8rem;
font-weight:800;
text-transform:uppercase;
`;

const SpeakerList = styled.ul`
margin-top:1rem;
list-style:none;
padding:0;
`;

const SpeakerItem = styled.li`
padding:0.4rem 0;
font-size:1rem;
border-bottom:1px solid #eee;
`;

function EventCard({img,title,desc,speakers}){

return(
<Container>

<ImagePanel>
<img src={img} alt={title}/>
</ImagePanel>

<ContentPanel>

<Title>{title}</Title>

<Desc>{desc}</Desc>

<SpeakerTitle>Speakers</SpeakerTitle>

<SpeakerList>
{speakers.map((speaker,index)=>(
<SpeakerItem key={index}>
{speaker}
</SpeakerItem>
))}
</SpeakerList>

</ContentPanel>

</Container>
)

}

export default EventCard