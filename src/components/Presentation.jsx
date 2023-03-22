import picture from '../assets/pic.jpg';

function Presentation() {

    // This component will contain some text and a picture with rounded corners

    return (
        <section className="presentation">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum nulla quod incidunt consequuntur impedit animi, ipsa atque? Magnam facere voluptas sapiente exercitationem modi harum ut veritatis excepturi rerum tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum nulla quod incidunt consequuntur impedit animi, ipsa atque? Magnam facere voluptas sapiente exercitationem modi harum ut veritatis excepturi rerum tempora.</p>

            <img src={picture} alt="Waterfall" />
        </section>)
}

export default Presentation;