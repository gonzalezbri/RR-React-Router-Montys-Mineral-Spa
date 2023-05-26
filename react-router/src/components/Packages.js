

export default function Packages(props) {

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                    <ul>
                    {props.packages.map((element,i)=><li style={{fontSize:'20px'}} key={i}>{element}</li>)}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}