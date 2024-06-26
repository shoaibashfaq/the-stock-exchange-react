
export default function Product(props) {
    return <>
        <div className="card" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
            <div className="card-body">

                <div className="card-text">{props.data.feature}</div>
                <a href="">Click to buy!</a>
            </div>
        </div>
    </>
}