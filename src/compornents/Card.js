
export default function Card(props){
	return(
		<div className="card" style={{backgroundImage: `url(${props.backImage})`}} >
			<h2>{props.topText}</h2>
			<h2>{props.bottomText}</h2>
		</div>
	)
}