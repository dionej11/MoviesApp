export default function Card({ value }) {
    return (
        <div>
            <div>image</div>
            <div>
                <h3>{value.title}</h3>
                <p>{value.overview}</p>
            </div>
            <div>
                <button>+</button>
            </div>
        </div>
    );
}