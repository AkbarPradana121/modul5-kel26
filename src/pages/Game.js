import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Game.css";

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "DOOM", id: 1,
            rate: 4,
            genre: "Action,Shooting,Strategy",
            img: "https://th.bing.com/th/id/OIP.k_OObx0r_GmsXN4-g3gKNgHaLG?pid=ImgDet&rs=1",
            desc:"Developed by id software, the studio that pioneered the first-person shooter genre and created multiplayer Deathmatch, DOOM returns as a brutally fun and challenging modern-day shooter experience. Relentless demons, impossibly destructive guns, and fast, fluid movement provide the foundation for intense, first-person combat – whether you’re obliterating demon hordes through the depths of Hell in the single-player campaign, or competing against your friends in numerous multiplayer modes. Expand your gameplay experience using DOOM SnapMap game editor to easily create, play, and share your content with the world."
        },
        {
            title: "Counter Strike 2", id: 2,
            rate: 3,
            genre: "FPS",
            img: "https://cdn.sanity.io/images/hdokr93d/production/5c57ed5aba24492b9460f49fda8f9a220b0a8236-1200x1200.jpg?rect=150,0,900,1200&w=600&h=800",
            desc:"For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2."
        },
        {
            title: "rune factory 4", id: 3,
            rate: 4,
            genre: "farming,Adventure,Simulation",
            img: "https://th.bing.com/th/id/OIP.tPbs6xxfGEK-8mhdbf-NIgHaIH?pid=ImgDet&rs=1",
            desc:"Rune Factory 4 adalah permainan peran yang menggabungkan elemen simulasi kebun, pertanian, dan pertarungan RPG. Pemain memulai petualangan mereka sebagai seorang pangeran atau putri yang menderita amnesia dan tiba-tiba terdampar di kota kecil bernama Selphia. Di sana, mereka diangkat sebagai kepala desa dan bertanggung jawab untuk mengelola kehidupan sehari-hari kota, termasuk mengurus pertanian, berkebun, memancing, dan berinteraksi dengan penduduk setempat. Selain itu, pemain juga akan berpetualang ke dalam dunia berbahaya di luar kota, melawan monster dan mengejar misi untuk memulihkan keseimbangan di dunia Rune Factory. Melalui permainan ini, pemain dapat membangun hubungan dengan karakter lain, membangun pertanian yang makmur, dan memperluas dunia Rune Factory dengan mengeksplorasi dungeon dan menghadapi tantangan yang menarik. Rune Factory 4 menawarkan pengalaman bermain yang mendalam dan memikat dengan kombinasi unik dari genre yang berbeda."
        },
        {
            title: "Pokemon Ultra Sun", id: 4,
            rate: 4,
            genre: "Relax,Adventure,Role-play",
            img: "https://th.bing.com/th/id/OIP.k2cBjybIS_KIgPNAwbtJogHaGw?pid=ImgDet&rs=1",
            desc:"Pokemon Ultra Sun adalah permainan video yang dikembangkan oleh Game Freak dan diterbitkan oleh Nintendo untuk konsol Nintendo 3DS. Ini adalah versi tambahan dari game sebelumnya,Pokemon Sun, dengan beberapa perbedaan dan penambahan cerita. Pemain memulai petualangan sebagai seorang pelatih Pokemon di wilayah Alola, mengumpulkan dan melatih berbagai jenis Pokemon untuk menjadi juara Pokemon. Di sepanjang perjalanan, mereka akan menghadapi berbagai tantangan, termasuk bertarung melawan para Pelatih dan menghadapi Tim Skull yang jahat. Terdapat juga cerita tambahan yang melibatkan Ultra Beast dan legenda Pokemon Solgaleo. Dengan grafik yang memukau, gameplay yang seru, dan berbagai Pokemon baru dan legendaris untuk ditangkap, Pokemon Ultra Sun menawarkan pengalaman yang mendebarkan bagi para penggemar franchise Pokemon."
        },
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/game/detail/${item.id}`, { state: { movieData: item } });
    };
    

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => navigateToDetailPage(item)} 
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
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} rate={item.rate} 
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
