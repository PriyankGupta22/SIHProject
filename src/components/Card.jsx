import "./Card.css";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"

export default function Card() {
    return (
        <div>
        <h1 className="headi">The Heart of India's
Cultural Heritage</h1>
        <div className="card-wrapper">

            
            {/* 1 */}
            <div className="culture-card">
                {/* Image Section */}
                <div className="image-container">
                    <img
                        src={img1}
                        alt="Traditional Festivals"
                        className="card-image"
                    />
                    <div className="overlay"></div>
                    <div className="badge">Sacred</div>
                </div>

                {/* Content Section */}
                <div className="card-content">
                    <h3 className="card-title">Traditional Festivals</h3>
                    <p className="card-text">
                        Experience the vibrant celebrations of Sarhul, Karma, Sohrai, and Jitiya
                        festivals that connect the tribal communities with nature and their
                        ancestors.
                    </p>
                </div>
            </div>

            {/* 2 */}
            <div className="culture-card">
                {/* Image Section */}
                <div className="image-container">
                    <img
                        src={img2}
                        alt="Traditional Festivals"
                        className="card-image"
                    />
                    <div className="overlay"></div>
                    <div className="badge">Traditional</div>
                </div>

                {/* Content Section */}
                <div className="card-content">
                    <h3 className="card-title">Tribal Dances</h3>
                    <p className="card-text">
                        Witness the rhythmic beauty of Jhumar, Paika, Chhau, and Santhal dances that tell stories of harvest, love, and spiritual connection.
                    </p>
                </div>
            </div>

            {/* 3 */}
            <div className="culture-card">
                {/* Image Section */}
                <div className="image-container">
                    <img
                        src={img3}
                        alt="Traditional Festivals"
                        className="card-image"
                    />
                    <div className="overlay"></div>
                    <div className="badge">Artisan Made</div>
                </div>

                {/* Content Section */}
                <div className="card-content">
                    <h3 className="card-title">Handicrafts & Arts</h3>
                    <p className="card-text">

                        Discover exquisite bamboo crafts, tribal pottery, Paitkar paintings, and traditional textiles that showcase the artistic heritage of Jharkhand.
                    </p>
                </div>
            </div>

            {/* 4 */}
            <div className="culture-card">
                {/* Image Section */}
                <div className="image-container">
                    <img
                        src={img4}
                        alt="Traditional Festivals"
                        className="card-image"
                    />
                    <div className="overlay"></div>
                    <div className="badge">Melodic</div>
                </div>

                {/* Content Section */}
                <div className="card-content">
                    <h3 className="card-title">Music & Instruments</h3>
                    <p className="card-text">

                        Listen to the soulful melodies created with traditional instruments like Dhol, Mandar, Nagada, and Bansi that echo through the forests.
                    </p>
                </div>
            </div>
            {/* 5 */}
            <div className="culture-card">
                {/* Image Section */}
                <div className="image-container">
                    <img
                        src={img5}
                        alt="Traditional Festivals"
                        className="card-image"
                    />
                    <div className="overlay"></div>
                    <div className="badge">Ancient</div>
                </div>

                {/* Content Section */}
                <div className="card-content">
                    <h3 className="card-title">Tribal Heritage</h3>
                    <p className="card-text">

                        Learn about the rich history and customs of indigenous communities including Santhal, Munda, Oraon, and Ho tribes.
                    </p>
                </div>
            </div>

            {/* 6 */}
            <div className="culture-card">
                {/* Image Section */}
                <div className="image-container">
                    <img
                        src={img6}
                        alt="Traditional Festivals"
                        className="card-image"
                    />
                    <div className="overlay"></div>
                    <div className="badge">Sacred</div>
                </div>

                {/* Content Section */}
                <div className="card-content">
                    <h3 className="card-title">Natural Wisdom</h3>
                    <p className="card-text">

                        Understand the deep connection between tribal culture and nature, where every tree, river, and mountain holds spiritual significance.
                    </p>
                </div>
            </div>


        </div>
        </div>
    );
}
