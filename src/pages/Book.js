import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Book.css";

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Narnia", id: 1,
            rate: 2,
            genre: "Adventure,Fantasy",
            img: "https://th.bing.com/th/id/OIP.vFX50yOmv1qNHBv-eaBrwQAAAA?pid=ImgDet&rs=1",
            desc:"Buku ini mengisahkan tentang petualangan empat anak - Peter, Susan, Edmund, dan Lucy - yang dievakuasi dari London selama Perang Dunia II dan dikirim untuk tinggal di rumah seorang profesor tua di pedesaan. Di rumah profesor tersebut, mereka menemukan sebuah lemari ajaib yang membawa mereka ke Narnia, dunia ajaib yang dihuni oleh makhluk-makhluk fantastis.            Di Narnia, mereka menemui keajaiban, misteri, dan bahaya. Mereka juga berhadapan dengan Sang Penyihir Putih yang jahat, Jadis, yang telah membenamkan Narnia dalam musim dingin abadi. Bersama dengan bantuan Aslan, seorang singa raksasa yang mewakili kebaikan, mereka berjuang untuk membebaskan Narnia dari kegelapan yang mengancamnya.                        Buku ini penuh dengan petualangan, moralitas, dan simbolisme Kristen. Ia telah menjadi salah satu karya sastra anak-anak yang paling terkenal dan dihormati sepanjang masa, menarik baik anak-anak maupun orang dewasa dengan ceritanya yang mendalam dan berjiwa.."
        },
        {
            title: "Harry Potter :deadly Hallows  ", id: 2,
            rate: 5,
            genre: "Magic,Supernatural,Adventure,Action",
            img: "https://dryuc24b85zbr.cloudfront.net/tes/resources/6441170/image?width=500&height=500&version=1474643904786",
            desc:"Harry Potter bersama teman-temannya, Ron dan Hermione, memutuskan untuk tidak kembali ke Hogwarts dan memilih untuk memburu Horcruxes, benda-benda terkutuk yang mengandung sebagian jiwa Lord Voldemort. Mereka berkeliling dunia sihir untuk menghancurkan Horcruxes dan mempersiapkan diri untuk pertempuran akhir melawan Voldemort. Seiring berjalannya waktu, rahasia-rahasia keluarga Potter terungkap, dan pertempuran epik di Hogwarts memuncak dalam pengungkapan kebenaran tentang kekuatan magis dan cinta. Buku ini mengakhiri kisah epik tentang pertempuran antara kebaikan dan kejahatan di dunia sihir."
        },
        {
            title: "Perahu Kertas", id: 3,
            rate: 5,
            genre: "Romance,Comedy",
            img: "https://m.media-amazon.com/images/M/MV5BNjNhYTRlZTYtZjYwZi00MDFiLTk5MTItN2YyZDcyNzM3ZTQwXkEyXkFqcGdeQXVyMzgxNTk0NTE@._V1_.jpg",
            desc:"Kugy adalah seorang gadis yang kreatif dan bermimpi tinggi, sedangkan Keenan adalah seorang pemuda yang lebih realistis dan pragmatis. Meskipun memiliki kepribadian yang berbeda, mereka saling tertarik satu sama lain. Namun, hubungan mereka diuji oleh berbagai rintangan dan konflik, termasuk perbedaan pandangan hidup dan masalah keluarga. Novel ini menggambarkan perjalanan emosional dan pertumbuhan karakter Kugy dan Keenan, sambil menghadirkan tema-tema tentang impian, cinta, dan komitmen. Dengan gaya penulisan yang khas dan penuh emosi."
        },
        {
            title: "Seven for a Secret", id: 4,
            rate: 5,
            genre: "mystery,History",
            img: "https://th.bing.com/th/id/R.bfd2329abc273242a4b447a52a5bfd8b?rik=00Res0v79FHVWQ&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9781101657485_p0_v3_s1200x630.jpg&ehk=J%2f2HQ0AI4p9slAcj1A0N6fbMkjgOusMQqYSBYsQXNqc%3d&risl=&pid=ImgRaw&r=0",
            desc:" Frank dan Joe Hardy, dua saudara bersaudara yang gemar petualangan, menemukan diri mereka terlibat dalam misteri yang melibatkan harta karun yang hilang. Ketika mereka menyelidiki kasus tersebut, mereka menemukan petunjuk-petunjuk rahasia dan harus menghadapi berbagai rintangan untuk memecahkan teka-teki dan mengungkap kebenaran di balik misteri tersebut. Dengan bantuan kecerdasan, keberanian, dan kolaborasi tim, mereka berusaha untuk mengungkapkan rahasia yang tersembunyi di balik harta karun yang misterius."
        },
        
    ];
    
    const navigateToDetailPage = (item) => {
        navigate(`/book/detail/${item.id}`, { state: { movieData: item } });
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
