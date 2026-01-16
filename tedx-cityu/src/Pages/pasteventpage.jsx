import {Banner} from "../Components/banner";
import EventCard from "../Components/eventcard";

import PE2025 from "../Assets/PastEvents/2025.png"
import PE2024 from "../Assets/PastEvents/2024.png"
import PE2023 from "../Assets/PastEvents/2023.png"
import PE2021 from "../Assets/PastEvents/2021.png"
import PE2018 from "../Assets/PastEvents/2018.png"
import PE2017 from "../Assets/PastEvents/2017.png"
import PE2016 from "../Assets/PastEvents/2016.png"

import {styled} from "styled-components";

const ListItems = styled.li``;

export default function PastEventPage(){
  const eventcards = [
      {
        img: PE2025,
        title: "2025: Metamorphosis",
        desc: `Our theme for the TEDxCityUHongKong 2025 event is “Metamorphosis”. We expect our speakers to share their "secrets" to the audience. The secrets that we are referring may include industry insider insights, or the key to their personal successes. We are giving the speakers a platform to talk about their inspiring achievements in a beneficial way for the audience.`,
        speakers: [
          { SpeakerList1: "Dr. Vincent Lee || Orbis Volunteer Doctor" },
          { SpeakerList2: "Bernice Antoine || Sustainability Advocate, Youth Leader, Social Entrepreneur" },
          { SpeakerList3: "Almen Wong || Yoga Teacher, Co-Founder, PURE Gruop" },
          { SpeakerList4: "Megan Jaques || Influencer" },
          { SpeakerList5: "Stephanie Lown & Lola || Founder,Exploring Dogs" },
          { SpeakerList6: "Christian Suen || Influencer" },
          { SpeakerList7: "" },
          { SpeakerList8: "" },
        ]
      },
      {
        img: PE2024,
        title: "2024: Spill the Tea",
        desc:'Our theme for the TEDxCityUHongKong 2024 event is “Spill the Tea”. We expect our speakers to share their "secrets" to the audience. The secrets that we are referring may include industry insider insights, or the key to their personal successes. We are giving the speakers a platform to talk about their inspiring achievements in a beneficial way for the audience.',
        speakers: [
          { SpeakerList1: "Jeffrey Andrews || Minority Social Worker" },
          { SpeakerList2: "Lambert Chan || Adjunct Professor, Deputy Programme Leader, City University of Hong Kong" },
          { SpeakerList3: "Ariel Huang || Musician, Professor" },
          { SpeakerList4: "Priyanka Jain || Director, Transconsult Pvt. Ltd." },
          { SpeakerList5: "Londiwe Ngubeni || Singer, Freelancer, Model" },
          { SpeakerList6: "Kevin Pereira || Managing Director, Blu Artificial Intelligence" },
          { SpeakerList7: "" },
          { SpeakerList8: "" },
        ]
      },
      {
        img: PE2023,
        title: "2023: Step by Step",
        desc:"After a one-year break during the Covid-19 pandemic, TEDxCityUHongKong returns with “Step by Step.” This theme focuses on the little steps everyone can take in life to improve, with first-hand experiences from inspiring Hong Kong-based experts who talked about the steps they have taken to develop their respective fields or personal projects. This year features talks on sustainable fashion, biomedical innovation, accepting and appreciating neurodiversity, honoring Hong Kong's heritage, and creative self-expression as a coping mechanism.",
        speakers: [
          { SpeakerList1: "Alving C. K. Lam || Home-grown Artist" },
          { SpeakerList2: "Christina Dean || Founder, Redress NGO" },
          { SpeakerList3: "Colin Ng || Founder and CEO, Greater Bay Biotechnology" },
          { SpeakerList4: "Noelle Sinclair || Founder, DiverseMinds Ltd." },
          { SpeakerList5: "Vita Henderson-Chan || Founder, Light of Prometheus, Artist, and Musician" },
          { SpeakerList6: "" },
          { SpeakerList7: "" },
          { SpeakerList8: "" },
        ]
      },
      {
        img: PE2021,
        title: "2021: Rewind. Re-find. Redefine",
        desc:"Our theme in 2021 was “Rewind, Re-find, Redefine.” Our audience got a chance to listen to the inspiring stories of our speakers from the fields of Technology, Science, Art, as well as Humanitarianism. These pioneers shared how their special work affects the world, and also how they are striving to create a more solid future amidst this time of uncertainty.",
        speakers: [
          { SpeakerList1: "Emery Fung || Podcast Host, Awkward Turtle at Work" },
          { SpeakerList2: "Jacky Lai || Founder and CEO, Peeba" },
          { SpeakerList3: "Jonathan Jay Lee || Award-winning Illustrator" },
          { SpeakerList4: "Olivia Cotes-James || Founder and CEO, LUÜNA Naturals" },
          { SpeakerList5: "Sally Wong || Founder, CityU Toastmasters Club" },
          { SpeakerList6: "" },
          { SpeakerList7: "" },
          { SpeakerList8: "" },
        ]
      },
      {
        img: PE2018,
        title: "2018: Begin With",
        desc:"To begin is to dream, and the first and most important seed lies within yourself. Our theme in 2018 was to empower individuals to work on themselves and develop the courage and character to follow their hearts. The theme entailed multiple elements, and the one of utmost importance was the sowing of inspiring ideas that motivates us to be our best selves. Everything, from mankind to spaceship, began with something negligible before evolving into something spectacular. Through this event, we wanted to help our audience find that ‘little thing’ to ‘Begin With’. Our speakers offered our community a yearly dose of inspiration with a mix of delightful stories along the way.",
        speakers: [
          { SpeakerList1: "Helen Chan || Business Development Director, Urban Spring Co." },
          { SpeakerList2: "Jey Chan || Programme Manager, Inter Cultural Education Ltd." },
          { SpeakerList3: "Lavine Hemlani || Founder, Xccelerate Co." },
          { SpeakerList4: "Sheila Claudi-Partrat || Co-founder, Protelicious Co." },
          { SpeakerList5: "Vincci Hui || Head of Project Management, HKCF" },
          { SpeakerList6: "" },
          { SpeakerList7: "" },
          { SpeakerList8: "" },
        ]
      },
      {
        img: PE2017,
        title: "2017: Pushing the Envelope",
        desc:"Pushing the Envelope is a phrase used in an aeronautic context by test pilots who were determining just how far it was safe to go with the aim of doing better than before. For us, the envelope symbolizes the upper and lower limits of the various factors in our life, whether it be academic, career, or personal decisions. Through the talks the theme encouraged us to recognize and accept our own potential by going the extra mile to make our ambitions work. To take the risk and see just how far we go...",
        speakers: [
          { SpeakerList1: "Dagmar Boettger || Innovation Leadership Coach" },
          { SpeakerList2: "Jian Lu || Distinguished Material Scientist" },
          { SpeakerList3: "Kinni Mew || Founder, Mindlayer Ltd." },
          { SpeakerList4: "Lori Granito || AmCham Women of Influence Entrepreneur 2016" },
          { SpeakerList5: "Neelam Tewar Siddhant Gupta || Inventor of Smallest Robot in India" },
          { SpeakerList6: "Sonia Samtani || Managing Director of All About You" },
          { SpeakerList7: "Tom Tse || CityU Student, Radio Host, and Writer" },
          { SpeakerList8: "" },
        ]
      },
      {
        img: PE2016,
        title: "2016: Challenging Conformity",
        desc:"As an old saying goes, “if you never try, you will never know.” Sometimes we just must embrace the uncertainty of life, be slightly braver and try something new. You never know what to expect, yet often, it’s the occasion where we truly identify our passion and purpose. So why not take the risk? We either learn some or earn some. In 2016, we invited our audience to challenge conformities and step outside their comfort zones.",
        speakers: [
          { SpeakerList1: "Gordon Bedford || EHS & CSR Director + Risk Professional" },
          { SpeakerList2: "Iverson Ng || Journalist + Blogger" },
          { SpeakerList3: "Jamie Chiu || Clinical Psychologist + CEO (Lulio)" },
          { SpeakerList4: "Jason Dembski || Founder, HKwalls + Design Guru" },
          { SpeakerList5: "Marco So || Fresh Graduate + Biotech Startup" },
          { SpeakerList6: "Suzanne So || Education Entrepreneur" },
          { SpeakerList7: "Till Kraemer || Intercultural Education + Social Enterprise General Manager" },
          { SpeakerList8: "Yun Wah Lam || Researcher and Associate Professor" },
        ]
      },
    ]

    return (
      <>
      <Banner text1={"PAST"} text2={<span style={{color:"black"}}>EVENTS</span>}/>
        {eventcards.map((eventcard)=> {
          return(
          <EventCard 
          img={eventcard.img} 
          title={eventcard.title} 
          desc={eventcard.desc} 
          MappedSpeakers = {eventcard.speakers.map((speaker) => {
            return (
              <>
                  <ListItems>{speaker.SpeakerList1}</ListItems>
                  <ListItems>{speaker.SpeakerList2}</ListItems>
                  <ListItems>{speaker.SpeakerList3}</ListItems>
                  <ListItems>{speaker.SpeakerList4}</ListItems>
                  <ListItems>{speaker.SpeakerList5}</ListItems>
                  <ListItems>{speaker.SpeakerList6}</ListItems>
                  <ListItems>{speaker.SpeakerList7}</ListItems>
                  <ListItems>{speaker.SpeakerList8}</ListItems>
              </>
                );
          })
        }
          />
          );
        })}
      {/* <Footer /> */}
      </>
      
      );
}