import { Fragment } from "react";
import { useNavigate } from 'react-router-dom'; 

import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "John Wick 4", id: 1,
            rate: 4,
            genre: "Action, Crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            desc:"Condemned by the tyrannical High Table to be on the run for the rest of his life, deadly assassin maestro John Wick (2014) embarks on a Sisyphean mission of suicidal fury to decide his fate after the merciless carnage in John Wick: Chapter 3 - Parabellum (2019). At last, John's violent journey, fuelled by vengeance and grief, ultimately leads him to a fateful confrontation with his former employers, the crime masters that forced him into exile. And as the blood-stained vendetta to destroy those who pull the strings continues, old companions face the brutal consequences of friendship, and all-powerful, well-connected adversaries emerge to bring Wick's head on a platter. But talk is cheap--now guns have the final say. Can Baba Yaga, the grim messiah of death, make every bullet count in this bloody, once-and-for-all struggle for freedom?"
        },
        {
            title: "Oppenheimer", id: 2,
            rate: 4,
            genre: "Biography, Drama, History",
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
            desc:"J. Robert Oppenheimer, the creator of The Atomic Bomb, is put on trial for his supposed communist ties in the past, all while coming to terms with what it meant to change the history of the world for the sake of winning World War Two. This is the story of how America's Prometheus was cast out by The Gods for giving mankind an unthinkable gift: power unlike any other, the power to destroy the world; the power of Olympus."
        },
        {
            title: "Doraemon The Movie: Nobitas Sky Utopia", id: 3,
            rate: 5,
            genre: "Animation,Adventure",
            img: "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/12/Doraemon-Nobita-to-Sora-no-Utopia-poster-1-scaled.jpg?w=1392&ssl=1",
            desc:"“Doraemon The Movie: Nobitas Sky Utopia” adalah film animasi Jepang bergenre fiksi petualangan yang dirilis pada tahun 2023. Film ini merupakan karya dari sutradara Takumi Doyama dan diproduksi oleh Shin-Ei Animation. Adapun pengisi suara yang mengisi suara di film ini adalah Wasabi Mizuta (Doraemon), Megumi Ohara (Nobita), dan Yumi Kakazu (Shizuka). Film ini menceritakan Doraemon, Nobita, dan teman-temannya yang berpetualang untuk menemukan Utopia, sebuah pulau di atas langit dengan penduduknya yang hidup bahagia. Doraemon, Nobita, dan teman-temannya akan berpetualang menggunakan pesawat yang memiliki fungsi mesin waktu. Apakah Doraemon, Nobita, dan teman-temannya berhasil menemukan Utopia? Saksikan film Doraemon The Movie: Nobita Sky Utopia yang akan segera tayang di CGV."
        },
        {
            title: "A Haunting In Venice ", id: 4,
            rate: 2,
            genre: "Thriller,Mystery,Supernatural,Horror",
            img: "https://th.bing.com/th/id/OIP.EMGOkfbkk9eUgGzcr_dPNAHaLH?pid=ImgDet&rs=1",
            desc: "Hercule Poirot memutuskan untuk pensiun dari pekerjaannya sebagai detektif. Ia kini tinggal dengan tenang di Venesia tanpa merilik kasus-kasus apapun yang datang kepadanya. Suatu hari, teman lamanya yang berprofesi sebagai penulis bernama Ariadne Oliver datang berkunjung dengan membawa cerita tentang pemanggilan arwah oleh Joyce Reynolds ."
            
        },
    ];

    // Create a function to navigate to the DetailPage with the selected movie data
    const navigateToDetailPage = (item) => {
        navigate(`/movie/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            rate={item.rate}
                            onClick={() => navigateToDetailPage(item)} 
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="movies">All Movies</p>
                    {poster.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                rate={item.rate}
                                onClick={() => navigateToDetailPage(item)} 
                            />
                            {poster.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
