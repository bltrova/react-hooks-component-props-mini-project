function About(props) {
    const { image, about } = props;
    const imgPlaceholder = "https://via.placeholder.com/215";

    return (
        <aside>
            <img src={image ? image : imgPlaceholder} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;