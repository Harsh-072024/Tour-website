import React, {useEffect} from "react";
import './main.css'

// import icons
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";

// Let me import the images so we don't have this error on the browser.
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'

import Aos from "aos";
import 'aos/dist/aos.css'

// Let me pate the array named data
const Data= [
    {
        id:1,
        imgSrc: img,
        descTitle:'Bora Bora',
        location:'New Zealand',
        grade: 'CULTURAL RELAX',
        fees:'$700',
        description:'The eptiome of romance, Bora Bora is one of the boost travel destination in the world. This place is known for its luxurioux stays and adventurous activities.'
    },
    {
        id:2,
        imgSrc: img2,
        descTitle:'Machu Picchu',
        location:'Peru',
        grade: 'CULTURAL RELAX',
        fees:'$600',
        description:'Huyana Picchu is a mountain in peru, rising over Machu Picchu, the so called Lost city of Incans Tis place is popular among tourists as the sunrise from the Sun Gate is simply spectular'
    },
    {
        id:3,
        imgSrc: img3,
        descTitle:'Great Barrier Reef',
        location:'Australia',
        grade: 'CULTURAL RELAX',
        fees:'$700',
        description:'One of the most remarkable Australian natural gifts is the great Barrier Reef. The hallmark of the place is Lavish and beauty. Always intersting to be in this place'
    },
    {
        id:4,
        imgSrc: img4,
        descTitle:'Cappadocia',
        location:'Turkey',
        grade: 'CULTURAL RELAX',
        fees:'$800',
        description:'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities'
    },
    {
        id:5,
        imgSrc: img5,
        descTitle:'Guyanjuato',
        location:'Mexico',
        grade: 'CULTURAL RELAX',
        fees:'$1100',
        description:'A city in centeral Mexico, Guanajuato is known for its history of silver mining and colonial Architecture. The houdse in the city are very attractively painted with the most bright colors available. Always welcome'
    },
    {
        id:6,
        imgSrc: img6,
        descTitle:'Cinque Terre',
        location:'Italy',
        grade: 'CULTURAL RELAX',
        fees:'$840',
        description:'The vibrant hues of the houses are its banchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to  get here . Happy exploring great food!'
    },
    {
        id:7,
        imgSrc: img7,
        descTitle:'Angkor Wat',
        location:'Cambodia',
        grade: 'CULTURAL RELAX',
        fees:'$790',
        description:'Angkot wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of cambodia. This place is known for its luxurious stays and adventurous activities'
    },
    {
        id:8,
        imgSrc: img8,
        descTitle:'Taj Mahal',
        location:'India',
        grade: 'CULTURAL RELAX',
        fees:'$900',
        description:'An immnense mausoleum of white marble, built in Agra by Mughal emperor Shah Jahan inn memory of his wife Mumtaz, the monument is breathtaking beautiful. This place is known for its luxurious stays and adventurous activities'
    },
    {
        id:9,
        imgSrc: img9,
        descTitle:'Bali Island',
        location:'Indonesia',
        grade: 'CULTURAL RELAX',
        fees:'$500',
        description:'Bali is an Indonesian Island and one of the best holiday destination in the Indonesian archiepelago. Bali is known for the volcanic  mountains, history art & culture, food , temples and beautiful sandy beaches'
    },
]
const Main = () => {
        //Lets create areact hook to add a scroll animation....
        useEffect(()=>{
            Aos.init({duration: 2000})
        }, [])


    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited destinantion
                </h3>
            </div>

            <div className="secContent grid">
                {/* here we are going to use high ordfer array method(map).to do that we shall use a list of object in one array.I'm going to create an array named data and from that we shall .map() array to fetch each destination at once ,. I hope this will make sence to you */}

                {
                    Data.map(({id, imgSrc, descTitle, location, grade, fees, description} )=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {/* here it will return single id from the map array */}

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={descTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="descTitle">{descTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main 